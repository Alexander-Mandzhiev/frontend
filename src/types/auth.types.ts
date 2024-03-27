import type { IBase } from './root.types'

export interface IAuthForm {
	email: string
	password: string
}

export interface IUser extends IBase {
	username?: string
	email: string
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }

export interface IUserSettings extends IBase {
	workInterval?: number
	breakInterval?: number
	intervalsCount?: number
}

export type TypeSettingsForm = Omit<IUserSettings, 'id'>

export interface IProfileResponse {
	user: IUser
	statistic: {
		label: string
		value: string
	}[]
}