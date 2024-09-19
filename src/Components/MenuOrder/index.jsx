import { XCircleIcon } from '@heroicons/react/24/outline';
import './style.css'
import { useContext } from 'react';
import ShoppingCartContext from '../../context';
import OrderCard from '../OrderCard';

const MenuOrder = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside className={`product-detail flex-col fixed right-0 border border-black rounded-lg bg-white ${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'}`}>
        <div className="flex justify-between items-center p-6">
            <h2 className='font-medium text-2xl'>My Order</h2>
            <div>
                <XCircleIcon onClick = { () => context.closeMenuOrder()}
                    className='h-7 w-7 text-black cursor-pointer'></XCircleIcon>
            </div>
        </div>
        <div className='px-6 overflow-i-scroll'>{context.cartProducts.map(product => (
            <OrderCard 
            key={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price} />
        ))}</div>
    </aside >
    )
}
export default MenuOrder;