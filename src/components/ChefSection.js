import React from 'react'
import Chefcard from './Chefcard'

function ChefSection() {
    const chefs = [
        {
            name: "Juan Carlos",
            img: "images/chef's/Chef_1.jpg",
            Recipes: "10",
            cuisine: "Mexican",
        },
        {
            name: "Jhon Doe",
            img: "images/chef's/Chef_2.jpg",
            Recipes: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "images/chef's/Chef_3.jpg",
            Recipes: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "images/chef's/Chef_4.jpg",
            Recipes: "08",
            cuisine: "American",
        },
        {
            name: "Blake Lively",
            img: "images/chef's/Chef_5.jpg",
            Recipes: "09",
            cuisine: "French",
        },
        {
            name: "Ben Affleck",
            img: "images/chef's/Chef_6.jpg",
            Recipes: "04",
            cuisine: "Indian",
        }

    ]
    return (
        <div className='section Chef'>
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chef-container">
                {chefs.map((chefs, index) => (
                    <Chefcard key={chefs.name} chefs={chefs} />
                ))

                }
            </div>
        </div>
    )
}

export default ChefSection