import { IProfileResponse, TypeUserForm } from '@/types/auth.types'

import { instanceWithAuth } from '@/api/interceptors'

class UserService {
	private BASE_URL = 'user/profile'

	async getProfile() {
		const response = await instanceWithAuth.get<IProfileResponse>(this.BASE_URL)
		return response.data
	}

	async update(data: TypeUserForm) {
		const response = await instanceWithAuth.patch(this.BASE_URL, data)
		return response.data
	}
}

export const userService = new UserService()