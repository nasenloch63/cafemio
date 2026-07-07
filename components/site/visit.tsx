'use client'

import { Reveal } from '@/components/site/reveal'
import { Clock, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/site/language-context'

export function Visit() {
  const { t } = useLanguage()
  return (
    <section id="besuch" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-serif text-lg text-strawberry italic">{t.visit.eyebrow}</span>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-balance md:text-5xl">
            {t.visit.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.visit.desc}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl border border-border bg-card p-7">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Clock className="size-5" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold">{t.visit.hoursTitle}</h3>
                <dl className="mt-4 space-y-3">
                  {t.visit.hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between gap-4 text-sm">
                      <dt className="text-muted-foreground">{h.day}</dt>
                      <dd className="font-medium tabular-nums">
                        {h.time}
                        {t.visit.hoursSuffix ? ` ${t.visit.hoursSuffix}` : ''}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-3xl border border-border bg-card p-7">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-accent/12 text-accent">
                  <MapPin className="size-5" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold">{t.visit.findTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Biegenstraße 2
                  <br />
                  37235 Hessisch Lichtenau
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button
                    nativeButton={false}
                    render={
                      <a
                        href="https://www.google.com/maps/search/Eiscaf%C3%A9+Mio+Biegenstra%C3%9Fe+2+Hessisch+Lichtenau"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t.visit.route}
                      </a>
                    }
                    className="rounded-full"
                  />
                  <Button
                    variant="outline"
                    nativeButton={false}
                    render={
                      <a href="tel:+4956022284" className="inline-flex items-center gap-1.5">
                        <Phone className="size-4" /> {t.visit.call}
                      </a>
                    }
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="h-full min-h-[380px] overflow-hidden rounded-3xl border border-border shadow-sm">
              <iframe
                title={t.visit.mapTitle}
                src="https://www.google.com/maps?q=Biegenstra%C3%9Fe+2+37235+Hessisch+Lichtenau&output=embed"
                className="size-full min-h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
