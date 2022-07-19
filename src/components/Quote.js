import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

function Quote() {
  return (
    <div className='section quote'>
        <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”</p>
        <p className="quote-author">-Anthony Bourdin</p>
    </div>
  )
}

export default Quote