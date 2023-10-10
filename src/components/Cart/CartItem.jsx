import PropTypes from 'prop-types';
import style from './Cart.module.css'

CartItem.propTypes = {
  data: PropTypes.object.isRequired,
  plus: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired,
};

export default function CartItem ( { data, plus, minus } ) {
  return (
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
  )
}