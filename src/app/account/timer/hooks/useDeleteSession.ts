import { sessionService } from '@/services/session.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'


export default function useDeleteSession(onDeleteSuccess: () => void) {
    const queryClient = useQueryClient()

    const { mutate: deleteSession, isPending: isDeletePending } = useMutation({
        mutationKey: ['delete session'],
        mutationFn: (id: string) => sessionService.removeSession(id),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['get today session']
            })
            onDeleteSuccess()
        }
    })

    return { deleteSession, isDeletePending }
}
