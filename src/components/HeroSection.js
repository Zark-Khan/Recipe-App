import React from 'react'
import CustomImg from './CustomImg'
function HeroSection() {
  const images = [
    "/images/gallery/img_r1.jpg",
    "/images/gallery/img_r2.jpg",
    "/images/gallery/img_r3.jpg",
    "/images/gallery/img_r4.jpg",
    "/images/gallery/img_r5.jpg",
    "/images/gallery/img_r6.jpg",
    "/images/gallery/img_r7.jpg",
    "/images/gallery/img_r8.jpg",
    "/images/gallery/img_r9.jpg"
]
  return (
    <div className='section hero'>
        <div className='col typography'>
            <h1 className='title'>What Are We About</h1>
            <p className="info">Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
            <button className="btn">Explore more</button>
        </div>

        <div className='col gallery'>
          {images.map((src, index) => (
            <CustomImg key={index} src={src} pt={"90%"}/>
          ))}
            
            
        </div>
    </div>
  )
}

export default HeroSection