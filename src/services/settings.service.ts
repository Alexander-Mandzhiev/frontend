import { IUserSettings, TypeSettingsForm } from '@/types/auth.types'

import { instanceWithAuth } from '@/api/interceptors'

class SettingsService {
	private BASE_URL = 'user/settings'

	async getSettings() {
		const response = await instanceWithAuth.get<IUserSettings>(this.BASE_URL)
		return response.data
	}

	async updateSettings(data: TypeSettingsForm) {
		const response = await instanceWithAuth.patch(this.BASE_URL, data)
		return response.data
	}
}

export const settingsService = new SettingsService()
