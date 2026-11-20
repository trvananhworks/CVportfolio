import { Button } from '../components/Button'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import useSeo from '../components/useSeo'
import { profile } from '../data/site'

export default function Contact() {
  useSeo('Contact', 'Get in touch with Van Anh Tran about marketing and communication internships or graduate opportunities.')

  const rows = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin },
    { label: 'CV', value: 'Download PDF', href: profile.cv, download: true },
  ]

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let’s <em className="text-accent">talk.</em></>}
        intro="I’m looking for marketing and communication internships and graduate opportunities — in branding, employer branding, digital marketing or strategic communications. I’d love to hear from you."
      />
      <section aria-label="Contact details" className="container-x pb-32">
        <ul className="border-b border-ink/12">
          {rows.map((r, i) => (
            <Reveal as="li" key={r.label} delay={i * 100}>
              <a
                href={r.href}
                download={r.download || undefined}
                {...(r.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group grid grid-cols-[5rem_1fr_auto] items-center gap-4 border-t border-ink/12 py-8 transition-colors duration-500 ease-soft hover:bg-accent-soft/50 sm:grid-cols-[10rem_1fr_auto] sm:px-4 sm:py-10"
              >
                <span className="eyebrow">{r.label}</span>
                <span className="font-serif text-xl font-light break-all transition-transform duration-700 ease-soft group-hover:translate-x-2 sm:text-4xl sm:break-normal lg:text-5xl">
                  {r.value}
                </span>
                <span aria-hidden="true" className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 transition-all duration-500 ease-soft group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform duration-500 ease-soft ${r.download ? 'rotate-90' : '-rotate-45 group-hover:rotate-0'}`}>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {r.href.startsWith('http') && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-16 flex flex-wrap gap-4">
          <Button href={`mailto:${profile.email}`}>Write an email</Button>
          <Button href={profile.cv} download icon="download" variant="secondary">Download CV</Button>
        </Reveal>
      </section>
    </>
  )
}
