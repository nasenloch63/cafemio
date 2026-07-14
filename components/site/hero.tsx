'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/site/language-context'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const INSTAGRAM_URL = 'https://www.instagram.com/eis_mio_hessisch_lichtenau/'

export function Hero() {
  const { lang, t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const productRef = useRef<HTMLElement>(null)

  const productCopy =
    lang === 'de'
      ? {
          eyebrow: 'Dolce Vita im Becher',
          title: 'Ein Klassiker mit Herz.',
          description:
            'Unser Spaghetti-Eis: cremig, frisch und jeden Tag mit Liebe für dich zubereitet.',
          features: ['Cremig', 'Frisch', 'Mit Liebe'],
          alt: 'Spaghetti-Eis mit Erdbeersauce und weißer Schokolade im Eiscafé Mio',
          caption: 'Spaghetti-Eis – ein Klassiker des Eiscafé Mio',
        }
      : {
          eyebrow: 'Dolce vita in a cup',
          title: 'A classic with heart.',
          description:
            'Our spaghetti gelato: creamy, fresh and made with love for you every day.',
          features: ['Creamy', 'Fresh', 'Made with love'],
          alt: 'Spaghetti gelato with strawberry sauce and white chocolate at Eiscafé Mio',
          caption: 'Spaghetti gelato – an Eiscafé Mio classic',
        }

  useGSAP(
    () => {
      const media = gsap.matchMedia()

      media.add(
        {
          desktop: '(min-width: 768px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { desktop, reduceMotion } = context.conditions as {
            desktop: boolean
            reduceMotion: boolean
          }

          if (!desktop || reduceMotion) return

          gsap.set(backgroundRef.current, {
            scale: 1,
            yPercent: 0,
            transformOrigin: 'center center',
          })
          gsap.set(introRef.current, { yPercent: 0, scale: 1, opacity: 1 })
          gsap.set(productRef.current, { yPercent: 34, scale: 0.9, opacity: 0 })

          const timeline = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: '+=140%',
              pin: stageRef.current,
              scrub: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })

          timeline
            .to(backgroundRef.current, { yPercent: 8, scale: 1.08, duration: 1 }, 0)
            .to(
              introRef.current,
              { yPercent: -24, scale: 0.94, opacity: 0, duration: 0.52 },
              0.18,
            )
            .to(
              productRef.current,
              { yPercent: 0, scale: 1, opacity: 1, duration: 0.62 },
              0.38,
            )

          return () => timeline.scrollTrigger?.kill()
        },
      )

      return () => media.revert()
    },
    { scope: sectionRef },
  )

  const refreshScrollTrigger = () => ScrollTrigger.refresh()

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-labelledby="hero-title"
      className="relative bg-foreground md:h-svh md:min-h-[42rem]"
    >
      <div
        ref={stageRef}
        className="relative z-10 isolate overflow-hidden md:h-svh md:min-h-[42rem]"
      >
        <div
          ref={backgroundRef}
          className="absolute inset-0 will-change-transform"
          aria-hidden="true"
        >
          <Image
            src="/media/filiale-innen2.webp"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            onLoad={refreshScrollTrigger}
          />
          <div className="absolute inset-0 bg-foreground/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-transparent to-foreground/25" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-6xl items-center px-4 pb-14 pt-28 md:h-full md:py-28">
          <div
            ref={introRef}
            className="max-w-2xl will-change-[transform,opacity]"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/90 px-4 py-1.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm">
              <MapPin className="size-4 text-strawberry" aria-hidden="true" />
              {t.hero.badge}
            </span>

            <h1
              id="hero-title"
              className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-cream text-balance sm:text-6xl md:text-7xl"
            >
              {t.hero.titleLine1}
              <span className="block text-vanilla">{t.hero.titleLine2}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 text-pretty sm:text-lg">
              {t.hero.desc}
            </p>

            <nav
              aria-label={lang === 'de' ? 'Hero-Aktionen' : 'Hero actions'}
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Button
                size="lg"
                nativeButton={false}
                render={<a href="#eis">{t.hero.ctaIce}</a>}
                className="h-12 rounded-full px-7 text-base focus-visible:ring-cream"
              />
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#besuch">{t.hero.ctaVisit}</a>}
                className="h-12 rounded-full border-cream/40 bg-cream/10 px-7 text-base text-cream backdrop-blur-sm hover:bg-cream/20 hover:text-cream focus-visible:ring-cream"
              />
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-cream/35 bg-foreground/25 px-7 text-base font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-cream/70"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-5 fill-current"
                >
                  <path d="M12 2.16c3.2 0 3.58.02 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.21-.01 3.58-.07 4.85-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.67-4.77 4.92-4.92 1.27-.05 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C21.73 2.7 19.31.27 14.95.07 13.67.01 13.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
                </svg>
                {t.instagram.heroLabel}
              </a>
            </nav>

            <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cream/80">
              <Clock className="size-4 text-vanilla" aria-hidden="true" />
              {t.hero.hours}
            </div>
          </div>
        </div>

        <article
          ref={productRef}
          aria-labelledby="product-title"
          className="relative z-20 bg-cream px-4 py-16 text-foreground md:absolute md:inset-0 md:flex md:items-center md:py-24 md:will-change-[transform,opacity]"
        >
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[0.82fr_1.18fr] md:gap-16">
            <div className="order-2 md:order-1">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-strawberry">
                {productCopy.eyebrow}
              </p>
              <h2
                id="product-title"
                className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl md:text-6xl"
              >
                {productCopy.title}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                {productCopy.description}
              </p>
              <ul className="mt-7 flex flex-wrap gap-2" aria-label={lang === 'de' ? 'Merkmale' : 'Features'}>
                {productCopy.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <figure className="order-1 md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-vanilla shadow-2xl md:aspect-[5/4]">
                <Image
                  src="/media/spaghetti-eis.webp"
                  alt={productCopy.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, 58vw"
                  onLoad={refreshScrollTrigger}
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {productCopy.caption}
              </figcaption>
            </figure>
          </div>
        </article>
      </div>
    </section>
  )
}
