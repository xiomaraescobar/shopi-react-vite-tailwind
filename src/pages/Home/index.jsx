import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

function Home() {
  const [items, setItems] = useState([])
  useEffect(() => {
    //fetch('https://api.escuelajs.co/api/v1/products')
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))

  }, [])

  return (
    <Layout>
      <div className='grid gap-3 grid-cols-4 w-full max-w-screen-xl'>
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home