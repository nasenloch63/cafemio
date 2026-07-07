'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/site/reveal'
import { useLanguage } from '@/components/site/language-context'

export function Menu() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const categories = t.menu.categories
  const current = categories[active]

  const handleSelect = (index: number) => {
    setActive(index)
  }

  return (
    <section
      ref={sectionRef}
      id="speisekarte"
      className="scroll-mt-24 bg-secondary/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-serif text-lg text-strawberry italic">{t.menu.eyebrow}</span>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-balance md:text-5xl">
            {t.menu.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.menu.desc}
          </p>
        </Reveal>

        {/* Sticky category navigation */}
        <div className="sticky top-16 z-30 -mx-4 mt-12 px-4 py-3">
          <div className="mx-auto flex max-w-full gap-2 overflow-x-auto rounded-full border border-border bg-cream/85 p-1.5 shadow-sm backdrop-blur-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:w-fit md:mx-auto md:justify-center">
            {categories.map((cat, i) => {
              const isActive = i === active
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelect(i)}
                  className={cn(
                    'relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                    isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                  aria-pressed={isActive}
                >
                  {isActive && (
                    <motion.span
                      layoutId="menu-tab-pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Item grid with cross-fade + slide */}
        <div className="mt-10 min-h-[24rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={cn(
                'grid gap-5',
                (current.items as Array<{ image?: string }>).some((it) => it.image)
                  ? 'sm:grid-cols-2 lg:grid-cols-4'
                  : 'sm:grid-cols-2',
              )}
            >
              {current.items.map((item, i) => {
                const hasImage = !!(item as { image?: string }).image
                const imgSrc = (item as { image?: string }).image
                return (
                  <motion.article
                    key={item.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {hasImage && imgSrc && (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={imgSrc}
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
                    <div className="flex flex-1 flex-col gap-1 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className={cn('flex flex-wrap items-center gap-2 font-serif font-semibold', hasImage ? 'text-lg' : 'text-xl')}>
                          {item.name}
                          {!hasImage && item.popular && (
                            <span className="rounded-full bg-strawberry/15 px-2.5 py-0.5 text-xs font-semibold text-strawberry">
                              {t.menu.popular}
                            </span>
                          )}
                        </h3>
                        <span className={cn('shrink-0 font-serif font-semibold text-primary', hasImage ? 'rounded-full bg-primary/10 px-2.5 py-0.5 text-xs' : 'text-lg')}>
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Notes */}
        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="rounded-2xl bg-strawberry/10 px-5 py-3 text-sm font-medium text-strawberry">
            {t.menu.note}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">{t.menu.priceHint}</p>
          <p className="mt-1 text-xs text-muted-foreground">{t.menu.allergyNote}</p>
        </Reveal>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <a
                href="/media/speisekarte-fruehstueck.jpeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="size-4" />
                {t.menu.pdfCta}
              </a>
            }
            className="h-12 rounded-full px-7 text-base"
          />
        </div>
      </div>
    </section>
  )
}
