import React from 'react'
import {Link} from 'react-router-dom';

function Cart() {
  return (
    <div>
      <h1 id='cartinfo'><strong>Your <b>NYKAA</b> Cart is empty.</strong></h1> 
      <Link id='cartlink' to="/"><strong>Shop today's deals</strong></Link> 
      <img width="80%" src='https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg'></img>

    </div>
  )
}

export default Cart