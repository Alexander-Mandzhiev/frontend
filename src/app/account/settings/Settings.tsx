import SettingsSession from './SettingsSession'
import UserSettings from './UserSettings'
import styles from './page.module.scss'

export default async function Settings() {
	return (
		<div className={styles.container}>
			<div className={styles.container_content}>
				<UserSettings />
				<SettingsSession />
			</div>
		</div>
	)
}
