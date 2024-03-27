import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import styles from './page.module.scss'
import { authService } from '@/services/auth.service'

export function LogoutButton({ isMobile }: { isMobile: boolean }) {
	const router = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth')
	})

	return (
		<button
			className={isMobile ? styles.mobile_menu : styles.menu}
			onClick={() => mutate()}
		>
			<LogOut size={24} />
			{isMobile ? <></> : <span className={styles.menu_text}>Выйти</span>}
		</button>
	)
}
