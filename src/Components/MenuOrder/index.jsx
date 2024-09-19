import { XCircleIcon } from '@heroicons/react/24/outline';
import './style.css'
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import ShoppingCartContext from '../../context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils'

const MenuOrder = () => {
  const context = useContext(ShoppingCartContext)

  //removiendo productos del carrito
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '19.09.2024',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
  }


  return (
    <aside className={`product-detail flex-col fixed right-0 border border-black rounded-lg bg-white ${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'}`}>
      <div className="flex justify-between items-center p-6">
        <h2 className='font-medium text-2xl'>My Order</h2>
        <div>
          <XCircleIcon onClick={() => context.closeMenuOrder()}
            className='h-7 w-7 text-black cursor-pointer'></XCircleIcon>
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1 ' >{context.cartProducts.map(product => (
        <OrderCard
          key={product.id}
          id={product.id}
          title={product.title}
          imageUrl={product.image}
          price={product.price}
          handleDelete={handleDelete}
        />
      ))}
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-bold'>Total</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)} </span>
        </p>
        <Link to='/my-orders/last'>
          <button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => handleCheckout()}>checkout</button>
        </Link>
      </div>
    </aside >
  )
}
export default MenuOrder;