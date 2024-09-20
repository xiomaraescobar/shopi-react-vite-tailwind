import { useContext } from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartContext from '../../context'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext)

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1 )
  if (index === 'last') index = context.order?.length - 1
  const productsData = context.order?.[index]
  return (
    <Layout>
      <div className='flex justify-center relative items-center w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1 className='font-bold text-2xl'>My Order</h1>
      </div>
      <p className='mb-6 text-xl'>
        <span>
          Fecha de compra:  {productsData.date}
        </span>
      </p>

      <div className='flex flex-col w-80' >
      {
          context.order?.[index]?.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))}

          <p className='flex justify-between items-center'>
            <span className='font-light text-lg'>
              article:  {productsData.totalProducts}
            </span>
            <span className='font-medium text-xl '>
             total:  {productsData.totalPrice} 
            </span>
          </p>
      </div>
    </Layout>
  )
}

export default MyOrder