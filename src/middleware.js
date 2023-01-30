import { NextResponse } from 'next/server'
import { routes } from '@/routes'

export async function middleware(request) {
	let logged = request.cookies.get('_logged')?.value
	if(!routes.includes(request.nextUrl.pathname) || logged!=='1') {
		const url = request.nextUrl.clone()
		url.pathname = logged=='1'?'/app/dashboard':'/login'
		return NextResponse.redirect(url)
	}
	return NextResponse.next()
}



export const config = {
	matcher: [
	  `/((?!api|_next/static|_next/image|favicon.ico|login).*)`,
	],
}