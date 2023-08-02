'use client'

import { useState } from "react"
import SideMenu from "./SideMenu"

const SideMenuWrapper = ({children, toggleSideBar}) => {
  return (
    <div className="flex">
      {/* drawer and side menu */}
      <SideMenu/>
      <div>
        {children}
      </div>
    </div>
  )
}

export default SideMenuWrapper