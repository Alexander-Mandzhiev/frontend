import type { IBase } from './root.types'
import type { Dispatch, SetStateAction } from 'react'

export interface IRoundSessionResponse extends IBase {
	isCompleted?: boolean
	totalSeconds: number
}

export interface ISessionResponse extends IBase {
	isCompleted?: boolean
	rounds?: IRoundSessionResponse[]
}

export type TypeSessionState = Partial<
	Omit<ISessionResponse, 'id' | 'createdAt' | 'updatedAt'>
>

export type TypeRoundState = Partial<
	Omit<IRoundSessionResponse, 'id' | 'createdAt' | 'updatedAt'>
>

export interface ITimerState {
	isRunning: boolean
	secondsLeft: number
	activeRound: IRoundSessionResponse | undefined

	setIsRunning: Dispatch<SetStateAction<boolean>>
	setSecondsLeft: Dispatch<SetStateAction<number>>
	setActiveRound: Dispatch<SetStateAction<IRoundSessionResponse | undefined>>
}
