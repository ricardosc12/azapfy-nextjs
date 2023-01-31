import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Icon from "@pub/favicon.ico"
import { signOut } from '@/api/Auth'
import { routes } from '@/routes'

export default function Navbar({children}) {

    const router = useRouter()

    return (
        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				<div>
					{Object.entries(routes).map(([url,{title}])=>{
						return <p><Link href={url}>{title}</Link></p>
					})}
				</div>
                {children}
            </div>
        </main>
    )
}
