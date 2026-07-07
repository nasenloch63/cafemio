'use client'

import Image from 'next/image'
import { Reveal } from '@/components/site/reveal'
import { useLanguage } from '@/components/site/language-context'

const images = [
  { src: '/media/filiale3.webp', span: 'row-span-2' },
  { src: '/media/filiale-innen.webp', span: '' },
  { src: '/media/fruehstueck3.webp', span: '' },
  { src: '/media/filiale-innen3.webp', span: '' },
  { src: '/media/teller2.webp', span: '' },
  { src: '/media/filiale.webp', span: 'row-span-2' },
]

export function Gallery() {
  const { t } = useLanguage()
  return (
    <section id="galerie" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-serif text-lg text-strawberry italic">{t.gallery.eyebrow}</span>
        <h2 className="mt-2 font-serif text-4xl font-semibold text-balance md:text-5xl">
          {t.gallery.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          {t.gallery.desc}
        </p>
      </Reveal>

      <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[240px]">
        {images.map((img, i) => (
          <Reveal
            key={img.src}
            delay={i * 0.06}
            className={`overflow-hidden rounded-2xl shadow-sm ${img.span}`}
          >
            <div className="group relative h-full w-full">
              <Image
                src={img.src}
                alt={t.gallery.alts[i]}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
