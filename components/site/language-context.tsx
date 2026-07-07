'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Lang = 'de' | 'en'

type Dict = typeof translations.de

export const translations = {
  de: {
    nav: {
      about: 'Über uns',
      ice: 'Eis',
      menu: 'Speisekarte',
      breakfast: 'Frühstück',
      fingerfood: 'Fingerfood',
      gallery: 'Galerie',
      visit: 'Besuch',
      reserve: 'Reservieren',
      menuOpen: 'Menü öffnen',
      menuClose: 'Menü schließen',
      home: 'Eiscafé Mio Startseite',
      logoAlt: 'Eiscafé Mio Logo',
      switchTo: 'Switch to English',
    },
    hero: {
      badge: 'Hessisch Lichtenau',
      titleLine1: 'Ein Löffel Glück,',
      titleLine2: 'jeden Tag frisch.',
      desc: 'Willkommen im Eiscafé Mio – wo hausgemachtes italienisches Eis, herzhaftes Frühstück und ein warmes Café-Ambiente zu kleinen Momenten voller Genuss werden.',
      ctaIce: 'Unsere Eisspezialitäten',
      ctaVisit: 'Besuch planen',
      hours: 'Täglich geöffnet · 8:30 – 21:00 Uhr',
    },
    about: {
      eyebrow: 'Ciao & benvenuti',
      title: 'Mehr als nur ein Eiscafé',
      desc: 'Im Herzen von Hessisch Lichtenau ist das Eiscafé Mio ein Ort für die schönen, einfachen Momente. Ob ein sonniger Nachmittag mit einer Kugel Eis, ein ausgiebiges Frühstück mit Freunden oder ein Cappuccino zum Innehalten – bei uns fühlst du dich wie zu Hause.',
      imgMain: 'Gemütlicher Innenraum des Eiscafé Mio mit warmem Licht und weißen Tischdecken',
      imgSmall: 'Cappuccino mit Schokolade',
      values: [
        { title: 'Mit Liebe gemacht', text: 'Jede Kugel, jeder Teller entsteht aus Leidenschaft für echten Genuss.' },
        { title: 'Immer frisch', text: 'Hausgemachtes Eis und frische Zutaten – Tag für Tag neu zubereitet.' },
        { title: 'Zum Verweilen', text: 'Ein gemütlicher Ort, an dem die Zeit einen Moment stillsteht.' },
      ],
    },
    ice: {
      eyebrow: 'Dolce vita',
      title: 'Unsere Eisspezialitäten',
      desc: 'Hausgemacht, cremig und mit den besten Zutaten – ein Genuss für Augen und Gaumen.',
      items: [
        { title: 'Spaghetti-Eis', text: 'Der Klassiker mit Sahne, Schokosauce und einer Waffel voller Herz.', tag: 'Beliebt' },
        { title: 'Frucht-Becher', text: 'Frische Früchte, feines Fruchteis und knusprige Waffeln.', tag: 'Fruchtig' },
        { title: 'Mascarpone-Traum', text: 'Cremige Mascarpone mit frischen Beeren – frisch vor deinen Augen zubereitet.', tag: 'Hausgemacht' },
        { title: 'Frucht-Etagere', text: 'Eine bunte Auswahl an frischen Früchten, liebevoll angerichtet.', tag: 'Zum Teilen' },
      ],
    },
    menu: {
      eyebrow: 'La nostra carta',
      title: 'Unsere Speisekarte',
      desc: 'Frisch, hausgemacht und mit Liebe zubereitet. Wähle eine Kategorie und entdecke unsere Vielfalt.',
      popular: 'Beliebt',
      note: 'Klassischer Filterkaffee ist bei jedem Frühstück inbegriffen, während Kaffeespezialitäten regulär berechnet werden.',
      allergyNote: 'Angaben zu Allergenen und Zusatzstoffen erhältst du gerne auf Nachfrage bei unserem Team.',
      priceHint: 'Preise für Eisspezialitäten sind Richtwerte – tagesaktuelle Preise findest du vor Ort.',
      pdfCta: 'Original-Speisekarte ansehen',
      categories: [
        {
          id: 'fruehstueck',
          label: 'Frühstück',
          items: [
            { name: 'Mio Frühstück', description: '2 Brötchen, Butter, Marmelade, Salami, Schinken, Rührei mit oder ohne Speck, Putenwurst, Käse, Frischkäse, Kaffee und Orangensaft', price: '14,50 €', popular: true },
            { name: 'Amerikanisches Frühstück', description: '2 Brötchen, Butter, 3 Spiegeleier, Bacon-Streifen, Salat, Tomate, Gurke, Kaffee und Orangensaft', price: '13,20 €', popular: true },
            { name: 'Käse Frühstück', description: '2 Brötchen, Butter, Marmelade, gekochtes Ei, verschiedene Sorten Käse, Frischkäse, Kaffee und Orangensaft', price: '13,90 €' },
            { name: 'Single Frühstück', description: '2 Brötchen, Butter, Marmelade, gekochtes Ei, Salami, Hinterkochschinken, Putenwurst, Käse, Frischkäse, Kaffee und Orangensaft', price: '12,90 €' },
            { name: 'Korn-gesund', description: '2 Vollkornbrötchen, Butter, Käse, Honig und ein kleiner Obstsalat mit Joghurtsauce, Kaffee und Orangensaft', price: '13,90 €' },
            { name: 'Süßes-Frühstück', description: '2 Brötchen, Butter, Marmelade, Honig und Nutella, Kaffee', price: '10,50 €' },
            { name: 'Kids Frühstück', description: '1 Brötchen, Butter, Salami, Käse, Nutella, Saft, Milch oder Kakao', price: '10,50 €' },
            { name: 'Gesundes Frühstück', description: 'Müsli mit frischem Obst (nach Saison), Naturjoghurt, Honig, Kaffee', price: '8,90 €' },
          ],
        },
        {
          id: 'buefett',
          label: 'Büfett',
          items: [
            { name: 'Frühstücksbüfett', description: 'Verschiedene Brötchensorten, Butter, verschiedene Käsesorten, Salami, Schinken, Putenwurst, Nürnberger Würstchen, Räucherlachs, Eier, Tomaten-Mozzarella, Marmelade, Honig, Nutella, Rührei mit oder ohne Speck, Kaffee und Orangensaft', price: '16,50 €', popular: true },
          ],
        },
        {
          id: 'suesse-crepes',
          label: 'Süße Crêpes',
          items: [
            { name: 'Nutella-Banane', description: 'Frische Banane mit cremiger Nutella', price: '5,90 €', popular: true },
            { name: 'Heiße Kirschen, Sahne und Eis', description: 'Warme Kirschen mit Sahne und einer Kugel Vanilleeis', price: '6,90 €' },
            { name: 'Frisches Obst (nach Saison)', description: 'Feiner Crêpe mit frischem Obst der Saison', price: '6,20 €' },
            { name: 'Nutella', description: 'Klassischer Crêpe mit Nutella', price: '5,50 €' },
            { name: 'Zimt und Zucker', description: 'Der Klassiker mit Zimt und Zucker', price: '4,50 €' },
          ],
        },
        {
          id: 'herzhafte-crepes',
          label: 'Herzhafte Crêpes',
          items: [
            { name: 'Schinken und Käse', description: 'Herzhafter Crêpe mit Schinken und Käse', price: '6,90 €', popular: true },
            { name: 'Tomate, Mozzarella', description: 'Crêpe mit Tomate und Mozzarella', price: '6,40 €' },
          ],
        },
        {
          id: 'eis',
          label: 'Eisspezialitäten',
          items: [
            { name: 'Spaghetti-Eis', description: 'Der Klassiker mit Sahne, Schokosauce und einer Waffel voller Herz', price: '6,90 €', popular: true },
            { name: 'Frucht-Becher', description: 'Frische Früchte, feines Fruchteis und knusprige Waffeln', price: '7,50 €' },
            { name: 'Mascarpone-Traum', description: 'Cremige Mascarpone mit frischen Beeren – frisch vor deinen Augen zubereitet', price: '7,90 €' },
            { name: 'Frucht-Etagere', description: 'Eine bunte Auswahl an frischen Früchten, liebevoll angerichtet', price: '12,90 €' },
          ],
        },
        {
          id: 'beilagen',
          label: 'Extra Beilagen',
          items: [
            { name: 'Portion Rührei mit Speck', description: 'Frisch zubereitet', price: '4,50 €' },
            { name: 'Portion Rührei', description: 'Frisch zubereitet', price: '3,80 €' },
            { name: 'Räucherlachs', description: 'Extra Portion', price: '2,50 €' },
            { name: 'Bacon-Streifen', description: 'Extra Portion', price: '2,10 €' },
            { name: 'Körnerbrötchen', description: 'Frisch gebacken', price: '1,50 €' },
            { name: 'Speck', description: 'Extra Portion', price: '1,20 €' },
            { name: 'Ei', description: 'Gekocht oder als Spiegelei', price: '1,00 €' },
            { name: 'Weizenbrötchen', description: 'Frisch gebacken', price: '1,00 €' },
            { name: 'Honig, Marmelade oder Nutella', description: 'Extra Portion', price: '0,50 €' },
          ],
        },
      ],
    },
    breakfast: {
      eyebrow: 'Buongiorno',
      title: 'Frühstück, das den Tag versüßt',
      desc: 'Starte deinen Tag mit liebevoll angerichteten Frühstückstellern – von herzhaft bis fein. Frische Eier, knuspriges Brot, feiner Aufschnitt, Käse und knackiges Obst. Perfekt zum Genießen und Teilen.',
      imgMain: 'Große Frühstücks-Etagere mit Eiern, Lachs, Aufschnitt und Sekt',
      img1: 'Liebevoll angerichteter Teller mit Aufschnitt, Käse und frischem Obst',
      img2: 'Frühstücksteller mit Rührei, Käse und Salat',
    },
    fingerfood: {
      eyebrow: 'Piccole delizie',
      title: 'Fingerfood & kleine Köstlichkeiten',
      desc: 'Ob knackige Caprese-Spieße oder feine Häppchen zum Teilen – unsere Fingerfood-Auswahl ist perfekt für gesellige Runden, den kleinen Hunger zwischendurch oder als frischer Begleiter zu einem Glas Prosecco.',
      imgAlt: 'Caprese-Spieße mit Mozzarella, Tomate und Basilikum im Glas serviert',
      list: [
        'Frische Caprese-Spieße mit Basilikum',
        'Feine Aufschnitt- & Käseplatten',
        'Ideal zum Teilen mit Freunden',
      ],
    },
    gallery: {
      eyebrow: 'Momente',
      title: 'Ein Blick in unser Mio',
      desc: 'Warmes Licht, gemütliche Ecken und liebevoll angerichtete Teller – so sieht Genuss bei uns aus.',
      alts: [
        'Außenansicht des Eiscafé Mio mit großer Eiswaffel',
        'Gemütlicher Innenraum mit Tischen und warmem Licht',
        'Frühstückstisch mit Brotkorb, Salat und Orangensaft',
        'Kaffeetassen auf einem Holztisch im Café',
        'Fein angerichteter Frühstücksteller',
        'Eckansicht des Eiscafé Mio Gebäudes',
      ],
    },
    visit: {
      eyebrow: 'Wir freuen uns auf dich',
      title: 'Besuch planen',
      desc: 'Komm vorbei und lass es dir gut gehen – mitten in Hessisch Lichtenau.',
      hoursTitle: 'Öffnungszeiten',
      hoursSuffix: 'Uhr',
      hours: [
        { day: 'Montag – Freitag', time: '8:30 – 21:00' },
        { day: 'Samstag', time: '8:30 – 21:00' },
        { day: 'Sonntag & Feiertage', time: '9:00 – 21:00' },
      ],
      findTitle: 'So findest du uns',
      route: 'Route planen',
      call: 'Anrufen',
      mapTitle: 'Karte Eiscafé Mio Hessisch Lichtenau',
    },
    instagram: {
      navLabel: 'Folg uns',
      heroLabel: 'Auf Instagram folgen',
      galleryBannerHeading: 'Mehr Eis-Momente auf Instagram',
      galleryBannerSub: 'Schau hinter die Kulissen, entdecke neue Kreationen und sei Teil unserer Community.',
      galleryBannerCta: '@eis_mio_hessisch_lichtenau',
      footerLabel: 'Instagram',
      floatingLabel: 'Auf Instagram folgen',
    },
    footer: {
      desc: 'Hausgemachtes Eis, herzhaftes Frühstück und ein warmes Café-Ambiente im Herzen von Hessisch Lichtenau.',
      contactTitle: 'Kontakt',
      hoursText: 'Täglich 8:30 – 21:00 Uhr',
      discoverTitle: 'Entdecken',
      linkIce: 'Eisspezialitäten',
      linkBreakfast: 'Frühstück',
      linkGallery: 'Galerie',
      copyright: 'Eiscafé Mio · Hessisch Lichtenau',
      tagline: 'Mit Liebe gemacht in Nordhessen',
    },
  },
  en: {
    nav: {
      about: 'About',
      ice: 'Ice Cream',
      menu: 'Menu',
      breakfast: 'Breakfast',
      fingerfood: 'Finger Food',
      gallery: 'Gallery',
      visit: 'Visit',
      reserve: 'Reserve',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      home: 'Eiscafé Mio home',
      logoAlt: 'Eiscafé Mio logo',
      switchTo: 'Auf Deutsch wechseln',
    },
    hero: {
      badge: 'Hessisch Lichtenau',
      titleLine1: 'A spoonful of joy,',
      titleLine2: 'freshly made each day.',
      desc: 'Welcome to Eiscafé Mio – where homemade Italian gelato, hearty breakfasts and a warm café atmosphere turn into little moments full of delight.',
      ctaIce: 'Our ice cream specialties',
      ctaVisit: 'Plan your visit',
      hours: 'Open daily · 8:30 – 21:00',
    },
    about: {
      eyebrow: 'Ciao & benvenuti',
      title: 'More than just an ice cream café',
      desc: 'In the heart of Hessisch Lichtenau, Eiscafé Mio is a place for the simple, beautiful moments. Whether a sunny afternoon with a scoop of gelato, a leisurely breakfast with friends or a cappuccino to pause and unwind – with us, you feel right at home.',
      imgMain: 'Cozy interior of Eiscafé Mio with warm light and white tablecloths',
      imgSmall: 'Cappuccino with chocolate',
      values: [
        { title: 'Made with love', text: 'Every scoop and every plate is crafted from a passion for real enjoyment.' },
        { title: 'Always fresh', text: 'Homemade gelato and fresh ingredients – freshly prepared day after day.' },
        { title: 'A place to linger', text: 'A cozy spot where time stands still for a moment.' },
      ],
    },
    ice: {
      eyebrow: 'Dolce vita',
      title: 'Our ice cream specialties',
      desc: 'Homemade, creamy and made with the finest ingredients – a treat for the eyes and the palate.',
      items: [
        { title: 'Spaghetti Ice Cream', text: 'The classic with cream, chocolate sauce and a wafer full of heart.', tag: 'Popular' },
        { title: 'Fruit Sundae', text: 'Fresh fruit, delicate fruit gelato and crispy wafers.', tag: 'Fruity' },
        { title: 'Mascarpone Dream', text: 'Creamy mascarpone with fresh berries – prepared fresh before your eyes.', tag: 'Homemade' },
        { title: 'Fruit Étagère', text: 'A colorful selection of fresh fruit, lovingly arranged.', tag: 'To share' },
      ],
    },
    menu: {
      eyebrow: 'La nostra carta',
      title: 'Our menu',
      desc: 'Fresh, homemade and prepared with love. Pick a category and explore our variety.',
      popular: 'Popular',
      note: 'Classic filter coffee is included with every breakfast, while coffee specialties are charged separately.',
      allergyNote: 'Information on allergens and additives is gladly available from our team on request.',
      priceHint: 'Prices for ice cream specialties are approximate – current prices are available on site.',
      pdfCta: 'View the original menu',
      categories: [
        {
          id: 'fruehstueck',
          label: 'Breakfast',
          items: [
            { name: 'Mio Breakfast', description: '2 rolls, butter, jam, salami, ham, scrambled eggs with or without bacon, turkey sausage, cheese, cream cheese, coffee and orange juice', price: '14,50 €', popular: true },
            { name: 'American Breakfast', description: '2 rolls, butter, 3 fried eggs, bacon strips, salad, tomato, cucumber, coffee and orange juice', price: '13,20 €', popular: true },
            { name: 'Cheese Breakfast', description: '2 rolls, butter, jam, boiled egg, assorted cheeses, cream cheese, coffee and orange juice', price: '13,90 €' },
            { name: 'Single Breakfast', description: '2 rolls, butter, jam, boiled egg, salami, cooked ham, turkey sausage, cheese, cream cheese, coffee and orange juice', price: '12,90 €' },
            { name: 'Wholegrain & Healthy', description: '2 wholegrain rolls, butter, cheese, honey and a small fruit salad with yogurt sauce, coffee and orange juice', price: '13,90 €' },
            { name: 'Sweet Breakfast', description: '2 rolls, butter, jam, honey and Nutella, coffee', price: '10,50 €' },
            { name: 'Kids Breakfast', description: '1 roll, butter, salami, cheese, Nutella, juice, milk or cocoa', price: '10,50 €' },
            { name: 'Healthy Breakfast', description: 'Muesli with fresh seasonal fruit, natural yogurt, honey, coffee', price: '8,90 €' },
          ],
        },
        {
          id: 'buefett',
          label: 'Buffet',
          items: [
            { name: 'Breakfast Buffet', description: 'Assorted rolls, butter, assorted cheeses, salami, ham, turkey sausage, Nuremberg sausages, smoked salmon, eggs, tomato-mozzarella, jam, honey, Nutella, scrambled eggs with or without bacon, coffee and orange juice', price: '16,50 €', popular: true },
          ],
        },
        {
          id: 'suesse-crepes',
          label: 'Sweet Crêpes',
          items: [
            { name: 'Nutella & Banana', description: 'Fresh banana with creamy Nutella', price: '5,90 €', popular: true },
            { name: 'Hot Cherries, Cream & Ice Cream', description: 'Warm cherries with cream and a scoop of vanilla ice cream', price: '6,90 €' },
            { name: 'Fresh Fruit (seasonal)', description: 'Delicate crêpe with fresh seasonal fruit', price: '6,20 €' },
            { name: 'Nutella', description: 'Classic crêpe with Nutella', price: '5,50 €' },
            { name: 'Cinnamon & Sugar', description: 'The classic with cinnamon and sugar', price: '4,50 €' },
          ],
        },
        {
          id: 'herzhafte-crepes',
          label: 'Savory Crêpes',
          items: [
            { name: 'Ham & Cheese', description: 'Savory crêpe with ham and cheese', price: '6,90 €', popular: true },
            { name: 'Tomato & Mozzarella', description: 'Crêpe with tomato and mozzarella', price: '6,40 €' },
          ],
        },
        {
          id: 'eis',
          label: 'Ice Cream',
          items: [
            { name: 'Spaghetti Ice Cream', description: 'The classic with cream, chocolate sauce and a wafer full of heart', price: '6,90 €', popular: true },
            { name: 'Fruit Sundae', description: 'Fresh fruit, delicate fruit gelato and crispy wafers', price: '7,50 €' },
            { name: 'Mascarpone Dream', description: 'Creamy mascarpone with fresh berries – prepared fresh before your eyes', price: '7,90 €' },
            { name: 'Fruit Étagère', description: 'A colorful selection of fresh fruit, lovingly arranged', price: '12,90 €' },
          ],
        },
        {
          id: 'beilagen',
          label: 'Extras',
          items: [
            { name: 'Scrambled Eggs with Bacon', description: 'Freshly prepared portion', price: '4,50 €' },
            { name: 'Scrambled Eggs', description: 'Freshly prepared portion', price: '3,80 €' },
            { name: 'Smoked Salmon', description: 'Extra portion', price: '2,50 €' },
            { name: 'Bacon Strips', description: 'Extra portion', price: '2,10 €' },
            { name: 'Grain Roll', description: 'Freshly baked', price: '1,50 €' },
            { name: 'Bacon', description: 'Extra portion', price: '1,20 €' },
            { name: 'Egg', description: 'Boiled or fried', price: '1,00 €' },
            { name: 'Wheat Roll', description: 'Freshly baked', price: '1,00 €' },
            { name: 'Honey, Jam or Nutella', description: 'Extra portion', price: '0,50 €' },
          ],
        },
      ],
    },
    breakfast: {
      eyebrow: 'Buongiorno',
      title: 'Breakfast that sweetens the day',
      desc: 'Start your day with lovingly arranged breakfast plates – from hearty to refined. Fresh eggs, crusty bread, fine cold cuts, cheese and crisp fruit. Perfect for savoring and sharing.',
      imgMain: 'Large breakfast tier with eggs, salmon, cold cuts and sparkling wine',
      img1: 'Lovingly arranged plate with cold cuts, cheese and fresh fruit',
      img2: 'Breakfast plate with scrambled eggs, cheese and salad',
    },
    fingerfood: {
      eyebrow: 'Piccole delizie',
      title: 'Finger food & little delicacies',
      desc: 'Whether crisp caprese skewers or fine bites to share – our finger food selection is perfect for sociable gatherings, a little snack in between or as a fresh companion to a glass of prosecco.',
      imgAlt: 'Caprese skewers with mozzarella, tomato and basil served in a glass',
      list: [
        'Fresh caprese skewers with basil',
        'Fine cold cut & cheese platters',
        'Perfect for sharing with friends',
      ],
    },
    gallery: {
      eyebrow: 'Moments',
      title: 'A glimpse inside our Mio',
      desc: 'Warm light, cozy corners and lovingly arranged plates – this is what enjoyment looks like with us.',
      alts: [
        'Exterior view of Eiscafé Mio with a large ice cream cone',
        'Cozy interior with tables and warm light',
        'Breakfast table with bread basket, salad and orange juice',
        'Coffee cups on a wooden table in the café',
        'Finely arranged breakfast plate',
        'Corner view of the Eiscafé Mio building',
      ],
    },
    visit: {
      eyebrow: 'We look forward to seeing you',
      title: 'Plan your visit',
      desc: 'Come by and treat yourself – right in the center of Hessisch Lichtenau.',
      hoursTitle: 'Opening hours',
      hoursSuffix: '',
      hours: [
        { day: 'Monday – Friday', time: '8:30 – 21:00' },
        { day: 'Saturday', time: '8:30 – 21:00' },
        { day: 'Sunday & holidays', time: '9:00 – 21:00' },
      ],
      findTitle: 'How to find us',
      route: 'Get directions',
      call: 'Call us',
      mapTitle: 'Map of Eiscafé Mio Hessisch Lichtenau',
    },
    instagram: {
      navLabel: 'Follow us',
      heroLabel: 'Follow on Instagram',
      galleryBannerHeading: 'More ice cream moments on Instagram',
      galleryBannerSub: 'Go behind the scenes, discover new creations and join our community.',
      galleryBannerCta: '@eis_mio_hessisch_lichtenau',
      footerLabel: 'Instagram',
      floatingLabel: 'Follow on Instagram',
    },
    footer: {
      desc: 'Homemade gelato, hearty breakfasts and a warm café atmosphere in the heart of Hessisch Lichtenau.',
      contactTitle: 'Contact',
      hoursText: 'Daily 8:30 – 21:00',
      discoverTitle: 'Discover',
      linkIce: 'Ice cream specialties',
      linkBreakfast: 'Breakfast',
      linkGallery: 'Gallery',
      copyright: 'Eiscafé Mio · Hessisch Lichtenau',
      tagline: 'Made with love in Northern Hesse',
    },
  },
} satisfies Record<Lang, unknown>

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('de')

  useEffect(() => {
    const stored = window.localStorage.getItem('mio-lang')
    if (stored === 'de' || stored === 'en') {
      setLangState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    window.localStorage.setItem('mio-lang', next)
  }

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang(lang === 'de' ? 'en' : 'de'),
      t: translations[lang],
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
