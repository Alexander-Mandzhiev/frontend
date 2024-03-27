import { type TextareaHTMLAttributes, forwardRef } from 'react'

import styles from './page.module.scss'

type TypeTransparentField = TextareaHTMLAttributes<HTMLTextAreaElement>

export const TransparentField = forwardRef<
	HTMLTextAreaElement,
	TypeTransparentField
>(({ className, ...rest }, ref) => {
	return (
		<textarea
			className={styles.transparent_field}
			ref={ref}
			{...rest}
		/>
	)
})

TransparentField.displayName = 'TransparentField'
