import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: DevicePhoneMobileIcon,
  },
]

import useStore from '@/storage'
import React, { useEffect } from 'react'
import { getModules } from '@/utils/auth'
import CookieStorage from '@/utils/CookieStorage'

export default function Info() {

  	const { auth } = useStore(state=>state)

	useEffect(()=>{
		console.log(auth)
	},[auth])

	async function encrypt(e){
		// const text = document.getElementById('text').value

		// var encrypted = CryptoJS.AES.encrypt(text, "6c35aebeff1d62a35881af369772237b").toString();
		// var decrypted = CryptoJS.AES.decrypt(encrypted, "6c35aebeff1d62a35881af369772237b");

		// console.log("ENCODE: ",encrypted)

		// console.log("DECODE: ",decrypted.toString(CryptoJS.enc.Utf8))
		console.time("modules")
		CookieStorage.setModules(getModules(auth).toString())
		console.log(CookieStorage.getModules())
		console.timeEnd("modules")

	}
	

	return (
		<div className="bg-white py-24 sm:py-32 lg:py-40">
		<input type="text" id='text'/>
		<button onClick={encrypt}>EnCrypt</button>
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="sm:text-center">
			<h2 className="text-lg font-semibold leading-8 text-indigo-600">Transactions</h2>
			<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to send money</p>
			<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
				Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
				accusamus quisquam.
			</p>
			</div>

			<div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
			<div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
				{features.map((feature) => (
				<div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
					<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
					<feature.icon className="h-8 w-8" aria-hidden="true" />
					</div>
					<div className="sm:min-w-0 sm:flex-1">
					<p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
					<p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
					</div>
				</div>
				))}
			</div>
			</div>
		</div>
		</div>
	)
}


Info.nav = true