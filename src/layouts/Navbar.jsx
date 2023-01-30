import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Icon from "@pub/favicon.ico"
import { signOut } from '@/api/Auth'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
    { name: 'Dashboard', href: '/app/dashboard', current: false },
    { name: 'Information', href: '/app/info', current: true },
    { name: 'Pesquisa', href: '/app/pesquisa', current: false },
    { name: 'Store', href: '/app/store', current: false },
  
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '/login' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({children}) {

    const router = useRouter()

    const name = navigation.find(nav=>nav.href===router.pathname).name

    return (
        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                {children}
            </div>
        </main>
    )
}
