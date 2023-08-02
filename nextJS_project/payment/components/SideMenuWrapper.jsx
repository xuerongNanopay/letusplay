'use client'

import { useState } from "react"
import SideMenu from "./SideMenu"

const SideMenuWrapper = ({children, toggleSideBar}) => {
  return (
    <div>
      <SideMenu/>
      {children}
    </div>
  )
}

export default SideMenuWrapper