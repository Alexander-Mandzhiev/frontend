import { useQuery } from '@tanstack/react-query'

import { taskService } from '@/services/task.service'
import { useEffect, useState } from 'react'
import type { ITaskResponse } from '@/types/task.types'

export default function useTasks(search: string) {

    const { data } = useQuery({
        queryKey: ['tasks', search],
        queryFn: () => taskService.getTask(search),
    })

    const [items, setItems] = useState<ITaskResponse[] | undefined>(data?.data)

    useEffect(() => {
        setItems(data?.data)
    }, [data?.data])

    return { items, setItems }
}
