type EmptyStateProps = {
  title: string
  description: string
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-white/15 bg-black/20 p-6 text-white">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">
        {description}
      </p>
    </div>
  )
}
