// Hooks para contador de Shopping
import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart . Increment Quantity
  const [count, setCount] = useState(0)
  
  // Modal . Open/Close
  const [openModal, setOpenModal] = useState(false);

  // Product Detail . Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  //const toggleProductDetail = () =>  setIsProductDetailOpen(!isProductDetailOpen)

  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Product Detail . Show Product
  const [productToShow, setProductToShow] = useState([])

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      //toggleProductDetail,
      openModal,
      setOpenModal,
      productToShow,
      setProductToShow,
      openProductDetail,
      closeProductDetail,

    }}>
      {children}
    </ShoppingCartContext.Provider>

  )
}

export default ShoppingCartContext