import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'


function NotFound() {
    const imageNotFound = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDIDbwTRbkIzFHEZk-iSEWnix1R1tLlLY2g&s"

    return (
        <Layout>
            <div className='flex flex-row justify-center items-center'>
            <div className='py-4 px-3 relative top-20'>
                <figure className='w-80'>
                    <img className='w-full h-full' src={imageNotFound} alt="Page Not Found"/>
                </figure>
            </div>
            <div className='flex flex-col w-80 mt-20'>
                <h1 className='text-4xl font-medium items-center'>Page Not Found</h1>
                <p className=' text-xl mb-4 mt-6'>
                    <span>The page you are looking for is not available </span>
                </p>
                <Link to='/'>
                    <button className='bg-black text-white w-full rounded-lg py-3 mt-2 text-xl'>Go to Home</button>
                </Link>
            </div>
            </div>
            
        </Layout>
        
    )
}

export default NotFound