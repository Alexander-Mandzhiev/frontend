import Header from './dashboard/header'
import Sidebar from './dashboard/sidebar'
import styles from './page.module.scss'

export default async function DashboardLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className={styles.sidebar}>
			<Sidebar />

			<main className={styles.sidebar_content}>
				<Header />
				{children}
			</main>
		</div>
	)
}
