import { redirect } from 'next/navigation'
import { getSession } from '@/lib/supabase/server'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { 
    message?: string 
    redirectedFrom?: string
  }
}) {
  const session = await getSession()
  if (session) redirect('/dashboard')

  const handleSignIn = async (formData: FormData) => {
    'use server'
    
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createSupabaseServerClient(cookieStore)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    const redirectTo = formData.get('redirectFrom') as string || '/dashboard'

    if (error) {
      return redirect(`/login?message=${encodeURIComponent(error.message)}`)
    }

    return redirect(redirectTo)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Welcome to SaeTurtle</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={handleSignIn}>
            {searchParams.message && (
              <p className="text-sm text-destructive">{searchParams.message}</p>
            )}
            <input type="hidden" name="redirectFrom" defaultValue={searchParams.redirectedFrom} />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
