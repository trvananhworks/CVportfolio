import { Link } from 'react-router-dom'
import { Arrow } from './Button'
import { asset } from '../data/site'

const covers = {
  navy: 'bg-ink text-accent-light',
  accent: 'bg-accent text-paper',
  mist: 'bg-mist text-navy',
  outline: 'bg-fog text-ink/70',
  'accent-outline': 'bg-accent-soft text-accent-deep',
  'ink-outline': 'bg-navy text-paper/80',
}

/** Typographic cover used until project imagery is supplied. */
export function ProjectCover({ project, index, large = false, wide = false }) {
  const ratio = large ? 'aspect-[16/9]' : wide ? 'aspect-[4/3] md:aspect-[21/9]' : 'aspect-[4/3]'
  if (project.image) {
    return (
      <div className={`overflow-hidden bg-navy ${ratio}`}>
        <img
          src={asset(project.image)}
          alt={project.imageAlt ?? ''}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-soft group-hover:scale-[1.015]"
        />
      </div>
    )
  }
  return (
    <div
      className={`relative flex overflow-hidden ${large ? 'aspect-[16/9]' : wide ? 'aspect-[4/3] md:aspect-[21/9]' : 'aspect-[4/3]'} ${covers[project.cover]} transition-transform duration-[900ms] ease-soft group-hover:scale-[1.015]`}
      aria-hidden="true"
    >
      <span className="absolute top-5 left-5 text-[0.68rem] font-medium uppercase tracking-[0.2em] opacity-70">
        {String(index + 1).padStart(2, '0')} — {project.category}
      </span>
      <span className={`m-auto px-8 text-center font-serif font-light italic leading-none opacity-90 ${large ? 'text-7xl sm:text-9xl' : 'text-6xl sm:text-7xl'}`}>
        {project.category.split(/[\s&]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('')}
      </span>
      <span className="absolute right-5 bottom-5 text-[0.62rem] uppercase tracking-[0.18em] opacity-55">Cover image to add</span>
    </div>
  )
}

export default function ProjectCard({ project, index, wide = false }) {
  return (
    <article className="group">
      <Link to={`/projects/${project.slug}`} className="block focus-visible:outline-offset-8">
        <div className="overflow-hidden rounded-sm">
          <ProjectCover project={project} index={index} wide={wide} />
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <p className="eyebrow">
              {project.category}
              {project.placeholder && <span className="ml-2 text-accent-deep">· Placeholder</span>}
            </p>
            <h3 className="mt-3 text-[1.7rem] leading-tight text-ink sm:text-[2rem]">
              <span className="bg-gradient-to-r from-ink to-ink bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-700 ease-soft group-hover:bg-[length:100%_1px]">
                {project.title}
              </span>
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate">{project.summary}</p>
          </div>
          <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-500 ease-soft group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
            <Arrow className="-rotate-45 transition-transform duration-500 ease-soft group-hover:rotate-0" />
          </span>
        </div>
      </Link>
    </article>
  )
}
