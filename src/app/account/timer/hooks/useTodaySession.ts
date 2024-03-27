import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'


import useLoadSettings from './useLoadSettings'
import type { ITimerState } from '@/types/session.types'
import { sessionService } from '@/services/session.service'

export default function useTodaySession({
    setActiveRound,
    setSecondsLeft
}: ITimerState) {
    const { workInterval } = useLoadSettings()

    const {
        data: sessionsResponse,
        isLoading,
        isSuccess
    } = useQuery({
        queryKey: ['get today session'],
        queryFn: () => sessionService.getTodaySession()
    })

    const rounds = sessionsResponse?.data.rounds

    useEffect(() => {
        if (isSuccess && rounds) {
            const activeRound = rounds.find(round => !round.isCompleted)
            setActiveRound(activeRound)

            if (activeRound && activeRound?.totalSeconds !== 0) {
                setSecondsLeft(activeRound.totalSeconds)
            }
        }
    }, [isSuccess, rounds])

    return { sessionsResponse, isLoading, workInterval }
}
