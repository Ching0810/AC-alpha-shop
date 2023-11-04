import { useState, useContext } from "react"
import { FormExportContext, CartDataContext } from "./FormExportContext.js"
import PropTypes from 'prop-types';

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export default function ContextProvider({ children }) {
  // by useState({}), set formData default value as a empty object, and defined set function as setFormData
  const [ formData, setFormData ] = useState({})
  const cartData = useContext(CartDataContext)
  return (
    // any children who consume FormExportContext would get a object which contain formData (empty when default) and its set function
    <FormExportContext.Provider value={{ formData, setFormData }}>
      <CartDataContext.Provider value={ cartData }>
        { children }
      </CartDataContext.Provider>
    </FormExportContext.Provider>
  )
}