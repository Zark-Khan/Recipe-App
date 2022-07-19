import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation} from 'react-router-dom';

function Sidebar({links, close}) {
  const location = useLocation()
  return (
    <div className='sidebar' onClick={close}>
        {links.map(links => (
            <Link className={location.pathname === links.path ? "sidebar-links active": "sidebar-links"} to={links.path} key={links.title}>
                <FontAwesomeIcon icon = {links.icon}/>
                {links.title}
            </Link>
        ))}
    </div>
  )
}

export default Sidebar;