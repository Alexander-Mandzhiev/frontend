import cn from 'clsx'
import { X } from 'lucide-react'

import { Badge } from '@/components/ui/Badge'

import { IOptions } from '@/types/priority.types'

import { useOutside } from '@/hooks/useOutside'

import styles from './page.module.scss'

interface ISingleSelect {
	data: IOptions[]
	onChange: (value: string) => void
	value: string
	isColorSelect?: boolean
}

export default function SingleSelect({
	data,
	onChange,
	value,
	isColorSelect
}: ISingleSelect) {
	const { isShow, setIsShow, ref } = useOutside(false)
	const getValue = () => data.find(item => item.value === value)?.label

	return (
		<div
			className={cn(styles.select, {
				'w-max': isColorSelect
			})}
			ref={ref}
		>
			<button
				onClick={e => {
					e.preventDefault()
					setIsShow(!isShow)
				}}
			>
				{getValue() ? (
					<Badge
						variant={value}
						className='capitalize'
						style={isColorSelect ? { backgroundColor: value } : {}}
					>
						{getValue()}
					</Badge>
				) : (
					<Badge>Выбрать ...</Badge>
				)}
			</button>
			{value && (
				<button
					className={styles.value}
					onClick={e => {
						e.preventDefault()
						onChange('')
					}}
				>
					<X size={14} />
				</button>
			)}
			{isShow && (
				<div className={styles.is_show}>
					{data.map(item => (
						<button
							key={item.value}
							onClick={e => {
								e.preventDefault()
								onChange(item.value)
								setIsShow(false)
							}}
							className={styles.is_show_button}
							style={
								isColorSelect
									? {
											backgroundColor: item.value
										}
									: {}
							}
						>
							<Badge variant={item.value}>{item.label}</Badge>
						</button>
					))}
				</div>
			)}
		</div>
	)
}
