import Reveal from './Reveal'

/** Top-of-page heading used on inner pages. */
export default function PageHero({ eyebrow, title, intro, children }) {
  return (
    <header className="container-x pt-36 pb-16 sm:pt-44 sm:pb-24">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl text-[2.9rem] leading-[1] sm:text-7xl lg:text-[6.25rem]">{title}</h1>
      </Reveal>
      {intro && (
        <Reveal delay={120} className="mt-10 grid gap-8 md:grid-cols-12">
          <p className="text-lg leading-relaxed text-slate md:col-span-7 md:col-start-6">{intro}</p>
        </Reveal>
      )}
      {children}
    </header>
  )
}
