import PropTypes from 'prop-types';
import style from './Cart.module.css'
import { useState, useContext } from 'react';
import { FormExportContext } from '../../FormExportContext';

CartItem.propTypes = {
  data: PropTypes.object.isRequired,
  plusImg: PropTypes.string.isRequired,
  minusImg: PropTypes.string.isRequired,
  setTotalCost: PropTypes.func.isRequired,
  calculateTotalCost: PropTypes.func.isRequired,
};

export default function CartItem ( { data, plusImg, minusImg, setTotalCost, calculateTotalCost } ) {
  const [count, setCount] = useState(0)
  // the { , } syntax is "object destructuring", therefore the variable name need to be exactly as same as definition from context provider
  const {formData, setFormData} = useContext(FormExportContext)
  function handleMinusClick() {
    if (count > 0) {
      setCount(count - 1)
      const newTotalCost = calculateTotalCost(count - 1, data)
      setTotalCost(prevTotalCost => ({ ...prevTotalCost, [data.id]: {
        name: data.name,
        quantity: count - 1,
        totalCost: newTotalCost
      }
      }))
      setFormData({
        ...formData,
        [data.id]: newTotalCost
      })
    }
  }

  function handlePlusClick() {
    setCount(count + 1)
    const newTotalCost = calculateTotalCost(count + 1, data)
    setTotalCost(prevTotalCost => ({ ...prevTotalCost, [data.id]: {
      name: data.name,
      quantity: count + 1,
      totalCost: newTotalCost
    }
    }))
    setFormData({
      ...formData,
      [data.id]: newTotalCost
    })
  }

  return (
    <div className={ style.cartItem } key={ data.id }>
      <img className={ style.productImg } src={ data.img }/>
      <div className={ style.itemInfo }>
        <h4 className={ style.name }>{ data.name }</h4>
        <p className={ style.price }>${ data.price }</p>
          <div className={ style.quantityControl }>
          <img src={minusImg} className={ style.minus } onClick={handleMinusClick}/>
          <div className={ style.quantity }>{ count }</div>
          <img src={plusImg} className={ style.plus } onClick={handlePlusClick}/>
        </div>
      </div>
    </div>
  )
}