'use client'

import Loader from '@/components/ui/Loader'

import useProfile from '@/hooks/useProfile'

import styles from './page.module.scss'

export default function Statistics() {
	const { data, isLoading } = useProfile()
	return isLoading ? (
		<Loader />
	) : (
		<div className={styles.statistic}>
			{data?.statistic.length ? (
				data.statistic.map(stat => (
					<div
						className={styles.statistic_item}
						key={stat.label}
					>
						<div className={styles.statistic_item_label}>{stat.label}</div>
						<div className={styles.statistic_item_value}>{stat.value}</div>
					</div>
				))
			) : (
				<div>Статистика не загружена!</div>
			)}
		</div>
	)
}
