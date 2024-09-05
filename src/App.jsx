// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from "../Nav"
import Hero from "../Hero"
import Card from "../Card"
import Data from "../Data"

function App() {
 const cards =  Data.map(item =>{
  return(
    <Card 
      key = {item.id}
      img = {item.coverImg}
      rating = {item.stats.rating}
      reviewCount = {item.stats.reviewCount}
      location = {item.location}
      title = {item.title}
      price = {item.price}
      openspots = {item.openSpots}
    />
  )
 })

  return (
    <>
      <div className='mainContaner'>
        <Nav/>
        <Hero/>
        <section>
          {cards}
        </section>
      </div>
    </>
  )
}

export default App
