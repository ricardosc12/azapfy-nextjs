import { NextResponse } from 'next/server'
import { routes } from '@/routes'
import CryptoJS from 'crypto-js'

export async function middleware(request) {
	let logged = request.cookies.get('_logged')?.value
	let modules = CryptoJS.AES.decrypt(request.cookies.get('_module')?.value, "6c35aebeff1d62a35881af369772237b").toString(CryptoJS.enc.Utf8).split(',')
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