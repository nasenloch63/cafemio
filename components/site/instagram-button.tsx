'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const IG_URL = 'https://www.instagram.com/eis_mio_hessisch_lichtenau/'

// Inline SVG — the official Instagram glyph, no external dependency needed
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

interface InstagramButtonProps {
  variant: 'nav' | 'hero' | 'gallery-banner' | 'footer' | 'floating'
  label: string
  className?: string
}

// Shared gradient style used on primary placements
const igGradient =
  'bg-[linear-gradient(135deg,#833AB4_0%,#FD1D1D_50%,#FCB045_100%)]'

export function InstagramButton({ variant, label, className }: InstagramButtonProps) {
  const reduced = useReducedMotion()

  if (variant === 'nav') {
    return (
      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(
          'hidden md:inline-flex items-center gap-2 rounded-full py-2 px-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md',
          igGradient,
          className,
        )}
      >
        <InstagramIcon className="size-4 shrink-0" />
        {label}
      </a>
    )
  }

  if (variant === 'hero') {
    return (
      <motion.a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        animate={
          reduced
            ? {}
            : {
                scale: [1, 1.04, 1],
              }
        }
        transition={{
          duration: 1.4,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 1.6,
        }}
        whileHover={{ scale: 1.06 }}
        className={cn(
          'inline-flex h-12 items-center gap-2.5 rounded-full py-3 px-7 text-base font-semibold text-white shadow-lg transition-shadow duration-200 hover:shadow-xl',
          igGradient,
          className,
        )}
      >
        <InstagramIcon className="size-5 shrink-0" />
        {label}
      </motion.a>
    )
  }

  if (variant === 'gallery-banner') {
    return (
      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(
          'inline-flex items-center gap-3 rounded-full py-3.5 px-8 text-base font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-xl',
          igGradient,
          className,
        )}
      >
        <InstagramIcon className="size-5 shrink-0" />
        {label}
      </a>
    )
  }

  if (variant === 'footer') {
    return (
      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(
          'group inline-flex items-center gap-2 text-sm text-cream/70 transition-all duration-200',
          className,
        )}
      >
        <span className="flex size-8 items-center justify-center rounded-full bg-cream/10 transition-all duration-200 group-hover:bg-[linear-gradient(135deg,#833AB4,#FD1D1D,#FCB045)] group-hover:shadow-md">
          <InstagramIcon className="size-4 text-cream/70 transition-colors duration-200 group-hover:text-white" />
        </span>
        <span className="transition-colors duration-200 group-hover:text-vanilla">Instagram</span>
      </a>
    )
  }

  // floating
  return (
    <motion.a
      href={IG_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 2,
        type: 'spring',
        stiffness: 260,
        damping: 14,
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full shadow-xl transition-shadow duration-200 hover:shadow-2xl',
        igGradient,
        className,
      )}
    >
      <InstagramIcon className="size-6 text-white" />
    </motion.a>
  )
}
