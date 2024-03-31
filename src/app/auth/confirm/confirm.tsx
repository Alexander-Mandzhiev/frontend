'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import useConfirm from '@/hooks/useConfirm'

export default function Confirm({ token }: { token: string }) {
	const { data, isSuccess } = useConfirm(token)
	const { push } = useRouter()
	useEffect(() => {
		if (isSuccess) {
			toast.success('Учетная запись успешно подтверждена!')
			push(DASHBOARD_PAGES.HOME)
		}
	}, [data])
	return <></>
}
