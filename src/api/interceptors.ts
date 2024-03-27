import axios, { CreateAxiosDefaults } from 'axios'

import { baseURL } from '@/constants/URLs'

import { errorCatch } from './error'
import { getAccessToken, removeFromStorage } from '@/services/auth-token.service'
import { authService } from '@/services/auth.service'

const options: CreateAxiosDefaults = {
	baseURL: `${baseURL}/`,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

const instance = axios.create(options)

const instanceWithAuth = axios.create(options)
instanceWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()
	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`
	return config
})

instanceWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config
		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'Срок действия jwt ключа истек' ||
				errorCatch(error) === 'jwt ключ должен быть предоставлен') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return instanceWithAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'Срок действия jwt ключа истек') removeFromStorage()
			}
		}

		throw error
	}
)

export { instance, instanceWithAuth }
