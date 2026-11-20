import { Button, TextLink } from '../components/Button'
import ImageSlot from '../components/ImageSlot'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import useSeo from '../components/useSeo'
import { achievements, images, philips, profile, projects } from '../data/site'

export default function Home() {
  useSeo(null, 'Van Anh Tran — International Communication and Media student at Erasmus University Rotterdam and former Philips Talent Marketing Intern. Branding, consumer behaviour, digital marketing and strategic communications.')
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      {/* ── Hero ───────────────────────────────────── */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden bg-gradient-to-b from-cream via-cream/70 to-paper">
        {/* Warm sand panel behind the portrait (desktop) */}
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[34%] bg-sand/70 lg:block" />
        <div className="relative container-x pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-mocha" />
                Marketing · Brand · Strategic Communications
              </p>
              <h1 id="hero-title" className="mt-8 text-[2.9rem] leading-[0.98] font-light sm:text-[5rem] lg:text-[7rem]">
                Stories that make brands <em className="font-normal text-accent">worth</em> choosing.
              </h1>
            </Reveal>
            <Reveal delay={150} className="mt-10 max-w-xl">
              <p className="text-lg leading-relaxed text-slate">
                I’m Van Anh — an International Communication and Media student at Erasmus University Rotterdam and,
                most recently, a Talent Marketing Intern at Philips. I work where branding, consumer behaviour and
                strategic communications meet.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button to="/projects">View selected work</Button>
                <Button to="/about" variant="secondary" icon={null}>About me</Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={250} className="lg:col-span-5">
            <figure>
              <div className="relative">
                {/* Offset cocoa frame */}
                <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm border border-cocoa/35 sm:translate-x-5 sm:translate-y-5" />
                <ImageSlot image={images.portrait} priority className="relative rounded-sm shadow-[0_30px_60px_-30px_rgba(79,56,36,0.45)]" />
              </div>
              <figcaption className="mt-8 flex items-center justify-between text-xs tracking-[0.18em] text-mocha uppercase sm:mt-10">
                <span>Van Anh Tran</span>
                <span className="font-serif text-sm normal-case italic tracking-normal">Rotterdam, 2026</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={300} as="dl" className="mt-20 grid gap-8 border-t border-cocoa/15 pt-8 sm:grid-cols-3">
          {[
            ['Studying', 'BSc International Communication & Media, Erasmus University Rotterdam — exp. 2027'],
            ['Recently', 'Talent Marketing Intern, Philips — Mar to Aug 2026'],
            ['Based in', profile.location],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="eyebrow text-mocha">{k}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-ink">{v}</dd>
            </div>
          ))}
        </Reveal>
        </div>
      </section>

      {/* ── Focus band ─────────────────────────────── */}
      <section aria-label="Areas of interest" className="border-y border-ink/10 bg-fog/60">
        <ul className="container-x flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-8 font-serif text-xl font-light italic text-navy sm:text-2xl">
          {profile.focus.map((f, i) => (
            <li key={f} className="flex items-center gap-8">
              {f}
              {i < profile.focus.length - 1 && <span aria-hidden="true" className="hidden h-1.5 w-1.5 rounded-full bg-accent lg:block" />}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Featured work ──────────────────────────── */}
      <section aria-labelledby="featured" className="container-x py-28 sm:py-36">
        <SectionHeading
          id="featured"
          index="01"
          eyebrow="Selected work"
          title="Content, campaigns and communities."
          intro="A few projects that show how I think about audiences, channels and the stories in between."
        />
        <div className="mt-20 grid gap-x-10 gap-y-20 md:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100} className={i === 0 && featured.length % 2 ? 'md:col-span-2' : ''}>
              <ProjectCard project={p} index={projects.indexOf(p)} wide={i === 0 && featured.length % 2 === 1} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-20 flex justify-center">
          <Button to="/projects" variant="secondary">All projects</Button>
        </Reveal>
      </section>

      {/* ── Philips spotlight ──────────────────────── */}
      <section aria-labelledby="spotlight" className="bg-accent-soft/60 py-28 sm:py-36">
        <div className="container-x">
          <SectionHeading
            id="spotlight"
            index="02"
            eyebrow="Experience spotlight"
            title={<>Six months shaping the <em>Philips</em> employer brand.</>}
          />
          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <ImageSlot image={images.philips} aspect="aspect-[3/4]" className="rounded-sm" />
            </Reveal>
            <div className="lg:col-span-7 lg:self-center">
              <ol className="divide-y divide-ink/12 border-y border-ink/12">
                {philips.pillars.map((p, i) => (
                  <Reveal as="li" key={p.no} delay={i * 100} className="grid grid-cols-[3rem_1fr] gap-4 py-7">
                    <span className="font-serif text-lg italic text-accent-deep">{p.no}</span>
                    <div>
                      <h3 className="text-xl font-normal">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">{p.body}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
              <Reveal className="mt-10">
                <TextLink to="/experience">Read the full story</TextLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights ─────────────────────────────── */}
      <section aria-labelledby="highlights" className="container-x py-28 sm:py-36">
        <SectionHeading id="highlights" index="03" eyebrow="Beyond the classroom" title="Building audiences and communities." />
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="grid gap-px self-start overflow-hidden rounded-sm bg-ink/10 sm:grid-cols-2 lg:col-span-8">
            {achievements.map((a, i) => (
              <Reveal key={a.label} delay={i * 120} className="bg-paper p-8 sm:p-10">
                <p className="font-serif text-6xl font-light text-ink sm:text-7xl">{a.figure}</p>
                <p className="eyebrow mt-4 text-accent-deep">{a.label}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate">{a.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="lg:col-span-4">
            <figure>
              <ImageSlot image={images.creative} aspect="aspect-[3/4]" className="rounded-sm" />
              <figcaption className="mt-4 flex justify-between text-xs tracking-[0.18em] text-slate uppercase">
                <span>TikTok</span>
                <span className="font-serif text-sm normal-case italic tracking-normal">Vlogs from Hanoi</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
    </>
  )
}
