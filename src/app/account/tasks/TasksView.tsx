'use client'

import debounce from 'lodash.debounce'
import { Loader } from 'lucide-react'
import { useState } from 'react'

import { SearchField } from '@/components/ui/fields/SearchField'

import useLocalStorage from '@/hooks/useLocalStorage'

import SwitcherView from './SwitcherView'
import BoardView from './board-view/BoardView'
import useTasks from './hooks/useTasks'
import ListView from './list-view/ListView'
import styles from './page.module.scss'

export type TypeView = 'list' | 'column'

export default function TasksView() {
	const [type, setType, isLoading] = useLocalStorage<TypeView>({
		key: 'view-type',
		defaultValue: 'list'
	})

	const [search, setSearch] = useState<string>('')
	const { items, setItems } = useTasks(search)

	const onChange = debounce((event: string) => {
		setSearch(event)
	}, 444)

	if (isLoading) return <Loader />

	return (
		<>
			<div className={styles.container}>
				<SwitcherView
					setType={setType}
					type={type}
				/>
				<SearchField
					placeholder='Искать ...'
					onChange={onChange}
				/>
			</div>
			{type === 'list' ? (
				<ListView
					items={items}
					setItems={setItems}
				/>
			) : (
				<BoardView
					items={items}
					setItems={setItems}
				/>
			)}
		</>
	)
}
