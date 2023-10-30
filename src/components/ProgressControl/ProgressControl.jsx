import complete from '../../assets/icons/pg-complete.svg'
import style from './ProgressControl.module.css'
import React from 'react';
import PropTypes from 'prop-types';

ProgressControl.propTypes = {
  step: PropTypes.string.isRequired,
};

export default function ProgressControl({ step }) {
  const steps = [
    { number: 1, label: '寄送地址', isComplete: step !== 'one' },
    { number: 2, label: '運送方式', isComplete: step === 'three' },
    { number: 3, label: '付款資訊', isComplete: false },
  ];

  return (
    <div className={style.container}>
      <div className={style.title}>結帳</div>
      <div className={style.progressContainer}>
        {steps.map((stepData, index) => (
          <React.Fragment key={index}>
            <div className={style.progressStep}>
              <div className={`${stepData.isComplete? `${style.progressIcon}`:`${style.progressIcon} ${style.default}` }`}>
                {stepData.isComplete && <img src={complete} className={style.completeImg} />}
                <span className={`${stepData.isComplete?'':`${style.default}` }`}>{stepData.number}</span>
              </div>
              <span className={`${stepData.isComplete?'':`${style.default}` }`}>{stepData.label}</span>
            </div>
            {index < steps.length - 1 && <div className={`${stepData.isComplete? `${style.progressBar}`:`${style.progressBar} ${style.default}` }`} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}


// export default function ProgressControl ({ step }) {
//   if (step === 'one') {
//     return (
//       <div className={style.container}>
//         <div className={style.title}>結帳</div>
//         <div className={style.progressContainer}>
//           <div className={style.progressOne}>
//             <div className={style.progressIcon}>
//               <span>1</span>
//             </div>
//             <span>寄送地址</span>
//           </div>
//           <div className={`${style.progressBar} ${style.default}`}></div>
//           <div className={style.progressTwo}>
//             <div className={`${style.progressIcon} ${style.default}`}>
//               <span>2</span>
//             </div>
//             <span>運送方式</span>
//           </div>
//           <div className={`${style.progressBar} ${style.default}`}></div>
//           <div className={style.progressThree}>
//             <div className={`${style.progressIcon} ${style.default}`}>
//               <span>3</span>
//             </div>
//             <span>付款資訊</span>
//           </div>
//         </div>
//       </div>
//     )
//   } else if (step === 'two') {
//     return (
//       <div className={style.container}>
//         <div className={style.title}>結帳</div>
//         <div className={style.progressContainer}>
//           <div className={style.progressOne}>
//             <div className={style.progressIcon}>
//               <img src='/src/assets/icons/pg-complete.svg' className={style.completeImg}></img>
//               <span>1</span>
//             </div>
//             <span>寄送地址</span>
//           </div>
//           <div className={style.progressBar}></div>
//           <div className={style.progressTwo}>
//             <div className={`${style.progressIcon} ${style.finished}`}>
//               <span>2</span>
//             </div>
//             <span>運送方式</span>
//           </div>
//           <div className={`${style.progressBar} ${style.default}`}></div>
//           <div className={style.progressThree}>
//             <div className={`${style.progressIcon} ${style.default}`}>
//               <span>3</span>
//             </div>
//             <span>付款資訊</span>
//           </div>
//         </div>
//       </div>
//     )
//   } else if (step === 'three') {
//     return (
//       <div className={style.container}>
//         <div className={style.title}>結帳</div>
//         <div className={style.progressContainer}>
//           <div className={style.progressOne}>
//             <div className={style.progressIcon}>
//               <img src='/src/assets/icons/pg-complete.svg' className={style.completeImg}></img>
//               <span>1</span>
//             </div>
//             <span>寄送地址</span>
//           </div>
//           <div className={style.progressBar}></div>
//           <div className={style.progressTwo}>
//             <div className={style.progressIcon}>
//               <img src='/src/assets/icons/pg-complete.svg' className={style.completeImg}></img>
//               <span>2</span>
//             </div>
//             <span>運送方式</span>
//           </div>
//           <div className={style.progressBar}></div>
//           <div className={style.progressThree}>
//             <div className={style.progressIcon}>
//               <span>3</span>
//             </div>
//             <span>付款資訊</span>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }