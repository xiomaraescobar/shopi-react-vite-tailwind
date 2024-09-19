import { TrashIcon } from "@heroicons/react/24/outline"

const OrderCard = props => {
  const { id, title, imageUrl, price, handleDelete } = props
  return (
    <div className="flex justify-between items-center mb-3">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-fit' src={imageUrl} alt={title} />
        </figure>
        <p className='text-lg font-light'>
          {title}
        </p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-xl font-medium'>{price}</p>
        <TrashIcon onClick={() => handleDelete(id)} className='h-6 w-6 text-black cursor-pointer'></TrashIcon>
      </div>
    </div>
  )
}

export default OrderCard