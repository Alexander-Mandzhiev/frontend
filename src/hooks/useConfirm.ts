import { useQuery } from '@tanstack/react-query'

import { authService } from '@/services/auth.service'

export default function useConfirm(token: string) {
    const { data, isSuccess } = useQuery({
        queryKey: ['confirm'],
        queryFn: async () => authService.confirm(token)
    })


    return { data, isSuccess }
}
