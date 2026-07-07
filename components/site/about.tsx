'use client'

import Image from 'next/image'
import { Reveal } from '@/components/site/reveal'
import { Heart, Sparkles, Coffee } from 'lucide-react'
import { useLanguage } from '@/components/site/language-context'

const icons = [Heart, Sparkles, Coffee]

export function About() {
  const { t } = useLanguage()
  return (
    <section id="ueber-uns" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="/media/filiale-innen2.webp"
                alt={t.about.imgMain}
                width={800}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-cream shadow-lg sm:block">
              <Image
                src="/media/cafe.webp"
                alt={t.about.imgSmall}
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="font-serif text-lg text-strawberry italic">{t.about.eyebrow}</span>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-balance md:text-5xl">
              {t.about.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              {t.about.desc}
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {t.about.values.map((v, i) => {
              const Icon = icons[i]
              return (
                <Reveal key={v.title} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-border bg-card p-5">
                    <span className="inline-flex size-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-serif text-lg font-semibold">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
