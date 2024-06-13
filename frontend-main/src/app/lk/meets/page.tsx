import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Meets } from './Meets'

export const metadata: Metadata = {
  title: 'Meets',
  ...NO_INDEX_PAGE
}

export default function AdminPage() {
  return (
    <div>
      <Heading title='Встречи' />
      <Meets />
    </div>
  )
}
