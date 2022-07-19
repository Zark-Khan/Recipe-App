import React from 'react'
import PrevieousSearches from '../components/PrevieousSearches'
import RecipesCard from '../components/RecipesCard'

function Recipes() {
  const recipes = [
    {
        title: "Chicken Pan Pizza",
        image: "/images/gallery/img_r1.jpg",
        authorImg: "/images/chef's/Chef_1.jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/images/gallery/img_r2.jpg",
        authorImg: "/images/chef's/Chef_2.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/images/gallery/img_r3.jpg",
        authorImg: "/images/chef's/Chef_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/images/gallery/img_r4.jpg",
        authorImg: "/images/chef's/Chef_4.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/images/gallery/img_r5.jpg",
        authorImg: "/images/chef's/Chef_5.jpg",
    },
    {
        title: "Chicken Pan Pizza",
        image: "/images/gallery/img_r6.jpg",
        authorImg: "/images/chef's/Chef_6.jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/images/gallery/img_r7.jpg",
        authorImg: "/images/chef's/Chef_4.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/images/gallery/img_r8.jpg",
        authorImg: "/images/chef's/Chef_2.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/images/gallery/img_r9.jpg",
        authorImg: "/images/chef's/Chef_3.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/images/gallery/img_r6.jpg",
        authorImg: "/images/chef's/Chef_5.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/images/gallery/img_r3.jpg",
        authorImg: "/images/chef's/Chef_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/images/gallery/img_r2.jpg",
        authorImg: "/images/chef's/Chef_2.jpg",
    }
].sort(() => Math.random() - 0.5)
   return (
    <div>
      <PrevieousSearches/>
      <div className='recipes-container'>
        {recipes.map((recipe, index) => (
          <RecipesCard key={index} recipe={recipe}/>
        ))}
        
      </div>
    </div>
  )

}

export default Recipes