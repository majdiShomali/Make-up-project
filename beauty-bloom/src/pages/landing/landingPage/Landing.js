import React from 'react'
import Slider from './Slider'
import Discount from './Discount'
import "./landing.css"
import gift from '../landingPage/landing-img/gift.jpg'

import { useContext } from "react";
import { UserContext } from "../../Product/ProductContext";







const Landing = () => {
  const {signState,updatesignState } = useContext(UserContext);
  if(localStorage.userState != null){
    updatesignState(JSON.parse(localStorage.userState))
  }
  return (
    <div>
      <Slider/>
      <Discount/>

      <div className='GiftCardContainer'>

        <div className='GiftCardSection1'>
          <h3>Gift Cards</h3>
          <p>When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. You can choose phisican or electronic format of the gift card. Amount is also flexible</p>
           <button>Learn more</button>
        </div>

        <div className='GiftCardSection2'>
        <img src={gift} alt='gift'/>
        </div>


      </div>




    </div>
  )
}

export default Landing