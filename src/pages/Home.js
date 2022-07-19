import React from 'react'
import HeroSection from '../components/HeroSection';
import ImporveSkills from '../components/ImporveSkills';
import Quote from '../components/Quote';
import ChefSection from '../components/ChefSection';

function Home() {
  return (
    <div>
        <HeroSection />
          <ImporveSkills />
          <Quote />
          <ChefSection />
    </div>
  )
}

export default Home