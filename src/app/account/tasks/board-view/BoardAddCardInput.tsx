import type { Dispatch, SetStateAction } from 'react'

import type { ITaskResponse } from '@/types/task.types'

interface IBoardAddCardInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}
export default function BoardAddCardInput({
	setItems,
	filterDate
}: IBoardAddCardInput) {
	const addCard = () => {
		setItems(prev => {
			if (!prev) return

			return [
				...prev,
				{
					id: '',
					name: '',
					isCompleted: false,
					createdAt: filterDate
				}
			]
		})
	}

	return (
		<button
			onClick={addCard}
			className='italic opacity-40 text-sm'
		>
			Добавить задачу ...
		</button>
	)
}
