import { sessionService } from '@/services/session.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'


export default function useCreateSession() {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationKey: ['create new session'],
        mutationFn: () => sessionService.createSession(),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['get today session']
            })
        }
    })

    return { mutate, isPending }
}
