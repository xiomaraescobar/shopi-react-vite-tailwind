import { XCircleIcon } from '@heroicons/react/24/outline';
import './style.css'

const ProductDetail = () => {
    return (
        <aside className='product-datail flex flex-col fixed right-0 border border-black rounded-lg bg-white '>
            <div className="flex justify-between items-center p-6">
                <h2 className='font-medium text-2xl'>Details</h2>
                <div>
                    <XCircleIcon className='h-7 w-7 text-black'></XCircleIcon>
                </div>
            </div>
        </aside>
    )
}
export default ProductDetail;