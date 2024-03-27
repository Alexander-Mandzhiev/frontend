import { Edit, GripVertical, Loader, Trash } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import type {
	ITimeBlockResponse,
	TypeTimeBlockFormState
} from '@/types/time-block.types'

import useDeleteTimeBlock from './hooks/useDeleteTimeBlock'
import useTimeBlockSortable from './hooks/useTimeBlockSortable'
import styles from './page.module.scss'

export default function TimeBlock({ item }: { item: ITimeBlockResponse }) {
	const { attributes, listeners, setNodeRef, style } = useTimeBlockSortable(
		item.id
	)
	const { reset } = useFormContext<TypeTimeBlockFormState>()
	const { deleteTimeBlock, isDeletePending } = useDeleteTimeBlock(item.id)

	return (
		<div
			ref={setNodeRef}
			style={style}
		>
			<div
				className={styles.block}
				style={{
					backgroundColor: item.color || 'lightgray',
					height: `${item.duration}px`
				}}
			>
				<div className={styles.block_item}>
					<button
						{...attributes}
						{...listeners}
						aria-describedby='time-block'
					>
						<GripVertical className={styles.grip} />
					</button>
					<div>
						{item.name}{' '}
						<i className={styles.block__name}>({item.duration} min.)</i>
					</div>
				</div>

				<div className={styles.actions}>
					<button
						onClick={() => {
							reset({
								id: item.id,
								color: item.color,
								duration: item.duration,
								name: item.name,
								order: item.order
							})
						}}
						className={styles.redacting}
					>
						<Edit size={16} />
					</button>
					<button
						onClick={() => deleteTimeBlock()}
						className={styles.delete}
					>
						{isDeletePending ? <Loader size={16} /> : <Trash size={16} />}
					</button>
				</div>
			</div>
		</div>
	)
}
