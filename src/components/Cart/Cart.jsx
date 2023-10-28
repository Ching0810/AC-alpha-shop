import style from './Cart.module.css'
import { data } from './data.js'
import CartItem from './CartItem.jsx'
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'
import { useState } from 'react'

export default function Cart () {
  const [totalCost, setTotalCost] = useState({})
  function calculateTotalCost(count, data) {
    const productCost = (count * data.price)
    return productCost
  }

  const totalCostSum = Object.values(totalCost).reduce((a, b) => a + b, 0)

  return (
    <div className={ style.container }>
      <h3 className={ style.title }>購物籃</h3>
      {data.map(data => 
        <CartItem key={ data.id } data={ data } plusImg={ plus } minusImg={ minus } setTotalCost={ setTotalCost } calculateTotalCost={calculateTotalCost}/>
      )}
      <div className={ `${style.cartInfo} ${style.shipping}` }>
        <div>運費</div>
        <div>免費</div>
      </div>
      <div className={ style.cartInfo }>
        <div>小計</div>
        <div>${totalCostSum}</div>
      </div>
    </div>
  )
}