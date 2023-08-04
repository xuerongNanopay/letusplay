import SideMenu from "./SideMenu"

const Content = ({children}) => {
  return (
    <div className="flex">
      <SideMenu/>
      <div className=" flex-auto p-4">
        {children}
      </div>
    </div>
  )
}

export default Content