import { TextLink } from './Button'
import { asset } from '../data/site'

/** Extracts the shortcode from an Instagram reel/post URL. */
function shortcode(url) {
  const m = url?.match(/instagram\.com\/(?:[\w.]+\/)?(?:reel|reels|p|tv)\/([\w-]+)/)
  return m ? m[1] : null
}

/**
 * Embeds a public Instagram Reel. Without a valid URL it shows a
 * clearly labelled vertical placeholder.
 */
/**
 * Short-video card (Instagram Reel or TikTok).
 * - cover + views  → custom card showing the view count only (no likes);
 *                    clickable when `url` is set, otherwise display-only.
 * - Instagram url only → Instagram's own embed.
 * - nothing        → clearly labelled placeholder.
 */
export default function ReelEmbed({ reel, className = '', aspect = 'aspect-[3/5]', compact = false }) {
  const platform = reel.platform ?? 'Instagram'
  const code = platform === 'Instagram' ? shortcode(reel.url) : null
  const hasCard = reel.cover && reel.views
  const Card = reel.url ? 'a' : 'div'
  const linkProps = reel.url ? { href: reel.url, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <figure className={`mx-auto w-full ${compact ? '' : 'max-w-[380px]'} ${className}`}>
      {hasCard ? (
        <Card
          {...linkProps}
          className={`group relative block ${aspect} overflow-hidden rounded-sm bg-ink shadow-[0_30px_60px_-35px_rgba(20,27,52,0.45)]`}
        >
          <img
            src={asset(reel.cover)}
            alt={`Cover frame of ${reel.caption}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-soft group-hover:scale-[1.03]"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          {reel.url && (
            <span aria-hidden="true" className={`absolute inset-0 m-auto grid place-items-center rounded-full border border-paper/50 bg-ink/20 text-paper backdrop-blur-sm transition-all duration-500 ease-soft group-hover:scale-105 group-hover:border-accent group-hover:bg-accent ${compact ? 'h-12 w-12' : 'h-16 w-16'}`}>
              <svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 3.5v11l9-5.5z" fill="currentColor" /></svg>
            </span>
          )}
          <span className={`absolute flex items-center gap-2 font-semibold text-paper ${compact ? 'bottom-3 left-3 text-base' : 'bottom-4 left-4 text-lg'}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 2.5v11L13 8z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
            {reel.views}
            <span className="sr-only"> views{reel.url ? ` — watch on ${platform} (opens in a new tab)` : ''}</span>
          </span>
        </Card>
      ) : code ? (
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
          aria-label={`Video placeholder: ${platform} video to add`}
          className={`relative grid ${aspect} place-items-center overflow-hidden rounded-sm bg-gradient-to-b from-ink to-navy text-paper`}
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-paper/30">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M5 3.5v11l9-5.5z" fill="currentColor" /></svg>
            </span>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent-light">Video · {platform}</span>
            <span className="px-8 text-xs text-paper/60">Placeholder — paste the link in <code>site.js</code></span>
          </div>
        </div>
      )}
      <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-3 text-sm text-slate">
        {/* Caption kept for screen readers only */}
        <span className="sr-only">{reel.caption}</span>
        {reel.url && <TextLink href={reel.url} className="text-xs">Watch on {platform}</TextLink>}
      </figcaption>
    </figure>
  )
}
