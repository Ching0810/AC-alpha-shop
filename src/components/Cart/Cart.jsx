import style from './Cart.module.css'
import { data } from './data.js'
import CartItem from './CartItem.jsx'
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'

export default function Cart () {
  return (
    <div className={ style.container }>
      <h3 className={ style.title }>購物籃</h3>
      {data.map(data => 
        <CartItem key={ data.id } data={ data } plus={ plus } minus={ minus }/>
      )}
      <div className={ `${style.cartInfo} ${style.shipping}` }>
        <div>運費</div>
        <div>免費</div>
      </div>
      <div className={ style.cartInfo }>
        <div>小計</div>
        <div>$0</div>
      </div>
    </div>
  )
}