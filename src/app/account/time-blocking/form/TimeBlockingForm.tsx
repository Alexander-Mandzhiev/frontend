import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/buttons'
import { Field } from '@/components/ui/fields/Field'
import SingleSelect from '@/components/ui/task-edit/SingleSelect'

import type { TypeTimeBlockFormState } from '@/types/time-block.types'

import useCreateTimeBlock from '../hooks/useCreateTimeBlock'
import useUpdateTimeBlock from '../hooks/useUpdateTimBlock'

import { COLORS } from './colors.data'
import styles from './page.module.scss'

export default function TimeBlockingForm() {
	const { register, control, watch, reset, handleSubmit } =
		useFormContext<TypeTimeBlockFormState>()

	const existsId = watch('id')

	const { updateTimeBlock } = useUpdateTimeBlock(existsId)
	const { createTimeBlock, isPending } = useCreateTimeBlock()

	const onSubmit: SubmitHandler<TypeTimeBlockFormState> = data => {
		const { color, id, ...rest } = data
		const dto = { ...rest, color: color || undefined }

		if (id) {
			updateTimeBlock({
				id,
				data: dto
			})
		} else {
			createTimeBlock(dto)
		}

		reset({
			color: COLORS[COLORS.length - 1],
			duration: 0,
			name: '',
			id: undefined,
			order: 1
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register('name', {
					required: true
				})}
				id='name'
				label='Введите название:'
				placeholder='Введите название:'
				extra='mb-4'
			/>

			<Field
				{...register('duration', {
					required: true,
					valueAsNumber: true
				})}
				id='duration'
				label='Введите продолжительность (min.):'
				placeholder='Введите продолжительность (min.):'
				isNumber
				extra='mb-4'
			/>

			<div>
				<span className={styles.color}>Цвет временного блока:</span>
				<Controller
					control={control}
					name='color'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={COLORS.map(item => ({
								value: item,
								label: item
							}))}
							onChange={onChange}
							value={value || COLORS[COLORS.length - 1]}
							isColorSelect
						/>
					)}
				/>
			</div>

			<Button
				type='submit'
				disabled={isPending}
				className={styles.margin_button}
			>
				{existsId ? 'Update' : 'Create'}
			</Button>
		</form>
	)
}
