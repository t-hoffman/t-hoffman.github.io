import React from 'react'
import NavBar from 'Components/NavBar'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <div className="content-inner">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
