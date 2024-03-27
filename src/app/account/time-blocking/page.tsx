import { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import TimeBlocking from './TimeBlocking'

export const metadata: Metadata = {
	title: `Расписание`,
	...NO_INDEX_PAGE
}

export default async function Page() {
	return (
		<>
			<Heading title='Расписание' />
			<TimeBlocking />
		</>
	)
}
