import { createContext } from "react";

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

export const CartContext = createContext(data)