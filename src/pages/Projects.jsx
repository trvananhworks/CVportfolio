import { useState } from 'react'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import useSeo from '../components/useSeo'
import { projects } from '../data/site'

export default function Projects() {
  useSeo('Projects', 'Employer branding, content strategy, consumer research and creative projects by Van Anh Tran.')
  const categories = ['All', ...projects.map((p) => p.category)]
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={<>Selected <em className="text-accent">work.</em></>}
        intro="Employer branding, social content, research and campaigns. Projects marked “Placeholder” are frames for work still to be added."
      />
      <section aria-label="Project list" className="container-x pb-32">
        <Reveal>
          <div role="group" aria-label="Filter by category" className="-mx-1 flex flex-wrap gap-2 border-b border-ink/10 pb-8">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={active === c}
                onClick={() => setActive(c)}
                className="rounded-full border border-ink/15 px-4 py-2 text-xs tracking-wide text-slate transition-colors duration-500 ease-soft hover:border-ink hover:text-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper"
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-16 grid gap-x-10 gap-y-20 md:grid-cols-2">
          {shown.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 120}>
              <ProjectCard project={p} index={projects.indexOf(p)} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
