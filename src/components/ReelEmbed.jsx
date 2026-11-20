import { TextLink } from './Button'

/** Extracts the shortcode from an Instagram reel/post URL. */
function shortcode(url) {
  const m = url?.match(/instagram\.com\/(?:[\w.]+\/)?(?:reel|reels|p|tv)\/([\w-]+)/)
  return m ? m[1] : null
}

/**
 * Embeds a public Instagram Reel. Without a valid URL it shows a
 * clearly labelled vertical placeholder.
 */
export default function ReelEmbed({ reel, className = '' }) {
  const code = shortcode(reel.url)

  return (
    <figure className={`mx-auto w-full max-w-[380px] ${className}`}>
      {code ? (
        <div className="overflow-hidden rounded-sm border border-ink/10 bg-paper shadow-[0_30px_60px_-35px_rgba(20,27,52,0.45)]">
          <iframe
            src={`https://www.instagram.com/reel/${code}/embed/`}
            title={reel.caption}
            loading="lazy"
            allowFullScreen
            scrolling="no"
            className="block h-[640px] w-full border-0 sm:h-[680px]"
          />
        </div>
      ) : (
        <div
          role="img"
          aria-label="Video placeholder: Instagram Reel to add"
          className="relative grid aspect-[9/16] place-items-center overflow-hidden rounded-sm bg-gradient-to-b from-ink to-navy text-paper"
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-paper/30">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M5 3.5v11l9-5.5z" fill="currentColor" /></svg>
            </span>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent-light">Video · Instagram Reel</span>
            <span className="px-8 text-xs text-paper/60">Placeholder — paste the reel link in <code>site.js</code></span>
          </div>
        </div>
      )}
      <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-3 text-sm text-slate">
        <span className="font-serif italic">{reel.caption}</span>
        {code && <TextLink href={reel.url} className="text-xs">Watch on Instagram</TextLink>}
      </figcaption>
    </figure>
  )
}
