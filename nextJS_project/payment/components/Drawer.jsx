import classNames from 'classnames'

const Drawer = ({collapsed, setCollapsed}) => {

  return (
    <div
      // className="lg:hidden fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto  transition-transform bg-white w-60 border-2 border-gray-600"
      className={classNames({
        'lg:hidden fixed top-0 left-0 z-40 h-screen w-60 p-4': true,
        'transition-transform': true,
        '-translate-x-full': !!collapsed,
        'border-2 border-gray-600': true
      })}
    >
      <header>This is Header</header>
    </div>
  )
}

export default Drawer