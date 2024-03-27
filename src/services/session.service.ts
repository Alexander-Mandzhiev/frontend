import {
	IRoundSessionResponse,
	ISessionResponse,
	TypeRoundState,
	TypeSessionState
} from '@/types/session.types'

import { instanceWithAuth } from '@/api/interceptors'

class SessionService {
	private BASE_URL = 'user/session'

	async createSession() {
		const response = await instanceWithAuth.post<ISessionResponse>(
			this.BASE_URL
		)
		return response
	}
	async getTodaySession() {
		const response = await instanceWithAuth.get<ISessionResponse>(
			`${this.BASE_URL}/today`
		)
		return response
	}
	async updateSession(id: string, data: TypeSessionState) {
		const response = await instanceWithAuth.patch<ISessionResponse>(
			`${this.BASE_URL}/${id}`,
			data
		)
		return response
	}
	async removeSession(id: string) {
		const response = await instanceWithAuth.delete<ISessionResponse>(
			`${this.BASE_URL}/${id}`
		)
		return response
	}
	async updateRound(id: string, data: TypeRoundState) {
		const response = await instanceWithAuth.patch<IRoundSessionResponse>(
			`${this.BASE_URL}/round/${id}`,
			data
		)
		return response
	}
}

export const sessionService = new SessionService()
