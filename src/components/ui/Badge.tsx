import type { CSSProperties, PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import styles from './page.module.scss'

interface IBadge {
	className?: string
	variant?: string
	style?: CSSProperties
}

const badge = tv({
	base: styles.badge,
	variants: {
		backgroundColor: {
			gray: styles.badge_grey,
			high: styles.badge_high,
			medium: styles.badge_medium,
			low: styles.badge_low
		}
	},
	defaultVariants: {
		backgroundColor: 'gray'
	}
})

export function Badge({
	children,
	className,
	variant,
	style
}: PropsWithChildren<IBadge>) {
	return (
		<span
			className={badge({
				backgroundColor: variant as 'low' | 'high' | 'medium',
				className
			})}
			style={style}
		>
			{children}
		</span>
	)
}
