type Props = {
  eyebrow?: string
  title: string
  description?: string
}

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-2xl font-semibold text-neutral-100 sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-2 text-neutral-400">{description}</p>
      )}
    </div>
  )
}
