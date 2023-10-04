import style from './Cart.module.css'
import { data } from './data.js'
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'

export default function Cart () {
  return (
    <div className={ style.container }>
      <h3 className={ style.title }>購物籃</h3>
      {data.map(data => 
        <div className={ style.cartItem } key={ data.id }>
          <img className={ style.productImg } src={ data.img }/>
          <div className={ style.itemInfo }>
            <h4 className={ style.name }>{ data.name }</h4>
            <p className={ style.price }>${ data.price }</p>
            <div className={ style.quantityControl }>
              <img src={minus} className={ style.minus } />
              <div className={ style.quantity }>{ data.quantity }</div>
              <img src={plus} className={ style.plus } />
            </div>
          </div>
        </div>
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