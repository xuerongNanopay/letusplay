'use client'

import classNames from 'classnames'

import { XMarkIcon } from '@heroicons/react/24/outline'

const Drawer = ({collapsed, setCollapsed}) => {
  return (
    <>
      <div className={classNames({
        'fixed h-screen w-screen z-20 bg-zinc-400': true,
        'hidden': !!collapsed,
      })}/>

      <div
        className={classNames({
          'lg:hidden fixed top-0 left-0 z-40 h-screen w-2/3 md:w-80': true,
          'transition-transform': true,
          '-translate-x-full': !!collapsed,
          'bg-zinc-50': true
        })}
      >

        <header className="flex justify-between h-16 w-full p-4 border-b-4">
          <span>icon</span>
          <button onClick={_ => setCollapsed(true)}>
            <XMarkIcon className="w-7 h-7"/>
          </button>
        </header>
      </div>
    </>
  )
}

export default Drawer