import React from 'react'
import CustomImg from './CustomImg'

function RecipesCard({recipe}) {
  return (
    <div className='recipe-card'>
        <CustomImg src={recipe.image} pt="60%"/>
        <div className="recipe-card-info">
        <img src={recipe.authorImg} alt="" className="author-img" />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <a href="#!" className='view-btn'>View Recipe</a>
        </div>
    </div>
  )
}

export default RecipesCard