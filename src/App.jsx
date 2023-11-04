import Form from './components/Form/Form.jsx'
import Cart from './components/Cart/Cart.jsx'
import './App.css'
import { FormExportContext } from './FormExportContext.js'
import { CartDataContext } from './FormExportContext.js'
import { useContext, useState } from 'react'

function App() {
  // by useState({}), set formData default value as a empty object, and defined set function as setFormData
  const [formData, setFormData] = useState({})
  const cartData = useContext(CartDataContext)
  return (
    <div className='container'>
      {/* any children who consume FormExportContext would get a object which contain formData and its set function */}
      <FormExportContext.Provider value={{formData, setFormData}}>
        <CartDataContext.Provider value={cartData}>
          <div className='formContainer'>
            <Form />
          </div>
          <div className='cartContainer'>
            <div className='plain'></div>
            <Cart />
          </div>
        </CartDataContext.Provider>
      </FormExportContext.Provider>
    </div>
  )
}

export default App
