import ProgressControl from '../ProgressControl/ProgressControl.jsx'
import StepOne from '../StepOne/StepOne.jsx'
import StepTwo from '../StepTwo/StepTwo.jsx'
import StepThree from '../StepThree/StepThree.jsx'
import StepProgress from '../StepProgress/StepProgress.jsx'
import { useState } from 'react'

export default function Form () {
  const [ step, setStep ] = useState('one')
  const [ shipOption, setShipOption ] = useState('1')

  function handlePrevClick() {
    if (step === 'two') {
      setStep('one')
    } else if (step === 'three') {
      setStep('two')
    }
  }

  function handleNextClick() {
    if (step === 'one') {
      setStep('two')
    } else if (step === 'two') {
      setStep('three')
    }
  }

  let StepComponent;
  if (step === 'one') {
    StepComponent = StepOne;
  } else if (step === 'two') {
    StepComponent = StepTwo;
  } else {
    StepComponent = StepThree;
  }

  return (
    <>
      <ProgressControl step={step}/>
      <StepComponent shipOption={shipOption} setShipOption={setShipOption}/>
      <StepProgress step={step} onNextClick={ handleNextClick } onPrevClick={ handlePrevClick } />
    </>
  )
}