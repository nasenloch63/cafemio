'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/site/language-context'

export function Navbar() {
  const { t, lang, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#ueber-uns', label: t.nav.about },
    { href: '#eis', label: t.nav.ice },
    { href: '#speisekarte', label: t.nav.menu },
    { href: '#fruehstueck', label: t.nav.breakfast },
    { href: '#fingerfood', label: t.nav.fingerfood },
    { href: '#galerie', label: t.nav.gallery },
    { href: '#besuch', label: t.nav.visit },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const LangToggle = ({ className }: { className?: string }) => (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.nav.switchTo}
      className={cn(
        'inline-flex items-center gap-1 rounded-full border border-border bg-card/70 px-1 py-1 text-xs font-semibold backdrop-blur',
        className,
      )}
    >
      <span
        className={cn(
          'rounded-full px-2.5 py-1 transition-colors',
          lang === 'de' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground',
        )}
      >
        DE
      </span>
      <span
        className={cn(
          'rounded-full px-2.5 py-1 transition-colors',
          lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground',
        )}
      >
        EN
      </span>
    </button>
  )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream/85 border-b border-border py-2 shadow-sm backdrop-blur-md'
          : 'bg-transparent py-4',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-3" aria-label={t.nav.home}>
          <span className="overflow-hidden rounded-full ring-2 ring-primary/20">
            <Image
              src="/media/logo.jpg"
              alt={t.nav.logoAlt}
              width={44}
              height={44}
              className="size-11 object-cover"
              priority
            />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            Eiscafé Mio
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LangToggle />
          <Button
            nativeButton={false}
            render={<a href="#besuch">{t.nav.reserve}</a>}
            className="rounded-full px-5"
          />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangToggle />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-border bg-cream/95 p-4 shadow-lg backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <Button
                nativeButton={false}
                render={<a href="#besuch" onClick={() => setOpen(false)}>{t.nav.reserve}</a>}
                className="w-full rounded-full"
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
