'use client'

import Image from 'next/image'
import { Reveal } from '@/components/site/reveal'
import { useLanguage } from '@/components/site/language-context'

export function Fingerfood() {
  const { t } = useLanguage()
  return (
    <section id="fingerfood" className="bg-primary/8 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/media/fingerfood.jpg"
              alt={t.fingerfood.imgAlt}
              width={800}
              height={800}
              className="aspect-square w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="font-serif text-lg text-strawberry italic">{t.fingerfood.eyebrow}</span>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-balance md:text-5xl">
              {t.fingerfood.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              {t.fingerfood.desc}
            </p>
            <ul className="mt-6 space-y-3">
              {t.fingerfood.list.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
