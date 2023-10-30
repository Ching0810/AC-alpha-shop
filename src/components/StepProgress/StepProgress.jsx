import style from './StepProgress.module.css'
import rightArrow from '../../assets/icons/right-arrow.svg'
import leftArrow from '../../assets/icons/left-arrow.svg'
import PropTypes from 'prop-types';

StepProgress.propTypes = {
  step: PropTypes.string.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onPrevClick: PropTypes.func.isRequired,
};

export default function StepProgress ({ step, onNextClick, onPrevClick }) {
  return (
    <div className={style.container}>
      <div className={style.stepContainer}>
        {step !== 'one' && (
          <button className={style.buttonPrevious} onClick={ onPrevClick } >
            <img src={leftArrow} alt="" />
            上一步
          </button>
        )}
        <button className={style.buttonNext} onClick={ onNextClick }>
          {!(step === 'three')?'下一步':'確認下單'}
          <img src={rightArrow} alt="" />
        </button>
      </div>
    </div>
  )
}