'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import ArrowLeft from '@/components/ui/CircleChevronLeft'
import List from '@/components/ui/List'

import { MENU } from '@/constants/menu.data'

import { LogoutButton } from './LogoutButton'
import MenuItem from './MenuItem'
import styles from './page.module.scss'

const [minWidth, maxWidth, defaultWidth] = [220, 350, 300]

export default function Sidebar() {
	const isResized = useRef(false)
	const [sidebarWidth, setSidebarWidth] = useState(defaultWidth)
	const [mobileMenu, setMobileMenu] = useState(false)

	useEffect(() => {
		window.addEventListener('mousemove', e => {
			if (!isResized.current) return

			setSidebarWidth(previousWidth => {
				const newWidth = previousWidth + e.movementX / 2
				const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth
				return isWidthInRange ? newWidth : previousWidth
			})
		})

		window.addEventListener('mouseup', () => {
			isResized.current = false
		})
	}, [])

	const onChange = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
		setMobileMenu(!mobileMenu)
		console.log('click', mobileMenu)
	}

	return mobileMenu ? (
		<aside
			className={styles.mobile_sidebar}
			style={{ width: '62px' }}
		>
			<span
				className={styles.mobile_sidebar_arrow}
				onClick={event => onChange(event)}
			>
				<ArrowLeft />
			</span>
			<Link
				href='/account'
				className={styles.mobile_sidebar_logo}
			>
				<List />
			</Link>
			<div className={styles.mobile_sidebar_menu}>
				{MENU.map(item => (
					<MenuItem
						isMobile={mobileMenu}
						item={item}
						key={item.link}
					/>
				))}
				<LogoutButton isMobile={mobileMenu} />
			</div>
		</aside>
	) : (
		<aside
			className={styles.sidebar}
			style={{ width: mobileMenu ? '62px' : sidebarWidth }}
		>
			<div
				className={styles.sidebar_resizer}
				onMouseDown={() => {
					isResized.current = true
				}}
			/>
			<div className={styles.sidebar_gap}>
				<span
					className={styles.sidebar_arrow}
					onClick={event => onChange(event)}
				>
					<ArrowLeft />
				</span>
				<Link
					href='/account'
					className={styles.sidebar_logo}
				>
					<List />
					<span className={styles.sidebar_logo_text}>Diary</span>
				</Link>
				<div className={styles.sidebar_menu}>
					{MENU.map(item => (
						<MenuItem
							isMobile={mobileMenu}
							item={item}
							key={item.link}
						/>
					))}
					<LogoutButton isMobile={mobileMenu} />
				</div>
			</div>
			<footer className={styles.sidebar_footer}></footer>
		</aside>
	)
}
