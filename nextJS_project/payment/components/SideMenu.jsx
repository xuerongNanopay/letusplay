import classNames from 'classnames'

const SideMenu = () => {
  return (
    <div className={classNames({
      'hidden lg:flex flex-col w-64': true,
      'sticky top-0': true,
      'h-screen': true,
      'border-2 border-red-400': true
    })}>
      <header className="flex-none h-16 p-2 border-b-4">
        <i>header</i>
        <i>header</i>
      </header>
      <nav className=" overflow-y-auto flex-auto flex flex-col">
      { new Array(60).fill('aa').map((v, i) => <i key={i}>{v}</i>)}
      </nav>
      <footer className="flex-none border-t-4">
        <i>footer</i>
        <i>footer</i>
      </footer>
    </div>
  )
}

export default SideMenu