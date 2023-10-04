// import complete from '../../assets/icons/pg-complete.svg'
import style from './ProgressControl.module.css'

export default function ProgressControl () {
  return (
    <div className={style.container}>
      <div className={style.title}>結帳</div>
      <div className={style.progressContainer}>
        <div className={style.progressOne}>
          <div className={style.progressIcon}>
            <span>1</span>
            {/* <img className={style.img} src={complete} alt="" /> */}
          </div>
          <span>寄送地址</span>
        </div>
        <div className={style.progressBar}></div>
        <div className={style.progressTwo}>
          <div className={style.progressIconDefault}>
            <span>2</span>
          </div>
          <span className={style.default}>運送方式</span>
        </div>
        <div className={style.progressBar}></div>
        <div className={style.progressThree}>
          <div className={style.progressIconDefault}>
            <span>3</span>
          </div>
          <span className={style.default}>付款資訊</span>
        </div>
      </div>
    </div>
  )
}