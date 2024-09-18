import { PlusIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import ShoppingCartContext from '../../context'

const Card = (data) => {
  const context = useContext(ShoppingCartContext)// aqui se lee el estado global

    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute m-2 bottom-0 left-0 bg-white/60 rounded-2xl text-black text-sm px-3 py-0.5'>{data.data.category}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.image} alt= {data.data.title} />
                <div 
                  className='absolute top-0 right-0 m-3 p-1 flex justify-center items-center bg-white w-8 h-8 rounded-full'
                  onClick={() => context.setCount(context.count + 1)}>
                    <span className=' absolute '>
                    <PlusIcon className='h-6 w-6 text-black relative bottom-0.5 right-0.5'></PlusIcon>
                    </span>
                </div>
            </figure>
            <p className=' flex justify-between'>
                <span className=' text-lg font-light'>{data.data.title}</span>
                <span className='font-semibold text-xl'>${data.data.price}</span>
            </p>
        </div>

    )
}
export default Card