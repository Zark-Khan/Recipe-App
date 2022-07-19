import React from 'react'
import { useState } from 'react';
import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom';
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    {
      title: "Home",
      path: "/",
      icon: faHome
    },
    {
      title: "Recipes",
      path: "/recipes",
      icon: faList

    },
    {
      title: "Settings",
      path: "/settings",
      icon: faCog
    }
  ]
  function closeSidebar(){
    setShowSidebar(false)
  }
  const location = useLocation()
  return (
    <>
    <div className='navbar container'>
        <Link to={"/"} className='logo'>F<span>oo</span>diesHub</Link>
        <div className='nav-links'>
          {links.map(links => (
              <Link className={location.pathname === links.path ? "active": ""}  to = {links.path} key={links.title}>{links.title}</Link>

          ))}


        </div>
        <div onClick={() => setShowSidebar(true) } className= {showSidebar ? "hmburger active" : "hmburger"}>
            <div className='bar'> </div>
            <div className='bar'> </div>
            <div className='bar'> </div>

           
        </div>

    </div>
    {showSidebar && <Sidebar close={closeSidebar} links= {links} />}
    
    </>
  )
}

export default Navbar;
