import { IAuthForm, IAuthResponse } from '@/types/auth.types'

import { instance } from '@/api/interceptors'

import { removeFromStorage, saveTokenStorage } from './auth-token.service'

class AuthService {
	async main(type: 'signin' | 'signup', data: IAuthForm) {
		const response = await instance.post<IAuthResponse>(`/auth/${type}`, data)
		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
		return response
	}
	async getNewTokens() {
		const response = await instance.post<IAuthResponse>('/auth/signin/refresh')
		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
		return response
	}
	async logout() {
		const response = await instance.post<boolean>('/auth/logout')
		if (response.data) removeFromStorage()
		return response
	}
}

export const authService = new AuthService()
