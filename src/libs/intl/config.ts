import { Pathnames } from 'next-intl/navigation'

export const locales = ['th', 'en'] as const

export const pathnames = {
  '/': '/',
  '/pathnames': {
    th: '/pathnames',
    en: '/pathnames',
  },
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
