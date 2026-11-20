import { Button, TextLink } from '../components/Button'
import ImageSlot from '../components/ImageSlot'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'
import useSeo from '../components/useSeo'
import { certifications, earlierExperience, education, images, philips, profile, skills } from '../data/site'

const timeline = [
  { period: philips.period, role: philips.role, org: philips.company },
  ...earlierExperience.map((e) => ({ period: e.period, role: e.role, org: e.org })),
]

export default function About() {
  useSeo('About', 'Education, experience, skills and interests of Van Anh Tran, communication and media student at Erasmus University Rotterdam.')

  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>Curious about why people <em className="text-accent">choose</em> the brands they do.</>}
      />

      <section className="container-x pb-28" aria-label="Introduction">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <ImageSlot image={images.about} aspect="aspect-[4/5]" className="rounded-sm" />
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-slate lg:col-span-6 lg:col-start-7 lg:self-center">
            <p className="font-serif text-2xl leading-snug font-light text-ink sm:text-3xl">
              I’m {profile.fullName}… Van Anh for short, or simply {profile.nickname}.
            </p>
            <p>
              I study International Communication and Media at Erasmus University Rotterdam, graduating in 2027. Before
              Rotterdam, I studied at Chu Van An National High School for the Gifted in Hanoi, where I specialised in
              Geography.
            </p>
            <p>
              My work so far has centred on telling stories to the right audiences, from employer branding at Philips to
              running social media for student organisations and building my own TikTok community. I’m especially
              interested in branding, consumer behaviour, digital marketing and strategic communications.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href={profile.cv} download icon="download">Download CV</Button>
              <Button to="/contact" variant="secondary" icon={null}>Contact</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Education */}
      <section aria-labelledby="education" className="border-t border-ink/10">
        <div className="container-x py-24 sm:py-32">
          <SectionHeading id="education" index="01" eyebrow="Education" title="Academic background." />
          <ul className="mt-14 md:ml-[25%]">
            {education.map((e, i) => (
              <Reveal as="li" key={e.school} delay={i * 100} className="grid gap-2 border-t border-ink/12 py-8 sm:grid-cols-[1fr_auto] sm:gap-8">
                <div>
                  <h3 className="text-2xl font-light">{e.school}</h3>
                  <p className="mt-2 text-slate">{e.degree}</p>
                </div>
                <div className="text-sm text-slate sm:text-right">
                  <p className="text-ink">{e.period}</p>
                  <p className="mt-1">{e.place}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience overview */}
      <section aria-labelledby="experience-overview" className="bg-fog/70">
        <div className="container-x py-24 sm:py-32">
          <SectionHeading id="experience-overview" index="02" eyebrow="Experience" title="Professional experience." />
          <ul className="mt-14 md:ml-[25%]">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.role} delay={i * 80} className="grid gap-1 border-t border-ink/12 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <p className="text-sm text-slate">{t.period}</p>
                <p className="text-lg">
                  {t.role} <span className="text-slate">· {t.org}</span>
                </p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-10 md:ml-[25%]">
            <TextLink to="/experience">See the Philips internship in detail</TextLink>
          </Reveal>
        </div>
      </section>

      {/* Skills & interests */}
      <section aria-labelledby="skills" className="container-x py-24 sm:py-32">
        <SectionHeading id="skills" index="03" eyebrow="Skills & interests" title="What I bring, and what pulls me in." />
        <div className="mt-14 grid gap-12 md:ml-[25%] md:grid-cols-3">
          {[
            ['Interests', profile.focus],
            ['Technical', skills.technical],
            ['Soft skills', skills.soft],
          ].map(([title, items], i) => (
            <Reveal key={title} delay={i * 100}>
              <h3 className="eyebrow text-accent-deep">{title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((s) => <li key={s}><Tag>{s}</Tag></li>)}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 md:ml-[25%]">
          <Reveal as="h3" className="eyebrow text-accent-deep">Certifications</Reveal>
          <ul className="mt-5">
            {certifications.map((c) => (
              <Reveal as="li" key={c.title} className="flex flex-wrap items-baseline justify-between gap-2 border-t border-ink/12 py-4">
                <span>
                  {c.title} <span className="text-slate">· {c.issuer}</span>
                </span>
                <span className="text-sm text-slate">{c.year}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CV */}
      <section aria-labelledby="cv" className="container-x pb-28">
        <Reveal className="flex flex-col items-start justify-between gap-8 rounded-sm border border-ink/12 bg-accent-soft/50 p-8 sm:flex-row sm:items-center sm:p-12">
          <div>
            <p className="eyebrow">Curriculum vitae</p>
            <h2 id="cv" className="mt-3 text-3xl font-light sm:text-4xl">The one-page version.</h2>
            <p className="mt-2 text-sm text-slate">PDF · updated 2026</p>
          </div>
          <Button href={profile.cv} download icon="download">Download CV</Button>
        </Reveal>
      </section>
    </>
  )
}
