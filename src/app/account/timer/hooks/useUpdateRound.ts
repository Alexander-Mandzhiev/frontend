import { useMutation, useQueryClient } from '@tanstack/react-query'
import { sessionService } from '@/services/session.service'
import type { TypeRoundState } from '@/types/session.types';

export default function useUpdateRound() {
    const queryClient = useQueryClient()

    const { mutate: updateRound, isPending: isUpdateRoundPending } = useMutation({
        mutationKey: ['update round'],
        mutationFn: ({ id, data }: { id: string; data: TypeRoundState }) =>
            sessionService.updateRound(id, data),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['get today session'] })
        }
    })

    return { updateRound, isUpdateRoundPending }
}
