import { useEffect } from 'react'

const SUFFIX = 'Van Anh Tran'

/** Sets document title and meta description per page. */
export default function useSeo(title, description) {
  useEffect(() => {
    document.title = title ? `${title} — ${SUFFIX}` : `${SUFFIX} — Marketing, Brand & Strategic Communications`
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    }
  }, [title, description])
}
