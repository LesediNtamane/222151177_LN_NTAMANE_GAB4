import React,{useContext} from 'react';
import CartUpdate from '../context/CartUpdate';

const useCartContext = () => {
  return (
    useContext(CartUpdate)
  )
}

export default useCartContext;