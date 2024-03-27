import styles from './page.module.scss'

const Checkbox = (props: { id?: string; extra?: string; [x: string]: any }) => {
	const { extra, color, id, ...rest } = props
	return (
		<input
			id={id}
			type='checkbox'
			className={`${styles.checkbox}`}
			name='weekly'
			{...rest}
		/>
	)
}

export default Checkbox
