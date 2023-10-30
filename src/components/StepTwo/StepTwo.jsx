import style from './StepTwo.module.css'
import Option from './Option.jsx'
import { data } from './data.js'
import PropTypes from 'prop-types';

StepTwo.propTypes = {
  step: PropTypes.string.isRequired,
  shipOption: PropTypes.string.isRequired,
  setShipOption: PropTypes.func.isRequired,
};

export default function StepTwo({ shipOption, setShipOption }) {
  function handleClick(e) {
    setShipOption(e.target.value)
  }
  return (
    <div className={style.container}>
      <div className={style.title}>運送方式</div>
      <div className={style.checkbox}>
        {data.map(item =>
          <Option 
            isChecked={shipOption === item.id } 
            key={item.id} 
            value={item.id} 
            handleClick={handleClick} 
            method={item.method} 
            duration={item.duration} 
            cost={item.cost}
          />
        )}
      </div>
    </div>
  )
}