import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeTaskFormState } from '@/types/task.types'
import { taskService } from '@/services/task.service'

export default function useUpdateTask(key?: string) {
    const queryClient = useQueryClient()

    const { mutate: updateTask } = useMutation({
        mutationKey: ['update task', key],
        mutationFn: ({ id, data }: { id: string, data: TypeTaskFormState }) => taskService.updateTask(id, data),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['tasks'] })
        }
    })

    return { updateTask }
}
