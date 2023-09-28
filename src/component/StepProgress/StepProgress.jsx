import style from './StepProgress.module.css'
import rightArrow from '../../assets/icons/right-arrow.svg'
import leftArrow from '../../assets/icons/left-arrow.svg'

export function StepProgress () {
  return (
    <>
      <div className={style.container}>
        <div className={style.stepContainer}>
          <button className={style.buttonPrevious}>
            <img src={leftArrow} alt="" />
            上一步
          </button>
          <button className={style.buttonNext}>
            下一步
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </>
  )
}