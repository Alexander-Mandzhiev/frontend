import cn from 'clsx'
import { Kanban, ListTodo } from 'lucide-react'

import type { TypeView } from './TasksView'
import styles from './page.module.scss'

interface ISwitcherView {
	type: TypeView
	setType: (value: TypeView) => void
}

export default function SwitcherView({ setType, type }: ISwitcherView) {
	return (
		<div className={styles.switcher}>
			<button
				className={cn(styles.switcher_button, {
					'opacity-40': type === 'column'
				})}
				onClick={() => setType('list')}
			>
				<ListTodo />
			</button>
			<button
				className={cn(styles.switcher_button, {
					'opacity-40': type === 'list'
				})}
				onClick={() => setType('column')}
			>
				<Kanban />
			</button>
		</div>
	)
}
