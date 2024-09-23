
import { useContext } from "react";
import ShoppingCartContext from '../../context'
import { NavLink } from "react-router-dom"
import ShoppingCart from '../ShoppingCart'


const Navbar = () => {
  const context = useContext(ShoppingCartContext);// aqui se lee el estado global
  const  activeStyle = 'underline underline-offset-4'

  //sign out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = context.signOut || parsedSignOut

  //account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(true)
  }

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
        <li className="text-black/60">
          {parsedAccount?.email}
        </li>
        <li>
          <NavLink to='/my-orders' className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            MyOrders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            MyAccount
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in' onClick={() => handleSignOut()} className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Sign Out
          </NavLink>
        </li>
      </>
      )
    } else {
      return (
        
         <li>
         <NavLink to="/sign-in" className={({ isActive }) =>
           isActive ? activeStyle : undefined} onClick={() => handleSignOut()}>
           Sign In
         </NavLink>
       </li>
      )
    }
  }
  return (
    <nav className="flex justify-between items-center fixed z-10  top-0 w-full py-5 px-8 text-lg font-light bg-white">
      <ul className="flex items-center gap-4">
        <li  className="font-semibold text-2xl">
          <NavLink 
            to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to='/' onClick={() => context.setSearchByCategory()} className={({ isActive })=> 
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to='/clothes' onClick={() => context.setSearchByCategory(`Men's`)} className={({ isActive })=> 
              isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/electronics' onClick={() => context.setSearchByCategory('electronics')} className={({ isActive })=> 
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/jewelery' onClick={() => context.setSearchByCategory('jewelery')} className={({ isActive })=> 
              isActive ? activeStyle : undefined
            }>
            jewelery
          </NavLink>
        </li>
        <li>
          <NavLink to='/toys' onClick={() => context.setSearchByCategory('toys')} className={({ isActive })=> 
              isActive ? activeStyle : undefined
            }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to='/others' onClick={() => context.setSearchByCategory('others')} className={({ isActive })=> 
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-4">
        {renderView()}
        <li className='flex'>
        <ShoppingCart />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar