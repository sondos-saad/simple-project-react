import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
      <>
    <div className="cards">
        <h1>Check out these EPLC Destinations!</h1>
        <div className="cards__container">
           <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src="/image/img-9.jpeg"
                        text="Explore the hidden waterfall deep
                        inside the Amazon Jungle"
                        label="Adventure"
                        path='/services'
                        />
                        <CardItem 
                        src="/image/img-2.jpeg"
                        text="Travel through the Islands Bali in 
                        a Private Cruise"
                        label="Luxury"
                        path='/services'
                        />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src="/image/img-3.jpeg"
                        text="Explore the hidden waterfall deep
                        inside the Amazon Jungle"
                        label="Adventure"
                        path='/services'
                        />
                        <CardItem 
                        src="/image/img-4.jpeg"
                        text="Travel through the Islands Bali in 
                        a Private Cruise"
                        label="Luxury"
                        path='/sign-up'
                        />
                        <CardItem 
                        src="/image/img-8.jpeg"
                        text="Travel through the Islands Bali in 
                        a Private Cruise"
                        label="Luxury"
                        path='/products'
                        />
                </ul>
           </div> 
        </div>
      
    </div>
    </>
  )
}

export default Cards
