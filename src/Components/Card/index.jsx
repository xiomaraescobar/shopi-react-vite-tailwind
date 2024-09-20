import { PlusIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import ShoppingCartContext from '../../context'

const Card = (data) => {
    const context = useContext(ShoppingCartContext)// aqui se lee el estado global

    const showProduct = (productDetail) => {
        context.closeMenuOrder()
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }
    const addProductToCard = (productData) => {
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.closeProductDetail()
        context.openMenuOrder()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
        if (isInCart) {
            return (
                <div
                    className='absolute top-0 right-0 m-3 p-1 flex justify-center items-center bg-white w-8 h-8 rounded-full'
                >
                    <span className=' absolute '>
                        <CheckBadgeIcon onClick={(event) => {
                            event.stopPropagation()
                        }} className='h-6 w-6 text-black relative'></CheckBadgeIcon>
                    </span>
                </div>
            )
        } else {
            return (
                <div
                    className='absolute top-0 right-0 m-3 p-1 flex justify-center items-center bg-white w-8 h-8 rounded-full'
                >
                    <span className=' absolute '>
                        <PlusIcon onClick={(event) => {
                            event.stopPropagation()
                            addProductToCard(data.data)
                        }} className='h-6 w-6 text-black relative '></PlusIcon>
                    </span>
                </div>
            )
        }

    }

    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg" onClick={() => showProduct(data.data)} >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute m-2 bottom-0 left-0 bg-white/60 rounded-2xl text-black text-sm px-3 py-0.5'>{data.data.category}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.image} alt={data.data.title} />
                {renderIcon(data.data.id)}
            </figure>
            <p className=' flex justify-between'>
                <span className=' text-lg font-light'>{data.data.title}</span>
                <span className='font-semibold text-xl'>${data.data.price}</span>
            </p>
        </div>

    )
}
export default Card