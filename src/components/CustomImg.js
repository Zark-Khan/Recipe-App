import React from 'react'

function CustomImg({src, pt}) {
  
  return (
    <div className='custom-img' style={{paddingTop: pt}}>
      <img src={src} alt="Foodies hub" />
    </div>
  )
}

export default CustomImg