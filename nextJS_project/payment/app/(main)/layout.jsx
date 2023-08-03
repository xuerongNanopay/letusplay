'use client'

import { useState } from 'react'

import Nav from '@components/Nav'
import Drawer from '@components/Drawer'
import SideMenuWrapper from '@components/SideMenuWrapper'

export default function RootLayout({ children }) {
  const [ collapsed, setCollapsed ] = useState(false)

  return (
    <div className="main">
      <Nav collapsed={collapsed} setCollapsed={setCollapsed}/>
      <Drawer collapsed={collapsed} setCollapsed={setCollapsed}/>
      <main className="">
        <SideMenuWrapper>
          {children}
        </SideMenuWrapper>
      </main>
    </div>
  )
}
