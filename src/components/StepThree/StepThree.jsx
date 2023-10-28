import style from './StepThree.module.css'

export default function StepThree() {
  return (
    <div className={style.container}>
      <div className={style.title}>付款資訊</div>
      <div className={style.formContainer}>
        <div className={style.formRowContainer}>
          <label className={style.inputContainer}>
            <div>持卡人姓名</div>
            <input className={style.input} type='text' placeholder='John Doe'></input>
          </label>
        </div>
        <div className={style.formRowContainer}>
          <label className={style.inputContainer}>
            <div>卡號</div>
            <input className={style.input} type='text' placeholder='1111 2222 3333 4444' maxLength={16}></input>
          </label>
        </div>
        <div className={`${style.formRowContainer} ${style.twoInput}`}>
            <label className={style.inputContainer}>
              <div>有效日期</div>
              <input className={style.input} type='date'></input>
            </label>
            <label className={style.inputContainer}>
              <div>CVC / CCV</div>
              <input className={style.input} type='text' placeholder='123' maxLength={3}></input>
            </label>
        </div>
      </div>
    </div>
  )
}