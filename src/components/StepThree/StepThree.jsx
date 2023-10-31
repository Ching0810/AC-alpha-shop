import style from './StepThree.module.css'
import { useState } from 'react';

export default function StepThree() {
  const [cardNumber, setCardNumber] = useState('');
  const handleCardNumberChange = (event) => {
    const formattedNumber = event.target.value
      .replace(/\s/g, '') // Remove existing spaces
      .replace(/(\d{4})/g, '$1 ') // Add space after every four digits
      .trim(); // Remove leading/trailing spaces
    setCardNumber(formattedNumber);
  };
  return (
    <div className={style.container}>
      <div className={style.title}>付款資訊</div>
      <div className={style.formContainer}>
        <div className={style.formRowContainer}>
          <label className={style.inputContainer}>
            <div>持卡人姓名</div>
            <input className={style.input} type='text' placeholder='John Doe' />
          </label>
        </div>
        <div className={style.formRowContainer}>
          <label className={style.inputContainer}>
            <div>卡號</div>
            <input className={style.input} type='text' placeholder='1111 2222 3333 4444' maxLength={19} value={cardNumber} onChange={handleCardNumberChange}/>
          </label>
        </div>
        <div className={`${style.formRowContainer} ${style.twoInput}`}>
            <label className={style.inputContainer}>
              <div>有效日期</div>
              <input className={style.input} type='date' />
            </label>
            <label className={style.inputContainer}>
              <div>CVC / CCV</div>
              <input className={style.input} type='text' placeholder='123' maxLength={3} />
            </label>
        </div>
      </div>
    </div>
  )
}