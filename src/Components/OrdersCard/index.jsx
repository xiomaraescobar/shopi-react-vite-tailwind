import { ChevronRightIcon } from "@heroicons/react/24/outline"

const OrdersCard = props => {
  const { totalPrice, totalProducts, date } = props

  return (
    <div className='flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80 '>
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span>Fecha:  {date}</span>
          <span className='font-light'>{totalProducts} Articles</span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='font-medium text-2xl'>${totalPrice}</span>
          <ChevronRightIcon className='h-7 w-7 text-black cursor-pointer' />
        </p>
      </div>
    </div>
  )
}

export default OrdersCard 