import { Link } from 'react-router-dom'
import { profile } from '../data/site'
import { Button, TextLink } from './Button'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-x pt-24 pb-10 sm:pt-32">
        <Reveal className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow text-paper/55">Open to internships & graduate roles</p>
            <h2 className="mt-6 text-4xl leading-[1.05] font-light sm:text-6xl">
              Let’s build brands people <em className="text-accent-bright">believe</em> in.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6 md:col-span-4 md:items-end md:justify-end">
            <Button to="/contact" variant="light">Get in touch</Button>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-10 border-t border-paper/12 pt-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow text-paper/45">Email</p>
            <a href={`mailto:${profile.email}`} className="mt-3 block text-paper/85 transition-colors hover:text-accent-light">{profile.email}</a>
          </div>
          <div>
            <p className="eyebrow text-paper/45">Phone</p>
            <a href={`tel:${profile.phone}`} className="mt-3 block text-paper/85 transition-colors hover:text-accent-light">{profile.phoneLabel}</a>
          </div>
          <div>
            <p className="eyebrow text-paper/45">Elsewhere</p>
            <TextLink href={profile.linkedin} className="mt-3 text-paper/85! hover:text-accent-light!">LinkedIn</TextLink>
          </div>
          <div>
            <p className="eyebrow text-paper/45">Based in</p>
            <p className="mt-3 text-paper/85">{profile.location}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 text-xs text-paper/45 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.fullName}</p>
          <nav aria-label="Footer" className="flex gap-6">
            <Link to="/about" className="hover:text-paper">About</Link>
            <Link to="/experience" className="hover:text-paper">Experience</Link>
            <Link to="/projects" className="hover:text-paper">Projects</Link>
            <Link to="/contact" className="hover:text-paper">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
