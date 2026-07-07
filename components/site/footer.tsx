'use client'

import Image from 'next/image'
import { MapPin, Clock } from 'lucide-react'
import { useLanguage } from '@/components/site/language-context'
import { InstagramButton } from '@/components/site/instagram-button'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-foreground text-cream">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="overflow-hidden rounded-full ring-2 ring-cream/20">
                <Image
                  src="/media/logo.jpg"
                  alt={t.nav.logoAlt}
                  width={48}
                  height={48}
                  className="size-12 object-cover"
                />
              </span>
              <span className="font-serif text-xl font-semibold">Eiscafé Mio</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold">{t.footer.contactTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-vanilla" />
                <span>
                  Biegenstraße 2
                  <br />
                  37235 Hessisch Lichtenau
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="size-4 shrink-0 text-vanilla" />
                {t.footer.hoursText}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold">{t.footer.discoverTitle}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
              <li>
                <a href="#eis" className="transition-colors hover:text-vanilla">{t.footer.linkIce}</a>
              </li>
              <li>
                <a href="#fruehstueck" className="transition-colors hover:text-vanilla">{t.footer.linkBreakfast}</a>
              </li>
              <li>
                <a href="#galerie" className="transition-colors hover:text-vanilla">{t.footer.linkGallery}</a>
              </li>
              <li>
                <InstagramButton variant="footer" label={t.instagram.footerLabel} />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-sm text-cream/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
