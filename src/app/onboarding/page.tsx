import { createClient } from '@/lib/supabase/client'
import { redirect } from 'next/navigation'

export default function OnboardingPage() {
  const handleSignUp = async (formData: FormData) => {
    'use server'
    
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const supabase = createClient()

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      return redirect('/onboarding?message=Could not create user')
    }

    return redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form className="flex flex-col gap-4" action={handleSignUp}>
        <h1 className="text-2xl font-bold">Welcome to SaeTurtle</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="rounded border p-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="rounded border p-2"
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}
