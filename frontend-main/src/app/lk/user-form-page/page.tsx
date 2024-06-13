import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { UserFormPage } from './UserFormPage'


export const metadata: Metadata = {
	title: 'Form Page',
	...NO_INDEX_PAGE
}

export default function FormPage() {
	return (
		<div>
            <UserFormPage/>
		</div>
	)
}
