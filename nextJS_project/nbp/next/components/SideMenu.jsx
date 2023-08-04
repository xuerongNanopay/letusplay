import classNames from 'classnames'

const Menus = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    href:'/dashboard',
    icon: 'icon'
  },
  {
    id: 'Contacts',
    name: 'c',
    icon: 'icon'
  },
  {
    name: 'dashboard',
    icon: 'icon'
  },
  {
    name: 'dashboard',
    icon: 'icon'
  },
]

const SideMenu = ({}) => {
  return (
    <div className={classNames({
      'hidden lg:flex flex-col w-64': true,
      'sticky top-0': true,
      'h-screen': true,
      'border-2 border-red-400': true
    })}>
      <header className="flex-none flex align-center h-16 p-2 border-b-4">
        <i>Brand Icon</i>
      </header>
      <nav className=" overflow-y-auto flex-auto flex flex-col">
      { new Array(60).fill('aa').map((v, i) => <i key={i}>{v}</i>)}
      </nav>
      <footer className="flex-none flex flex-col border-t-4">
        <button>GO to my profile</button>
      </footer>
    </div>
  )
}

export default SideMenu