'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
// import Logo from '../../../public/company-logo.svg'
 import Logo from '../../../public/company-logo (2).svg'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {

  const navItems = data?.navItems || []

  const defaultNavItems = [
    { link: { label: 'Start', url: '#' } },
    { link: { label: 'Purchase', url: '#' } },
    { link: { label: 'PortFolio', url: '#' } },
    { link: { label: 'Contact', url: '#' } },

  ]

  const itemsToShow = navItems.length > 0 ? navItems : defaultNavItems

  return (

    <>

      <Image
        src={Logo}
        alt="Site Logo"
        width={80}
        height={80}
        className="object-contain  -ml-[900px]"
      />
      <nav className="flex gap-8 items-center">
        {/* <Link href="/" className="flex items-center gap-2  ">
        <Image
        src={ Logo}
          alt="Site Logo"
          width={40}
          height={40}
          className="object-contain"
        />
    
      </Link> */}
        <div className="flex gap-8 items-center">
          {itemsToShow.map(({ link }, i) => {
            return <CMSLink key={i} {...link} appearance="link" className="text-lg font-medium" />
          })}
          {/* <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link> */}
        </div>
      </nav>
    </>
  )
}
