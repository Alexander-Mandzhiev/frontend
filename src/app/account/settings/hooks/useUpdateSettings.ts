import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { TypeSettingsForm } from '@/types/auth.types'

import { settingsService } from '@/services/settings.service'

export default function useUpdateSettings() {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationKey: ['update settings'],
        mutationFn: (data: TypeSettingsForm) => settingsService.updateSettings(data),
        onSuccess() {
            toast.success('Настройки сессии успешно обновлены!')
            queryClient.invalidateQueries({ queryKey: ['settings'] })
        }
    })

    return { mutate, isPending }
}
