import { Loader as LoaderIcon } from 'lucide-react'

import styles from './page.module.scss'

const Loader = () => {
	return (
		<div className={styles.loader}>
			<LoaderIcon className={styles.loader_animation} />
		</div>
	)
}

export default Loader
