import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import useSeo from '../components/useSeo'
import { profile } from '../data/site'

export default function Contact() {
  useSeo('Contact', 'Get in touch with Van Anh Tran about marketing and communication internships or graduate opportunities.')

  const items = [
    { label: 'Email', value: profile.email, action: 'Send an email', href: `mailto:${profile.email}`, icon: 'arrow' },
    { label: 'Phone', value: profile.phoneLabel, action: 'Call', href: `tel:${profile.phone}`, icon: 'arrow' },
    { label: 'LinkedIn', value: profile.linkedinLabel, action: 'View profile', href: profile.linkedin, icon: 'external' },
    { label: 'CV', value: 'One-page PDF', action: 'Download', href: profile.cv, icon: 'download', download: true },
  ]

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let’s <em className="text-accent">talk.</em></>}
        intro="Whether you have a role in mind, work in marketing or communications yourself, or simply share a love for brands and storytelling — I’d love to connect. I’m always keen to swap ideas, hear about your experience and learn from people in the field."
      />
      <section aria-label="Contact details" className="container-x pb-32">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal as="dl" className="space-y-8 md:col-span-4">
            <div>
              <dt className="eyebrow">Based in</dt>
              <dd className="mt-3 font-serif text-xl">{profile.location}</dd>
            </div>
            <div>
              <dt className="eyebrow">Open to</dt>
              <dd className="mt-3 font-serif text-xl">Internships, graduate roles &amp; coffee chats</dd>
            </div>
          </Reveal>

          <ul className="grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-2 md:col-span-8">
            {items.map((it, i) => (
              <Reveal as="li" key={it.label} delay={i * 80} className="bg-paper">
                <a
                  href={it.href}
                  download={it.download || undefined}
                  {...(it.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex h-full flex-col justify-between gap-10 p-6 transition-colors duration-500 ease-soft hover:bg-accent-soft/60 sm:p-8"
                >
                  <div>
                    <p className="eyebrow">{it.label}</p>
                    <p className="mt-4 font-serif text-xl break-words sm:text-2xl">{it.value}</p>
                  </div>
                  <span className="flex items-center justify-between text-sm font-medium text-slate transition-colors duration-500 group-hover:text-ink">
                    {it.action}
                    {it.href.startsWith('http') && <span className="sr-only"> (opens in a new tab)</span>}
                    <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 transition-all duration-500 ease-soft group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={`transition-transform duration-500 ease-soft ${it.icon === 'download' ? 'rotate-90 group-hover:translate-y-0.5' : it.icon === 'external' ? '-rotate-45' : 'group-hover:translate-x-0.5'}`}>
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
