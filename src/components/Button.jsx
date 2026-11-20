import { Link } from 'react-router-dom'

export function Arrow({ className = '' }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DownloadIcon({ className = '' }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2.5v8M4.5 7 8 10.5 11.5 7M3 13.5h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const base =
  'group relative isolate inline-flex items-center gap-3 overflow-hidden rounded-full px-6 py-3.5 text-sm font-medium tracking-wide transition-[color,border-color,box-shadow] duration-500 ease-soft'

const variants = {
  // Navy pill; a lavender layer rises softly from below on hover.
  primary:
    'bg-ink text-paper hover:text-ink before:absolute before:inset-0 before:-z-10 before:translate-y-full before:rounded-full before:bg-lavender before:transition-transform before:duration-500 before:ease-soft hover:before:translate-y-0',
  // Hairline outline that fills with ink.
  secondary:
    'border border-ink/25 text-ink hover:border-ink hover:text-paper before:absolute before:inset-0 before:-z-10 before:translate-y-full before:rounded-full before:bg-ink before:transition-transform before:duration-500 before:ease-soft hover:before:translate-y-0',
  // On dark backgrounds.
  light:
    'bg-paper text-ink before:absolute before:inset-0 before:-z-10 before:translate-y-full before:rounded-full before:bg-lavender before:transition-transform before:duration-500 before:ease-soft hover:before:translate-y-0',
}

/** Pill button. Renders an internal Link, external <a>, or download link. */
export function Button({ to, href, download, variant = 'primary', icon = 'arrow', children, className = '', ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`
  const Icon = icon === 'download' ? DownloadIcon : Arrow
  const motion = icon === 'download' ? 'group-hover:translate-y-0.5' : 'group-hover:translate-x-1'
  const inner = (
    <>
      <span>{children}</span>
      {icon && <Icon className={`transition-transform duration-500 ease-soft ${motion}`} />}
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  return (
    <a href={href} className={cls} download={download} {...(href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {inner}
    </a>
  )
}

/** Text link with an underline that draws in from the left. */
export function TextLink({ to, href, children, className = '', arrow = true, ...rest }) {
  const cls = `group inline-flex items-center gap-2 text-sm font-medium text-ink ${className}`
  const inner = (
    <>
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-soft group-hover:origin-left group-hover:scale-x-100" />
        <span className="absolute -bottom-1 left-0 h-px w-full bg-current/20" />
      </span>
      {arrow && <Arrow className="transition-transform duration-500 ease-soft group-hover:translate-x-1" />}
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  return (
    <a href={href} className={cls} {...(href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {inner}
    </a>
  )
}
