import Form from './components/Form/Form.jsx'
import Cart from './components/Cart/Cart.jsx'
import ContextProvider from './ContextProvider.jsx'
import './App.css'

function App() {
  return (
    <div className='container'>
        <ContextProvider>
          <div className='formContainer'>
            <Form />
          </div>
          <div className='cartContainer'>
            <div className='plain'></div>
            <Cart />
          </div>
        </ContextProvider>
    </div>
  )
}

export default App