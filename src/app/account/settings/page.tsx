import { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Settings from './Settings'

export const metadata: Metadata = {
	title: `Настройки`,
	...NO_INDEX_PAGE
}

export default async function Page() {
	return (
		<>
			<Heading title='Настройки' />
			<Settings />
		</>
	)
}
