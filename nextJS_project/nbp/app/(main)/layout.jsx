'use client'

import { useState } from 'react'

import Nav from '@components/Nav'
import Drawer from '@components/Drawer'
import Content from '@components/Content'

export default function RootLayout({ children }) {
  const [ collapsed, setCollapsed ] = useState(true)

  return (
    <div className="main">
      <Nav collapsed={collapsed} setCollapsed={setCollapsed}/>
      <Drawer collapsed={collapsed} setCollapsed={setCollapsed}/>
      <main>
        <Content>
          {children}
        </Content>
      </main>
    </div>
  )
}
