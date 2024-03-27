import Link from 'next/link'

import { IMenuItem } from '@/types/menu.types'

import styles from './page.module.scss'

export default function MenuItem({
	item,
	isMobile
}: {
	item: IMenuItem
	isMobile: boolean
}) {
	return (
		<Link
			href={item.link}
			className={isMobile ? styles.mobile_menu : styles.menu}
		>
			<item.icon />
			{isMobile ? <></> : <span className={styles.menu_text}>{item.name}</span>}
		</Link>
	)
}
