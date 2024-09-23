//enlazando paginas con react-router dom
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import ShoppingCartContext, { initializeLocalStorage, ShoppingCartProvider }  from '../../context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import './App.css'
import MenuOrder from '../../Components/MenuOrder'


const AppRoutes = () => {
  const context = useContext(ShoppingCartContext)
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)

  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = Object.keys(context.account).length === 0
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/jewelery', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: hasUserAnAccount && !isUserSignOut ? <MyAccount /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-order', element: hasUserAnAccount && !isUserSignOut ? <MyOrder /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-orders', element: hasUserAnAccount && !isUserSignOut ? <MyOrders /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-orders/last', element: hasUserAnAccount && !isUserSignOut ? <MyOrder /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-orders/:id', element: hasUserAnAccount && !isUserSignOut ? <MyOrder /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}
const App = () => {
  initializeLocalStorage()
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <MenuOrder />
      </BrowserRouter>
    </ShoppingCartProvider>


  )
}

export default App
