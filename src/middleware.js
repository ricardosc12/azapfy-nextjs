import { NextResponse } from 'next/server'
import { routes } from '@/routes'

export function middleware(request) {
	if(!routes.includes(request.nextUrl.pathname)) {
		const url = request.nextUrl.clone()
		url.pathname = '/login'
		return NextResponse.redirect(url)
	}
}



export const config = {
	matcher: [
	  `/((?!api|_next/static|_next/image|favicon.ico).*)`,
	],
  }