import ProgressControl from '../ProgressControl/ProgressControl.jsx'
import StepOne from '../StepOne/StepOne.jsx'
import StepTwo from '../StepTwo/StepTwo.jsx'
import StepThree from '../StepThree/StepThree.jsx'
import StepProgress from '../StepProgress/StepProgress.jsx'
import { useContext, useState } from 'react'
import { FormExportContext } from '../../FormExportContext.js'

export default function Form () {
  const [ step, setStep ] = useState('one')
  const [ shipOption, setShipOption ] = useState('1')
  // const [ formData, setFormData ] = useState({})
  const {formData} = useContext(FormExportContext)

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

  function handleConfirmCLick() {
    let totalCost = (formData[1] || 0) + (formData[2] || 0);
    const exportData = {
      totalCost,
      ...formData
    };
    delete exportData[1];
    delete exportData[2];
    console.log(exportData);
  }

  const stepComponents = {
    'one': StepOne,
    'two': StepTwo,
    'three': StepThree
  }
  let StepComponent = stepComponents[step]

  return (
    <>
      {/* <FormExportContext.Provider value={{formData, setFormData}}> */}
        <ProgressControl step={step}/>
        <StepComponent shipOption={shipOption} setShipOption={setShipOption}/>
        <StepProgress step={step} onNextClick={ handleNextClick } onPrevClick={ handlePrevClick } onConfirmClick={ handleConfirmCLick }/>
      {/* </FormExportContext.Provider> */}
    </>
  )
}