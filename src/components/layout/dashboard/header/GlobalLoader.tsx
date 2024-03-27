'use client'

import { useIsFetching, useIsMutating } from '@tanstack/react-query'

import Loader from '@/components/ui/Loader'

import styles from './page.module.scss'

export default function GlobalLoader() {
	const isMutating = useIsMutating()
	const isFetching = useIsFetching()

	return isFetching || isMutating ? (
		<div className={styles.loader}>
			<Loader />
		</div>
	) : null
}
