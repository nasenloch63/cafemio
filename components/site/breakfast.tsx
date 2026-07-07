'use client'

import Image from 'next/image'
import { Reveal } from '@/components/site/reveal'
import { useLanguage } from '@/components/site/language-context'

export function Breakfast() {
  const { t } = useLanguage()
  return (
    <section id="fruehstueck" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <Reveal>
            <span className="font-serif text-lg text-strawberry italic">{t.breakfast.eyebrow}</span>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-balance md:text-5xl">
              {t.breakfast.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              {t.breakfast.desc}
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/media/teller1.webp"
                  alt={t.breakfast.img1}
                  width={500}
                  height={500}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/media/fruehstueck1.webp"
                  alt={t.breakfast.img2}
                  width={500}
                  height={500}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/media/fruehstueck5.webp"
              alt={t.breakfast.imgMain}
              width={800}
              height={950}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
