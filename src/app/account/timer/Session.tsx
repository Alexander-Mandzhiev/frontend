'use client'

import { Loader, Pause, Play, RefreshCcw } from 'lucide-react'

import { Button } from '@/components/ui/buttons'

import useSettings from '@/hooks/useSettings'

import formatTime from './format-time'
import useCreateSession from './hooks/useCreateSession'
import useDeleteSession from './hooks/useDeleteSession'
import { useTimer } from './hooks/useTimer'
import { useTimerActions } from './hooks/useTimerActions'
import useTodaySession from './hooks/useTodaySession'
import styles from './page.module.scss'
import SessionRounds from './rounds/SessionRounds'

export default function Session() {
	const { data: settings } = useSettings()

	const timerState = useTimer()
	const { isLoading, sessionsResponse, workInterval } =
		useTodaySession(timerState)

	const rounds = sessionsResponse?.data.rounds
	const actions = useTimerActions({ ...timerState, rounds })

	const { isPending, mutate } = useCreateSession()
	const { deleteSession, isDeletePending } = useDeleteSession(() =>
		timerState.setSecondsLeft(workInterval * 60)
	)

	return (
		<div className={styles.container}>
			{!isLoading && (
				<div className={styles.container_forat_timer}>
					{formatTime(timerState.secondsLeft)}
				</div>
			)}
			{isLoading ? (
				<Loader />
			) : sessionsResponse?.data ? (
				<>
					<SessionRounds
						rounds={rounds}
						nextRoundHandler={actions.nextRoundHandler}
						prevRoundHandler={actions.prevRoundHandler}
						activeRound={timerState.activeRound}
					/>
					<button
						className={styles.container_button}
						onClick={
							timerState.isRunning ? actions.pauseHandler : actions.playHandler
						}
						disabled={actions.isUpdateRoundPending}
					>
						{timerState.isRunning ? <Pause size={30} /> : <Play size={30} />}
					</button>
					<button
						onClick={() => {
							timerState.setIsRunning(false)
							deleteSession(sessionsResponse.data.id)
						}}
						className='absolute top-0 right-0 opacity-40 hover:opacity-90 transition-opacity'
						disabled={isDeletePending}
					>
						<RefreshCcw size={19} />
					</button>
				</>
			) : (
				<Button
					onClick={() => mutate()}
					className='mt-1'
					disabled={isPending}
				>
					Создать сессию
				</Button>
			)}
		</div>
	)
}
