import { LanguageProvider } from '@/components/site/language-context'
import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { IceSpecialties } from '@/components/site/ice-specialties'
import { Menu } from '@/components/site/menu'
import { Breakfast } from '@/components/site/breakfast'
import { Fingerfood } from '@/components/site/fingerfood'
import { Gallery } from '@/components/site/gallery'
import { Visit } from '@/components/site/visit'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Hero />
        <About />
        <IceSpecialties />
        <Menu />
        <Breakfast />
        <Fingerfood />
        <Gallery />
        <Visit />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
