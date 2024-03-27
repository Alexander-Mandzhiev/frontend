'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/buttons'
import { Field } from '@/components/ui/fields/Field'

import { TypeUserForm } from '@/types/auth.types'

import styles from './page.module.scss'
import { useInitialData } from '@/app/account/settings/hooks/useInitialData'
import useUpdateUser from '@/app/account/settings/hooks/useUpdateUser'

export default function UserSettings() {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})
	useInitialData(reset)
	const { mutate, isPending } = useUpdateUser()
	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data
		mutate({
			...rest,
			password: password || undefined
		})
	}
	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<h2 className={styles.heading}>Пользователь</h2>
			<div className={styles.line} />
			<Field
				id='email'
				label='Email: '
				placeholder='Введите email: '
				type='email'
				{...register('email', {
					required: 'Email is required!'
				})}
				extra='mb-4'
			/>

			<Field
				id='username'
				label='Имя пользователя: '
				placeholder='Введите имя пользователя: '
				{...register('username')}
				extra='mb-4'
			/>

			<Field
				id='password'
				label='Пароль: '
				placeholder='Введите пароль: '
				type='password'
				{...register('password')}
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
