import { useState, useEffect, useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import ShoppingCartContext from '../../context'

function Home() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
        <div className='flex justify-center relative items-center w-80 mb-6'>
        <h1 className='font-bold text-2xl'>Exclusive Products</h1>
      </div>  
      <input 
      type="text"  
      placeholder='Search a product'
      className='rounded-lg border border-black w-80 p-4 mb-4'
      onChange={(event) => context.setSearchByTitle(event.target.value)}/>
      <div className='grid gap-3 grid-cols-4 w-full max-w-screen-xl'>
        {
          context.items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home