/**
 * One of the 3–4 photo slots. Shows the real image when `image.src` is set,
 * otherwise a clearly labelled, on-brand placeholder.
 */
export default function ImageSlot({ image, className = '', aspect = 'aspect-[4/5]', priority = false }) {
  if (image.src) {
    return (
      <figure className={`overflow-hidden bg-mist ${aspect} ${className}`}>
        <img
          src={image.src}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-soft hover:scale-[1.02]"
        />
      </figure>
    )
  }
  return (
    <figure
      className={`relative overflow-hidden bg-gradient-to-br from-mist via-fog to-lavender-soft ${aspect} ${className}`}
      role="img"
      aria-label={`Image placeholder: ${image.alt}`}
    >
      <svg className="absolute inset-0 h-full w-full text-ink/[0.07]" aria-hidden="true">
        <defs>
          <pattern id="diag" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="14" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
        <span>
          <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-iris">{image.label}</span>
          <span className="mt-1 block text-xs text-slate">{image.hint}</span>
        </span>
        <span className="font-serif text-3xl italic text-ink/15">va</span>
      </figcaption>
    </figure>
  )
}
