const Card = () => {

    return (
        <div className="bg-white cursor-pointer w-60 h-80 rounded-lg">
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute m-2 bottom-0 left-0 bg-white/60 rounded-2xl text-black text-sm px-3 py-0.5'>Electronics</span>
                <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=' healphones' />
                <div className='absolute top-0 right-0 m-3 p-1 flex justify-center items-center bg-white w-8 h-8 rounded-full'>
                    <span className=' absolute bottom-0 font-medium text-3xl'>
                        +
                    </span>
                </div>
            </figure>
            <p className=' flex justify-between'>
                <span className=' text-lg font-light'>Headphone</span>
                <span className='font-semibold text-xl'>$300</span>
            </p>
        </div>

    )
}
export default Card