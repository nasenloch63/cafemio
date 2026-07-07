'use client'

import Image from 'next/image'
import { Reveal } from '@/components/site/reveal'
import { useLanguage } from '@/components/site/language-context'

const images = [
  '/media/spaghetti-eis.webp',
  '/media/frucht2.webp',
  '/media/mascarpone.gif',
  '/media/frucht1.webp',
]

export function IceSpecialties() {
  const { t } = useLanguage()
  return (
    <section id="eis" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-serif text-lg text-strawberry italic">{t.ice.eyebrow}</span>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-balance md:text-5xl">
            {t.ice.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.ice.desc}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.ice.items.map((item, i) => {
            const src = images[i]
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={src}
                      alt={item.title}
                      fill
                      unoptimized={src.endsWith('.gif')}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-strawberry backdrop-blur">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
