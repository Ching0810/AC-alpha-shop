import style from './StepTwo.module.css'
import PropTypes from 'prop-types';

Option.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
};

export default function Option ({isChecked, handleClick, value, method, duration, cost}) {
  return (
    <label className={`${style.option} ${isChecked === value ? style.checked : ''}`}>
      <input type="radio" id='radio' value={value} checked={isChecked} onClick={handleClick}/>
      <div className={style.method}>
        <div className={style.methodName}>{method}</div>
        <div className={style.methodTime}>{duration}</div>
      </div>
      <div className={style.cost}>{cost}</div>
    </label>
  )
}