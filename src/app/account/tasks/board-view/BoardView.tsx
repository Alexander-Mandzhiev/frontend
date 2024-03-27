import { DragDropContext } from '@hello-pangea/dnd'
import { Dispatch, SetStateAction } from 'react'

import { ITaskResponse } from '@/types/task.types'

import { COLUMNS } from '../colums.data'
import useTaskDnd from '../hooks/useTaskDnd'

import BoardColumn from './BoardColumn'
import styles from './page.module.scss'

export default function BoardView({
	items,
	setItems
}: {
	items: ITaskResponse[] | undefined
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}) {
	const { onDragEnd } = useTaskDnd()
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.board}>
				{COLUMNS.map(column => (
					<BoardColumn
						key={column.value}
						value={column.value}
						label={column.label}
						items={items}
						setItems={setItems}
					/>
				))}
			</div>
		</DragDropContext>
	)
}
