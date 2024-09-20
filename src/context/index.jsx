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
  const [filteredItems, setFiltertedItems] = useState('')

  //get productos by title
  const [searchByTitle, setSearchByTitle] = useState('')

  // Get Products search category
  const [searchByCategory, setSearchByCategory] = useState('')

  useEffect(() => {
    //fetch('https://api.escuelajs.co/api/v1/products')
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))

  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()) ||
                        item.category.toLowerCase().includes(searchByTitle.toLowerCase())
    )
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()) 
    )
  }
  const filterBy = (searchType,items, searchByTitle ,searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle) 
    }
    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory) 
    }
    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) { setFiltertedItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory)) }
    if (searchByTitle && !searchByCategory) { setFiltertedItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory)) }
    if (searchByCategory && !searchByTitle) { setFiltertedItems(filterBy('BY_CATEGORY' ,items, searchByTitle ,searchByCategory)) }
    if (!searchByCategory && !searchByTitle) { setFiltertedItems(filterBy(null ,items, searchByTitle ,searchByCategory)) }
    }, [items, searchByTitle, searchByCategory])

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
      filteredItems,
      setSearchByCategory

    }}>
      {children}
    </ShoppingCartContext.Provider>

  )
}

export default ShoppingCartContext