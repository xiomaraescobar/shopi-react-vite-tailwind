import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useContext } from "react";
import ShoppingCartContext from '../../context'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const context = useContext(ShoppingCartContext);// aqui se lee el estado global
  const  activeStyle = 'underline underline-offset-4'
  return (
    <nav className="flex justify-between items-center fixed z-10  top-0 w-full py-5 px-8 text-lg font-light">
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
        <li className="text-black/60">
          xioma.marce@gmail.com
        </li>
        <li>
          <NavLink to='/my-orders' className={({ isActive })=> 
              isActive ? activeStyle : undefined
            }>
            MyOrders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className={({ isActive })=> 
              isActive ? activeStyle : undefined
            }>
            MyAccount
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in' className={({ isActive })=> 
              isActive ? activeStyle : undefined
            }>
            Sign in
          </NavLink>
        </li>
        <li className='flex'>
          <ShoppingCartIcon to='./my-order' className='h-5 w-5 text-black relative top-1 right-1' />
          <div> {context.count}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar