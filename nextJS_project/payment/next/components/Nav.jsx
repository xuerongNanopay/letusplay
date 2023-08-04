import classNames from "classnames";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Nav = ({setCollapsed}) => {

  return (
    <nav className={classNames({
      'lg:hidden sticky top-0 flex': true,
      'h-16 px-1 py-2': true,
      'bg-white': true,
      'border-2 border-red-900': true
    })}
    >
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