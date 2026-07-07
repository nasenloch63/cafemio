'use client'

import Image from 'next/image'
import { Reveal } from '@/components/site/reveal'
import { useLanguage } from '@/components/site/language-context'

type FingerfoodItem = {
  name: string
  description: string
  price: string
  popular?: boolean
  image?: string
}

export function Fingerfood() {
  const { t } = useLanguage()

  // Pull fingerfood items from the menu categories so data lives in one place
  const menuCategory = t.menu.categories.find((c) => c.id === 'fingerfood')
  const items: FingerfoodItem[] = (menuCategory?.items ?? []) as FingerfoodItem[]

  return (
    <section id="fingerfood" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-serif text-lg text-strawberry italic">{t.fingerfood.eyebrow}</span>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-balance md:text-5xl">
            {t.fingerfood.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.fingerfood.desc}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {item.image && (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {item.popular && (
                      <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-strawberry backdrop-blur">
                        {t.menu.popular}
                      </span>
                    )}
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg font-semibold leading-snug">{item.name}</h3>
                    <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
