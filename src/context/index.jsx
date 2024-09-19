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


// checkoutSideMenu . open/ close
const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
const openMenuOrder = () => setIsCheckoutSideMenuOpen(true)
const closeMenuOrder = () => setIsCheckoutSideMenuOpen(false)


  // Product Detail . Show Product
  const [productToShow, setProductToShow] = useState({})

  //shopping cart .add products to cart
  const [cartProducts, setCartProducts] = useState([])

  //shopping cart . order
  const [order, setOrder] = useState([])

  return (
    <ShoppingCartContext.Provider value = {{
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
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openMenuOrder,
      closeMenuOrder,
      order,
      setOrder,

    }}>
      {children}
    </ShoppingCartContext.Provider>

  )
}

export default ShoppingCartContext