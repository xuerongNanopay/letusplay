import SideMenu from "./SideMenu"

const Content = ({children}) => {
  return (
    <div className="flex">
      <SideMenu/>
      {children}
    </div>
  )
}

export default Content