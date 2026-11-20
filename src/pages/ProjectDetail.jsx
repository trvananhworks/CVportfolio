import { Link, useParams } from 'react-router-dom'
import { Arrow, TextLink } from '../components/Button'
import Placeholder from '../components/Placeholder'
import { ProjectCover } from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import Tag from '../components/Tag'
import useSeo from '../components/useSeo'
import { projects } from '../data/site'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  useSeo(project?.title ?? 'Not found', project?.summary)
  if (!project) return <NotFound />
  const next = projects[(index + 1) % projects.length]

  return (
    <article>
      <header className="container-x pt-36 pb-14 sm:pt-44">
        <Reveal>
          <Link to="/projects" className="group inline-flex items-center gap-2 text-sm text-slate transition-colors hover:text-ink">
            <Arrow className="rotate-180 transition-transform duration-500 ease-soft group-hover:-translate-x-1" />
            All projects
          </Link>
          <p className="eyebrow mt-12">
            {project.category}
            {project.placeholder && <span className="ml-2 text-accent-deep">· Placeholder project</span>}
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl leading-[1.04] font-light sm:text-6xl lg:text-7xl">{project.title}</h1>
        </Reveal>
        <Reveal delay={120} as="dl" className="mt-14 grid gap-8 border-t border-ink/12 pt-8 sm:grid-cols-3">
          {(project.year || project.placeholder) && (
            <div>
              <dt className="eyebrow">Year</dt>
              <dd className="mt-3">{project.year ?? <span className="text-accent-deep">To add</span>}</dd>
            </div>
          )}
          <div>
            <dt className="eyebrow">Role</dt>
            <dd className="mt-3">{project.role ?? <span className="text-accent-deep">To add</span>}</dd>
          </div>
          <div>
            <dt className="eyebrow">Focus</dt>
            <dd className="mt-3 flex flex-wrap gap-2">{project.tags.map((t) => <Tag key={t}>{t}</Tag>)}</dd>
          </div>
        </Reveal>
      </header>

      <Reveal className="container-x">
        <div className="overflow-hidden rounded-sm">
          <ProjectCover project={project} index={index} large />
        </div>
      </Reveal>

      <div className="container-x py-24 sm:py-32">
        <Reveal className="grid gap-6 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">Summary</p>
          <p className="font-serif text-2xl leading-snug font-light md:col-span-8 sm:text-3xl">{project.summary}</p>
        </Reveal>

        {project.sections.map((s, i) => (
          <Reveal key={s.heading} as="section" className="mt-16 grid gap-6 border-t border-ink/10 pt-10 md:grid-cols-12">
            <h2 className="flex items-baseline gap-3 font-sans text-sm font-medium tracking-normal md:col-span-3">
              <span className="font-serif italic text-accent-deep">{String(i + 1).padStart(2, '0')}</span>
              {s.heading}
            </h2>
            <div className="md:col-span-8">
              {s.body && <p className="text-lg leading-relaxed text-slate">{s.body}</p>}
              {s.list && (
                <ul className="space-y-4">
                  {s.list.map((li) => (
                    <li key={li} className="flex gap-4 text-lg leading-relaxed text-slate">
                      <span aria-hidden="true" className="mt-3.5 h-px w-5 shrink-0 bg-accent-deep" />
                      {li}
                    </li>
                  ))}
                </ul>
              )}
              {s.placeholder && <Placeholder>{s.placeholder}</Placeholder>}
            </div>
          </Reveal>
        ))}
      </div>

      <Link to={`/projects/${next.slug}`} className="group block border-t border-ink/10 bg-fog/60 transition-colors duration-700 ease-soft hover:bg-accent-soft">
        <div className="container-x flex items-end justify-between gap-8 py-20 sm:py-28">
          <div>
            <p className="eyebrow">Next project</p>
            <p className="mt-4 max-w-3xl font-serif text-3xl leading-tight font-light sm:text-5xl">{next.title}</p>
          </div>
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-ink/20 transition-all duration-500 ease-soft group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
            <Arrow className="transition-transform duration-500 ease-soft group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
      <div className="sr-only"><TextLink to="/projects">Back to all projects</TextLink></div>
    </article>
  )
}
