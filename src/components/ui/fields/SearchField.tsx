import { FormEvent, type InputHTMLAttributes, forwardRef } from 'react'

import styles from './page.module.scss'

type TypeTransparentField = {
	onChange: (event: string) => void
	placeholder: string
}

export const SearchField = forwardRef<HTMLInputElement, TypeTransparentField>(
	({ onChange, ...rest }, ref) => {
		const changeInput = (e: FormEvent<HTMLInputElement>) => {
			const event = e.currentTarget.value
			onChange(event)
		}

		return (
			<input
				className={styles.search}
				onChange={changeInput}
				ref={ref}
				{...rest}
			/>
		)
	}
)

SearchField.displayName = 'SearchField'
