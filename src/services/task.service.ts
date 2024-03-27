import { ITaskResponse, TypeTaskFormState } from '@/types/task.types'

import { instanceWithAuth } from '@/api/interceptors'

class TaskService {
	private BASE_URL = 'user/task'

	async createTask(data: TypeTaskFormState) {
		const response = await instanceWithAuth.post<ITaskResponse>(
			this.BASE_URL,
			data
		)
		return response
	}

	async getTask(search: string) {
		const response = await instanceWithAuth.get<ITaskResponse[]>(this.BASE_URL, { params: { search } })
		return response
	}

	async updateTask(id: string, data: TypeTaskFormState) {
		const response = await instanceWithAuth.patch<ITaskResponse>(
			`${this.BASE_URL}/${id}`,
			data
		)
		return response
	}

	async deleteTask(id: string) {
		const response = await instanceWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}
export const taskService = new TaskService()
