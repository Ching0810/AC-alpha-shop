import Form from './components/Form/Form.jsx'
import Cart from './components/Cart/Cart.jsx'
import './App.css'

function App() {
  return (
    <div className='container'>
      <div className='formContainer'>
        <Form />
      </div>
      <div className='cartContainer'>
        <div className='plain'></div>
        <Cart />
      </div>
    </div>
  )
}

export default App
