import { useQuery } from '@tanstack/react-query'

import { settingsService } from '@/services/settings.service'

export default function useSettings() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['settings'],
		queryFn: async () => settingsService.getSettings()
	})

	return { data, isLoading, isSuccess }
}
