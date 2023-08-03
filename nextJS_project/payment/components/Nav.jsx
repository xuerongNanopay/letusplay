'use client'

import { Bars3Icon } from "@heroicons/react/24/outline";

const Nav = ({setCollapsed}) => {

  return (
    <nav className="lg:hidden flex items-center h-16 px-1 py-2 border-2 border-red-900">
      <button
        className="w-10 h-10"
        onClick={_ => setCollapsed(false)}
      >
        <Bars3Icon/>
      </button>
    </nav>
  )
}

export default Nav