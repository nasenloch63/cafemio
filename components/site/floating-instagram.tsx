'use client'

import { useLanguage } from '@/components/site/language-context'
import { InstagramButton } from '@/components/site/instagram-button'

export function FloatingInstagram() {
  const { t } = useLanguage()
  return <InstagramButton variant="floating" label={t.instagram.floatingLabel} />
}
