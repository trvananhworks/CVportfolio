import { TextLink } from '../components/Button'
import ImageSlot from '../components/ImageSlot'
import PageHero from '../components/PageHero'
import Placeholder from '../components/Placeholder'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import useSeo from '../components/useSeo'
import { earlierExperience, images, philips } from '../data/site'

export default function Experience() {
  useSeo('Experience', 'Van Anh Tran’s Talent Marketing internship at Philips and earlier communication roles.')

  return (
    <>
      <PageHero
        eyebrow="Experience"
        title={<>Talent Marketing <em className="text-accent">at Philips.</em></>}
        intro="Six months helping a global health-technology company tell its story to prospective talent — across channels, markets and stakeholders."
      />

      {/* Fact sheet */}
      <section aria-label="Role overview" className="container-x">
        <Reveal as="dl" className="grid gap-px overflow-hidden rounded-sm bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Role', philips.role],
            ['Period', philips.period],
            ['Channels', philips.channels.join(' · ')],
            ['Worked with', philips.stakeholders.join(' · ')],
          ].map(([k, v]) => (
            <div key={k} className="bg-paper p-6 sm:p-8">
              <dt className="eyebrow">{k}</dt>
              <dd className="mt-3 font-serif text-xl font-light">{v}</dd>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Pillars */}
      <section aria-labelledby="contributions" className="container-x py-28 sm:py-36">
        <SectionHeading id="contributions" index="01" eyebrow="Contributions" title="Three threads that ran through the work." />
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure className="lg:sticky lg:top-28">
              <ImageSlot image={images.philips} aspect="aspect-[3/4]" className="rounded-sm" />
              <figcaption className="mt-4 flex justify-between text-xs tracking-[0.18em] text-slate uppercase">
                <span>Philips</span>
                <span className="font-serif text-sm normal-case italic tracking-normal">Talent Marketing, 2026</span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="space-y-14 lg:col-span-7">
            {philips.pillars.map((p, i) => (
              <Reveal key={p.no} delay={i * 120} className="group grid gap-4 border-t border-ink pt-8 sm:grid-cols-[6rem_1fr]">
                <p className="font-serif text-5xl font-light text-accent transition-colors duration-700 ease-soft group-hover:text-accent-deep sm:text-6xl">{p.no}</p>
                <div>
                  <h3 className="text-2xl font-light sm:text-3xl">{p.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process" className="bg-ink text-paper">
        <div className="container-x py-28 sm:py-36">
          <Reveal>
            <p className="eyebrow text-paper/55"><span className="mr-3 font-serif text-base normal-case italic tracking-normal text-accent-light">02</span>How the work flowed</p>
            <h2 id="process" className="mt-6 max-w-3xl text-3xl leading-[1.1] font-light sm:text-5xl">From hiring priorities to published stories — and back.</h2>
          </Reveal>
          <ol className="mt-16 grid gap-px overflow-hidden rounded-sm bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
            {philips.process.map((s, i) => (
              <Reveal as="li" key={s.step} delay={i * 120} className="relative bg-ink p-8">
                <span className="text-xs tracking-[0.2em] text-paper/45">STEP {i + 1}</span>
                <h3 className="mt-4 font-serif text-3xl font-light italic text-accent-light">{s.step}</h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/70">{s.body}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-8 text-xs text-paper/45">
            Each step summarises responsibilities listed on my CV.
          </Reveal>
        </div>
      </section>

      {/* Highlights & learnings */}
      <section aria-labelledby="learnings" className="container-x py-28 sm:py-36">
        <SectionHeading id="learnings" index="03" eyebrow="Highlights & learnings" title="What I’m taking with me." />
        <div className="mt-14 grid gap-6 md:ml-[25%] md:grid-cols-2">
          <Reveal><Placeholder>Highlight project — a campaign or story you worked on that you can share publicly.</Placeholder></Reveal>
          <Reveal delay={80}><Placeholder>Key learning #1 — e.g. about adapting employer brand messages to different markets.</Placeholder></Reveal>
          <Reveal delay={160}><Placeholder>Key learning #2 — e.g. about using recruitment analytics to inform content decisions.</Placeholder></Reveal>
          <Reveal delay={240}><Placeholder>Key learning #3 — e.g. about working with HR, marketing and recruitment stakeholders.</Placeholder></Reveal>
        </div>
        <Reveal className="mt-12 md:ml-[25%]">
          <TextLink to="/projects/employer-branding-philips">View the employer branding project</TextLink>
        </Reveal>
      </section>

      {/* Earlier */}
      <section aria-labelledby="earlier" className="border-t border-ink/10 bg-fog/60">
        <div className="container-x py-28 sm:py-36">
          <SectionHeading id="earlier" index="04" eyebrow="Earlier experience" title="Where communication started for me." />
          <div className="mt-16 grid gap-12 md:ml-[25%] md:grid-cols-2">
            {earlierExperience.map((e, i) => (
              <Reveal as="article" key={e.role} delay={i * 120}>
                <p className="text-sm text-slate">{e.period}</p>
                <h3 className="mt-3 text-2xl font-light">{e.role}</h3>
                <p className="mt-1 text-accent-deep">{e.org}</p>
                <ul className="mt-6 space-y-3">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-slate">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-deep" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
