import Reveal from './Reveal'

/** Numbered editorial section heading. */
export default function SectionHeading({ index, eyebrow, title, intro, id, className = '', tone = 'accent' }) {
  const indexColor = tone === 'philips' ? 'text-philips' : 'text-accent-deep'
  return (
    <Reveal className={`grid gap-6 md:grid-cols-12 ${className}`}>
      <div className="md:col-span-3">
        <p className="eyebrow flex items-center gap-3">
          {index && <span className={`font-serif text-base normal-case italic tracking-normal ${indexColor}`}>{index}</span>}
          {eyebrow}
        </p>
      </div>
      <div className="md:col-span-9">
        <h2 id={id} className="max-w-3xl text-[2.1rem] leading-[1.05] sm:text-5xl lg:text-[3.9rem]">
          {title}
        </h2>
        {intro && <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">{intro}</p>}
      </div>
    </Reveal>
  )
}
