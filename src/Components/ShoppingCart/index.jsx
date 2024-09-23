import { useContext } from "react"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import ShoppingCartContext from "../../context"


const ShoppingCart = () => {
    const context = useContext(ShoppingCartContext)

    const openCheckoutSideMenu = () => {
        context.openCheckoutSideMenu()
    }
    return (
        <div className="relative flex gap-.5 items-center" onClick={() => openCheckoutSideMenu()}> 
            <ShoppingBagIcon className="w-6 h-6 fill-none stroke-black cursor-pointer" />
            <div className="absolute bottom-3.5 left-3.5 flex justify-center items-center
             rounded-full bg-black w-5 h-5 text-sm text-white">
                {context.cartProducts.length}
            </div>
        </div>
    )
} 

export default ShoppingCart