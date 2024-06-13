import { NextRequest, NextResponse } from 'next/server'

import { DASHBOARD_PAGES } from './config/pages-url.config'
import { EnumRoles, EnumTokens } from './services/auth-token.service'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value
	const userRoles = cookies.get(EnumRoles.USER_ROLES)?.value

	const isAdmin = userRoles?.includes('ADMIN')
	 

	if (request.nextUrl.pathname.startsWith("/lk/admin")
	&& !isAdmin) {
	return NextResponse.rewrite(
			new URL("/not-found", request.url)
		)
	}	


	const isAuthPage = url.includes('/auth')

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL('/', url))
	} //куда редиректить после входа

	if (isAuthPage) {
		return NextResponse.next()
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL('/auth', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/', '/lk/:path*', '/auth/:path', '/admin']
} //описываем какие пути публичные а какие закрытые
