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


const NavigationMenuComp = () => {


  const param = usePathname()


  return (
    <div className='flex flex-row sticky top-0'>

      <NavigationMenu>

        <NavigationMenuList>
          <NavigationMenuItem className={param === '/' ? 'border-b border-amber-500' : ''}>
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

      <DarkMode />

    </div>

  )
}

export default NavigationMenuComp