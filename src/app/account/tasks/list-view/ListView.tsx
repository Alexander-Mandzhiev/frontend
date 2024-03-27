import { DragDropContext } from '@hello-pangea/dnd'
import { Trash } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

import { ITaskResponse } from '@/types/task.types'

import { COLUMNS } from '../colums.data'
import useTaskDnd from '../hooks/useTaskDnd'

import { ListRowParent } from './ListRowParent'
import styles from './page.module.scss'

export default function ListView({
	items,
	setItems
}: {
	items: ITaskResponse[] | undefined
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}) {
	const { onDragEnd } = useTaskDnd()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.table}>
				<div className={styles.table_header}>
					<div className={styles.item}>Название задачи</div>
					<div className={styles.item}>Сроки</div>
					<div className={styles.item}>Приоритет</div>
					<div className={styles.item}>
						<div className={styles.delete}>
							<Trash size={15} />
						</div>
					</div>
				</div>

				<div className={styles.parentsWrapper}>
					{COLUMNS.map(column => (
						<ListRowParent
							items={items}
							label={column.label}
							value={column.value}
							setItems={setItems}
							key={column.value}
						/>
					))}
				</div>
			</div>
		</DragDropContext>
	)
}
