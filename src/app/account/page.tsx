import { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Statistics from './Statistics'

export const metadata: Metadata = {
	title: `Общие`,
	...NO_INDEX_PAGE
}

export default async function Page() {
	return (
		<>
			<Heading title='Статистика' />
			<Statistics />
		</>
	)
}
