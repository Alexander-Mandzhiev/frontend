import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { TypeUserForm } from '@/types/auth.types'

import { userService } from '@/services/user.service'

export default function useUpdateUser() {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationKey: ['update profile'],
        mutationFn: (data: TypeUserForm) => userService.update(data),
        onSuccess() {
            toast.success('Профиль пользователя успешно обновлен!')
            queryClient.invalidateQueries({ queryKey: ['profile'] })
        }
    })

    return { mutate, isPending }
}
