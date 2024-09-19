import { XCircleIcon } from '@heroicons/react/24/outline';
import './style.css'
import { useContext } from 'react';
import ShoppingCartContext from '../../context';

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    const { image, title, price, description } = context.productToShow
    return (
        <aside className={`product-detail flex-col fixed right-0 border border-black rounded-lg bg-white ${context.isProductDetailOpen ? 'flex' : 'hidden'}`}>
        <div className="flex justify-between items-center p-6">
            <h2 className='font-medium text-2xl'>Details</h2>
            <div>
                <XCircleIcon onClick = { () => context.closeProductDetail()}
                    className='h-7 w-7 text-black cursor-pointer'></XCircleIcon>
            </div>
        </div>
        <figure className='px-10 h-80'>
            <img className='w-full h-full rounded-lg object-fit'
                src={image}
                alt={title} />
        </figure>
        <p className='flex justify-between items-center p-3' >
            <span className='font-medium text-2xl'>{title}</span>
            <span className='text-lg font-semibold'>
                ${price}
            </span>
        </p>
        <p  className='p-4   font-light text-sm'>
            <span>{description}</span>
        </p>
    </aside >
    )
}
export default ProductDetail;