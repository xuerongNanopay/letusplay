import classNames from 'classnames'

const Drawer = ({collapsed, setCollapsed}) => {

  return (
    <div
      // className="lg:hidden fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto  transition-transform bg-white w-60 border-2 border-gray-600"
      className={classNames({
        'lg:hidden fixed top-0 left-0 z-40 h-screen w-2/3 md:w-80': true,
        'transition-transform': true,
        '-translate-x-full': !!collapsed,
        'border-2 border-gray-600': true
      })}
    >
      <div
        className={classNames({
          
        })}
      >

      </div>
      <header className="h-16 w-full bg-slate-600">This is Header</header>
    </div>
  )
}

export default Drawer