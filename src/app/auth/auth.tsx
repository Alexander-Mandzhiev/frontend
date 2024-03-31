'use client'

import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/buttons'
import { Field } from '@/components/ui/fields/Field'

import type { IAuthForm } from '@/types/auth.types'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import styles from './page.module.scss'
import { authService } from '@/services/auth.service'

export default function Auth() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [isSignInForm, setIsSignInForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isSignInForm ? 'signin' : 'signup', data),
		onSuccess() {
			toast.success(
				isSignInForm
					? 'Вы успешно авторизовались!'
					: 'Осталось подтвердить вашу эл. почту, загляните на свой почтовый ящик!'
			)
			reset()
			push(DASHBOARD_PAGES.HOME)
		},
		onError(error: AxiosError<any>) {
			toast.warning(`${error.response?.data.message}`)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}
	return (
		<div className={styles.content}>
			<form
				className={styles.content_form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<Heading title='Авторизация' />
				<Field
					{...register('email', { required: 'Введите email' })}
					id='email'
					label='Email:'
					placeholder='Введите email:'
					type='email'
					extra='mb-4'
				/>
				<Field
					{...register('password', { required: 'Введите пароль' })}
					id='password'
					label='Пароль:'
					placeholder='Введите пароль:'
					type='password'
					extra='mb-6'
				/>

				<div className={styles.content_form_buttons}>
					<Button onClick={() => setIsSignInForm(true)}>Авторизация</Button>
					<Button onClick={() => setIsSignInForm(false)}>Регистрация</Button>
				</div>
			</form>
		</div>
	)
}
