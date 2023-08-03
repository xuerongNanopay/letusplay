import React from 'react'

const DashBoard = () => {
  return (
    <nav className=" overflow-y-auto flex-auto flex flex-col">
    { new Array(60).fill('DashBoard').map((v, i) => <i key={i}>{v}</i>)}
    </nav>
  )
}

export default DashBoard