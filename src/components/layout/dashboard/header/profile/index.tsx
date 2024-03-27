'use client'

import Loader from '@/components/ui/Loader'

import useProfile from '@/hooks/useProfile'

import styles from './page.module.scss'

export default function Profile() {
	const { data, isLoading } = useProfile()
	return (
		<div className={styles.container}>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.container_content}>
					<div className={styles.container_content_user}>
						<p className={styles.container_content_user_name}>
							{data?.user.username}
						</p>
						<p className={styles.container_content_user_email}>
							{data?.user.email}
						</p>
					</div>

					<div className={styles.container_content_badge}>
						{data?.user.username?.charAt(0) || 'A'}
					</div>
				</div>
			)}
		</div>
	)
}
