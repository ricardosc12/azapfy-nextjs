import Link from 'next/link'
import { routes } from '@/routes'
import React from 'react'

const Nav=()=>{

    return (
        <div>
            {Object.entries(routes).map(([url,{title}])=>{
                return <p key={url}><Link href={url}>{title}</Link></p>
            })}
        </div>
    )
}

export default function Layout({children}) {

    return (
        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				<Nav/>
                {children}
            </div>
        </main>
    )

}
