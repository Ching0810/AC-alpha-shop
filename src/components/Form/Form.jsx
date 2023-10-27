import ProgressControl from '../ProgressControl/ProgressControl.jsx'
import StepOne from '../StepOne/StepOne.jsx'
import StepTwo from '../StepTwo/StepTwo.jsx'
import StepProgress from '../StepProgress/StepProgress.jsx'

export default function Form () {
  return (
    <>
      <ProgressControl />
      <StepTwo />
      <StepProgress />
    </>
  )
}