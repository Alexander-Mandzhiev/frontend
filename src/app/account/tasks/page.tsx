import { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import TasksView from './TasksView'

export const metadata: Metadata = {
	title: `Задачи`,
	...NO_INDEX_PAGE
}

export default async function Page() {
	return (
		<>
			<Heading title='Задачи' />
			<TasksView />
		</>
	)
}
