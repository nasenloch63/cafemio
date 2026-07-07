'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/site/language-context'
import { InstagramButton } from '@/components/site/instagram-button'

export function Hero() {
  const { t } = useLanguage()
  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 size-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/frucht2.webp"
      >
        <source src="/media/eiskugel.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/90 px-4 py-1.5 text-sm font-medium text-foreground shadow-sm backdrop-blur">
            <MapPin className="size-4 text-strawberry" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] font-semibold text-balance text-white sm:text-6xl md:text-7xl">
            {t.hero.titleLine1}
            <span className="block text-vanilla">{t.hero.titleLine2}</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85 text-pretty">
            {t.hero.desc}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href="#eis">{t.hero.ctaIce}</a>}
              className="h-12 rounded-full px-7 text-base"
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#besuch">{t.hero.ctaVisit}</a>}
              className="h-12 rounded-full border-white/40 bg-white/10 px-7 text-base text-white backdrop-blur hover:bg-white/20 hover:text-white"
            />
            <InstagramButton variant="hero" label={t.instagram.heroLabel} />
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/80">
            <Clock className="size-4 text-vanilla" />
            {t.hero.hours}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
