import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Confirm from './confirm'

export const metadata: Metadata = {
	title: `Подтверждение`,
	...NO_INDEX_PAGE
}
type PageProps = { token: string }

export default async function page({
	searchParams
}: {
	searchParams: PageProps
}) {
	return <Confirm token={searchParams?.token} />
}
