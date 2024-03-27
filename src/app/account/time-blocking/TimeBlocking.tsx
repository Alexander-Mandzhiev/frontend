'use client'

import { FormProvider, useForm } from 'react-hook-form'

import type { TypeTimeBlockFormState } from '@/types/time-block.types'

import TimeBlockingList from './TimeBlockingList'
import TimeBlockingForm from './form/TimeBlockingForm'
import styles from './page.module.scss'

export default function TimeBlocking() {
	const methods = useForm<TypeTimeBlockFormState>()

	return (
		<FormProvider {...methods}>
			<div className={styles.content}>
				<TimeBlockingList />
				<TimeBlockingForm />
			</div>
		</FormProvider>
	)
}
