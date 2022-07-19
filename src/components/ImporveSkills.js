import React from 'react'

function ImporveSkills() {
    const list = [
        "Learn new recipes",
        "Experiment with food",
        "Write your own recipes",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]
    return (
        <div className='section improve-skills'>
            <div className='col img-left'>
            <img src="images/gallery/img_r10.jpg" alt="" />
               </div>

            <div className='col typography'>
                <h1 className='title'>Improve Your Culinary Skills</h1>    
                {
                    list.map(item => (
                        <p className='skill-item'>{item}</p>
                    ))
                }
                <button className="btn">SIGNUP NOW</button>
            </div>

            
        </div>
    )
}

export default ImporveSkills