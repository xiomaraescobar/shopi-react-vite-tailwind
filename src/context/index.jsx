// Hooks para contador de Shopping
import { createContext, useState, useEffect } from 'react'

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

  //get products
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState('')

  //get productos by title
  const [searchByTitle, setSearchByTitle] = useState('')

  useEffect(() => {
    //fetch('https://api.escuelajs.co/api/v1/products')
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))

  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }
  useEffect(() => { 
    if (searchByTitle) {setFilteredItems(filteredItemsByTitle(items, searchByTitle))}
  }, [items,searchByTitle])
  
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
      items,
      setItems, 
      searchByTitle,
      setSearchByTitle,
      filteredItems

    }}>
      {children}
    </ShoppingCartContext.Provider>

  )
}

export default ShoppingCartContext