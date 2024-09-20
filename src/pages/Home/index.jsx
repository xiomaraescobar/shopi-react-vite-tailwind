import { useContext, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import ShoppingCartContext from '../../context'
import { useLocation } from 'react-router-dom'

function Home() {
  const context = useContext(ShoppingCartContext)

  const location = useLocation()
  useEffect(() => {
    context.setSearchByTitle('')
  }, [location])

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <h2>No se encontraron resultados</h2>
      )
    }
  }

  return (
    <Layout>
      <div className='flex justify-center relative items-center w-80 mb-6'>
        <h1 className='font-bold text-2xl'>Exclusive Products</h1>
      </div>
      <input
      value={context.searchByTitle}
        type="text"
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-4'
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className='grid gap-3 grid-cols-4 w-full max-w-screen-xl'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home