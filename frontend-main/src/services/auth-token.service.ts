import Cookies from 'js-cookie'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

export enum EnumRoles {
	'USER_ROLES' = 'userRoles'
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		domain: process.env.CLIENT_DOMAIN,
		sameSite: 'strict',
		expires: 1
	})
}

export const saveRolesStorage = (userRoles: string) => {
	Cookies.set(EnumRoles.USER_ROLES, userRoles)
}

export const getRolesStorage = () => {
	const userRoles = Cookies.get(EnumRoles.USER_ROLES)
	return userRoles || null
}

export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN)
	Cookies.remove(EnumRoles.USER_ROLES)
}
