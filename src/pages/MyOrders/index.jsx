import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import ShoppingCartContext from '../../context'
import OrdersCard from '../../Components/OrdersCard'



function MyOrders() {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div className='flex justify-center relative items-center w-80 mb-6'>
        <h1 className='font-bold text-2xl'>My orders</h1>
      </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
              date={order.date}
            />
          </Link>
        ))
      }
    </Layout>
  )
}

export default MyOrders