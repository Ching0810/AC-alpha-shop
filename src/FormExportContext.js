import { createContext } from "react";

// context default value is null, and is assigned value inside Context.Provider
export const FormExportContext = createContext(null)

const data = 
[
  {
    id: '1',
    name: '破壞補丁修身牛仔褲',
    img: '/src/assets/icons/product1.svg',
    price: 3999,
    quantity: 2,
  },
  {
    id: '2',
    name: '刷色直筒牛仔褲',
    img: '/src/assets/icons/product2.svg',
    price: 1299,
    quantity: 1,
  },
]

// any consumer who require CartDataContext would get default value of data
export const CartDataContext = createContext(data)