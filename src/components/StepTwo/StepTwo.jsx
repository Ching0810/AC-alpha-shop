import style from './StepTwo.module.css'
import Option from './Option.jsx'
import { data } from './data.js'
import { useState } from 'react'

export default function StepTwo() {
  const [isChecked, setIsChecked] = useState('1')
  function handleClick(e) {
    setIsChecked(e.target.value)
  }
  return (
    <div className={style.container}>
      <div className={style.title}>運送方式</div>
      <div className={style.checkbox}>
        {data.map(item =>
          <Option isChecked={isChecked} key={item.id} value={item.id} handleClick={handleClick} method={item.method} duration={item.duration} cost={item.cost}/>
        )}
      </div>
    </div>
  )
}