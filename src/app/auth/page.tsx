import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Auth from './auth'

export const metadata: Metadata = {
	title: `Авторизация`,
	...NO_INDEX_PAGE
}

export default async function SignInPage() {
	return <Auth />
}
