import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Auth } from './Auth'
import { Container } from '@chakra-ui/react'

export const metadata: Metadata = {
	title: 'AuthPage',
	...NO_INDEX_PAGE
}

export default function AuthPage() {
	return (
		<Container>
			<Auth />
		</Container>
	)
		
}
