import styles from './page.module.scss'

interface IHeading {
	title: string
}

export function Heading({ title }: IHeading) {
	return (
		<>
			<h1 className={styles.heading}>{title}</h1>
			<div className={styles.line} />
		</>
	)
}
