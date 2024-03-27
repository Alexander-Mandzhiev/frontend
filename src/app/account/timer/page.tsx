import { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Session from './Session'

export const metadata: Metadata = {
	title: `Сессия`,
	...NO_INDEX_PAGE
}

export default async function Page() {
	return (
		<>
			<Heading title='Сессия' />
			<Session />
		</>
	)
}
