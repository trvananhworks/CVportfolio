/** Clearly marked "content to add" note. Never rendered as real content. */
export default function Placeholder({ children, className = '' }) {
  return (
    <p className={`rounded-md border border-dashed border-accent-deep/45 bg-accent-soft/50 px-4 py-3 text-sm leading-relaxed text-accent-deep ${className}`}>
      <span className="mr-2 font-semibold uppercase tracking-[0.14em] text-[0.68rem]">Placeholder</span>
      {children}
    </p>
  )
}
