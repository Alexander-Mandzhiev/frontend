import type { IBase } from './root.types'

export enum EnumTaskPriority {
	low = 'Низкий',
	medium = 'Высокий',
	high = 'Средний'
}

export interface ITaskResponse extends IBase {
	name: string
	priority?: EnumTaskPriority
	isCompleted: boolean
}

export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updatedAt'>>