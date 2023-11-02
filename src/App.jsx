import Form from './components/Form/Form.jsx'
import Cart from './components/Cart/Cart.jsx'
import './App.css'
import { FormExportContext } from './FormExportContext.js'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({})
  return (
    <div className='container'>
      <FormExportContext.Provider value={{formData, setFormData}}>
        <div className='formContainer'>
          <Form />
        </div>
        <div className='cartContainer'>
          <div className='plain'></div>
          <Cart />
        </div>
      </FormExportContext.Provider>
    </div>
  )
}

export default App
