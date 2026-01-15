"use client"

import React from 'react'
import DarkMode from "@/components/DarkMode"
import InputArea from '@/components/InputArea';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link';
import { usePathname } from 'next/navigation';


type NavigaionMenuCompProps = {
  className: string
}

const NavigationMenuComp = ({ className }: NavigaionMenuCompProps) => {

  const param = usePathname()


  return (
    <header className={className}>
      <NavigationMenu  >

        <NavigationMenuList className='flex gap-4 ml-2.5'>
          <NavigationMenuItem className={(param === '/' ? 'border-b border-amber-500 dark:border-amber-50' : '')}>
            <Link href='/' >Ana sayfa</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className={param.startsWith('/calculate') ? 'border-b border-amber-500' : ''}>
            <Link href='/calculate'>Hesap Makinesi</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className={param.startsWith('/products') ? 'border-b border-amber-500' : ''}>
            <Link href='/products'>Ürünler</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className={param.startsWith('/contact') ? 'border-b border-amber-500' : ''}>
            <Link href='/contact'>İletişim</Link>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
      <InputArea />

      <div className='mr-2.5'>
        <DarkMode />
      </div>
    </header>
  )
}

export default NavigationMenuComp