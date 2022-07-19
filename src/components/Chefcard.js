import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"
function Chefcard({chefs}) {
    
    return (
        <div className='chef-card'>

            <img src={chefs.img} alt="" />
            <div className="chef-card-info">
          <h3 className="chef-card-name">{chefs.name}</h3>
          <p className="chef-recipe-count">Recipes: <b>{chefs.Recipe}</b></p>
          <p className="chef-cuisine">Cuisine: <b>{chefs.cuisine}</b></p>
        <p className="chef-icon">
        <FontAwesomeIcon icon={faFacebook}/>
        <FontAwesomeIcon icon={faTwitter}/>
        <FontAwesomeIcon icon={faInstagram}/>
        </p>
        </div>
        </div>
    )
}

export default Chefcard;