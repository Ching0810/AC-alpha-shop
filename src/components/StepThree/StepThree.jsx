import { FormExportContext } from '../../FormExportContext.js'
import style from './StepThree.module.css'
import { useContext, useState } from 'react';

export default function StepThree() {
  const {formData, setFormData} = useContext(FormExportContext)
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [cvc, setCvc] = useState('')
  const handleCardChange = (event) => {
    const formattedNumber = event.target.value
    setCardNumber(formattedNumber);
    setFormData({
      ...formData,
      cardNumber: formattedNumber,
    })
  };
  const handleNameChange = (event) => {
    const formattedName = event.target.value
    setName(formattedName);
    setFormData({
      ...formData,
      name: formattedName,
    })
  };
  const handleDateChange = (event) => {
    const formattedDate = event.target.value
    setDate(formattedDate);
    setFormData({
      ...formData,
      date: formattedDate,
    })
  };
  const handleCvcChange = (event) => {
    const formattedCvc = event.target.value
    setCvc(formattedCvc);
    setFormData({
      ...formData,
      CVC: formattedCvc,
    })
  };
  return (
    <div className={style.container}>
      <div className={style.title}>付款資訊</div>
      <div className={style.formContainer}>
        <div className={style.formRowContainer}>
          <label className={style.inputContainer}>
            <div>持卡人姓名</div>
            <input className={style.input} type='text' placeholder='John Doe' value={name} onChange={handleNameChange}/>
          </label>
        </div>
        <div className={style.formRowContainer}>
          <label className={style.inputContainer}>
            <div>卡號</div>
            <input className={style.input} type='text' placeholder='1111 2222 3333 4444' maxLength={16} value={cardNumber} onChange={handleCardChange}/>
          </label>
        </div>
        <div className={`${style.formRowContainer} ${style.twoInput}`}>
            <label className={style.inputContainer}>
              <div>有效日期</div>
              <input className={style.input} type='date' value={date} onChange={handleDateChange}/>
            </label>
            <label className={style.inputContainer}>
              <div>CVC / CCV</div>
              <input className={style.input} type='text' placeholder='123' maxLength={3} value={cvc} onChange={handleCvcChange} />
            </label>
        </div>
      </div>
    </div>
  )
}