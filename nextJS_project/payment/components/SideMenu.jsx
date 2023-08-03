import classNames from 'classnames'

const SideMenu = () => {
  return (
    <div className={classNames({
      'hidden lg:flex flex-col w-64': true,
      'sticky top-0': true,
      'h-screen': true,
      'border-2 border-red-400': true
    })}>
      <header className="flex-none">
        <i>header</i>
        <i>header</i>
      </header>
      <nav className=" overflow-y-auto flex-auto flex flex-col">
      { new Array(60).fill('aa').map((v, i) => <i key={i}>{v}</i>)}
      </nav>
      <footer className="flex-none">
        <i>footer</i>
        <i>footer</i>
      </footer>
    </div>
  )
}

export default SideMenu