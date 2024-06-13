export interface IAuthForm {
	email: string
	password: string
}

export interface IUser {
	id: number
	name?: string
	email: string
	roles: Array<any>
	age?: number
	value: any
    city?: string
    dateOfBirth?: string
    gender?: string
	hobbies?: string[]
}

export interface IMeets{
	id: number
	createdAt?: Date
	title?: string
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
