import {
	ITimeBlockResponse,
	TypeTimeBlockFormState
} from '@/types/time-block.types'

import { instanceWithAuth } from '@/api/interceptors'

class TimeBlockService {
	private BASE_URL = 'user/time-block'

	async createTimeBlock(data: TypeTimeBlockFormState) {
		const response = await instanceWithAuth.post<ITimeBlockResponse[]>(
			this.BASE_URL,
			data
		)
		return response
	}
	async getTimeBlock() {
		const response = await instanceWithAuth.get<ITimeBlockResponse[]>(
			this.BASE_URL
		)
		return response
	}
	async updateOrderTimeBlock(ids: string[]) {
		const response = await instanceWithAuth.patch<ITimeBlockResponse[]>(
			`${this.BASE_URL}/update-order`,
			{ ids }
		)
		return response
	}
	async updateTimeBlock(id: string, data: TypeTimeBlockFormState) {
		const response = await instanceWithAuth.patch<ITimeBlockResponse[]>(
			`${this.BASE_URL}/${id}`,
			data
		)
		return response
	}
	async deleteTimeBlock(id: string) {
		const response = await instanceWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}
export const timeBlockService = new TimeBlockService()
