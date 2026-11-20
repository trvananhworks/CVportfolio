import { Button } from '../components/Button'
import useSeo from '../components/useSeo'

export default function NotFound() {
  useSeo('Page not found')
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-start justify-center pt-32 pb-20">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 text-5xl font-light sm:text-7xl">This page <em className="text-iris">wandered off.</em></h1>
      <div className="mt-10"><Button to="/">Back home</Button></div>
    </section>
  )
}
