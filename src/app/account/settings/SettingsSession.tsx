'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/buttons'
import { Field } from '@/components/ui/fields/Field'

import { TypeSettingsForm } from '@/types/auth.types'

import styles from './page.module.scss'
import { useInitialDataSettings } from '@/app/account/settings/hooks/useInitialDataSettings'
import useUpdateSettings from '@/app/account/settings/hooks/useUpdateSettings'

export default function SettingsSession() {
	const { register, handleSubmit, reset } = useForm<TypeSettingsForm>({
		mode: 'onChange'
	})
	useInitialDataSettings(reset)
	const { mutate, isPending } = useUpdateSettings()
	const onSubmit: SubmitHandler<TypeSettingsForm> = data => {
		mutate(data)
		console.log(data)
	}
	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<h2 className={styles.heading}>Сессия</h2>
			<div className={styles.line} />
			<Field
				id='workInterval'
				label='Рабочий интервал: '
				placeholder='Введите рабочий интервал: '
				{...register('workInterval', {
					valueAsNumber: true
				})}
				extra='mb-4'
			/>
			<Field
				id='breakInterval'
				label='Перерыв: '
				placeholder='Введите интервал перерыва: '
				{...register('breakInterval', {
					valueAsNumber: true
				})}
				extra='mb-4'
			/>

			<Field
				id='intervalsCount'
				label='Количество раундов:'
				placeholder='Введите количество раундов: '
				type='number'
				{...register('intervalsCount', {
					valueAsNumber: true
				})}
				extra='mb-10'
			/>
			<Button
				type='submit'
				disabled={isPending}
			>
				Сохранить
			</Button>
		</form>
	)
}
