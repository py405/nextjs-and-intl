'use client'
import { useSearchParams } from 'next/navigation'

import { LocaleEnum } from '@/enums/LocaleEnum'
import { usePathname, useRouter } from '@/libs/intl/navigation'
import { HeaderProps } from './interface'

export function Header({ locale }: HeaderProps) {
  const router = useRouter()
  const pathname = usePathname()
  const queryStrings = useSearchParams()

  function handleLocaleChange() {
    const query = queryStrings.toString()
    router.replace(query ? `${pathname}?${query}` : pathname, {
      locale: locale === LocaleEnum.TH ? LocaleEnum.EN : LocaleEnum.TH,
    })
  }
  return (
    <div>
      header{' '}
      <button type='button' onClick={handleLocaleChange}>
        {locale}
      </button>
    </div>
  )
}
