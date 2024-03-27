import cn from 'clsx'
import { GripVertical, Loader, Trash } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Checkbox from '@/components/ui/checkbox'
import { TransparentField } from '@/components/ui/fields/TransparentField'
import SingleSelect from '@/components/ui/task-edit/SingleSelect'
import { DatePicker } from '@/components/ui/task-edit/date-picker/DatePicker'

import { PRIORITY } from '@/constants/priority.constants'

import type { ITaskResponse, TypeTaskFormState } from '@/types/task.types'

import useDeleteTask from '../hooks/useDeleteTast'
import useTaskDebounce from '../hooks/useTaskDebounce'

import styles from './page.module.scss'

interface IListRow {
	item: ITaskResponse
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}
export default function ListRow({ item, setItems }: IListRow) {
	const { register, control, watch } = useForm<TypeTaskFormState>({
		defaultValues: {
			name: item.name,
			isCompleted: item.isCompleted,
			createdAt: item.createdAt,
			priority: item.priority
		}
	})
	useTaskDebounce({ watch, itemId: item.id })
	const { deleteTask, isDeletePending } = useDeleteTask()
	let lenghtTextArea = watch('name')?.length

	return (
		<div
			className={cn(
				styles.row,
				watch('isCompleted') ? styles.completed : '',
				'animation-opacity'
			)}
		>
			<div className={styles.item}>
				<span className={styles.name}>
					<button aria-describedby='todo-item'>
						<GripVertical className={styles.name_grip} />
					</button>

					<Controller
						control={control}
						name='isCompleted'
						render={({ field: { value, onChange } }) => (
							<Checkbox
								onChange={onChange}
								checked={value}
							/>
						)}
					/>

					<TransparentField
						{...register('name')}
						rows={
							lenghtTextArea
								? window.screen.width >= 1340
									? Math.ceil(lenghtTextArea / 100)
									: window.screen.width >= 1200
										? Math.ceil(lenghtTextArea / 50)
										: window.screen.width >= 1100
											? Math.ceil(lenghtTextArea / 31)
											: window.screen.width >= 1000
												? Math.ceil(lenghtTextArea / 25)
												: window.screen.width >= 916
													? Math.ceil(lenghtTextArea / 25)
													: Math.ceil(lenghtTextArea / 20)
								: 1
						}
					/>
				</span>
			</div>
			<div className={styles.item}>
				<Controller
					control={control}
					name='createdAt'
					render={({ field: { value, onChange } }) => (
						<DatePicker
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>
			<div className={styles.item}>
				<Controller
					control={control}
					name='priority'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={PRIORITY.map(item => ({
								value: item.value,
								label: item.label
							}))}
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>
			<div className={styles.item}>
				<button
					onClick={() =>
						item.id ? deleteTask(item.id) : setItems(prev => prev?.slice(0, -1))
					}
					className={styles.delete}
				>
					{isDeletePending ? <Loader size={15} /> : <Trash size={15} />}
				</button>
			</div>
		</div>
	)
}
