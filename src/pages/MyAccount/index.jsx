import { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import ShoppingCartContext from '../../context'

function MyAccount() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  const form = useRef(null)

  const editAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
  }

  return (
    <Layout>
      {view === 'edit-user-info' ? (
        <div>
          <h1 className='font-medium text-xl text-center  mb-6 w-80'>Edit user</h1>
          <form ref={form} className='flex flex-col gap-4 w-80'>
            <div className='flex flex-col w-80'>
              <p className='text-center flex flex-col mb-2'>
                <span className='text-lg mb-2'>Nombre </span>
                <input type="text"
                  id='name'
                  name='name'
                  defaultValue={parsedAccount?.name}
                  placeholder='Peter'
                  className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/40 focus:outline-none py-2 px-4' />
              </p>
              <p className='text-center flex flex-col mb-2'>
                <span className='text-lg mb-2'>Email: </span>
                <input type="text"
                  id='email'
                  name='email'
                  defaultValue={parsedAccount?.email}
                  placeholder='Peter@gmail.com'
                  className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/40 focus:outline-none py-2 px-4' />
              </p>
              <p className='text-center flex flex-col mb-2'>
                <span className='text-lg mb-2'>Contraseña: </span>
                <input type='text'
                  id='password'
                  name='password'
                  defaultValue={parsedAccount?.password}
                  placeholder='***'
                  className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/40 focus:outline-none py-2 px-4' />
              </p>
            </div>
            <Link to='/'>
              <button className='bg-black text-white w-full rounded-lg py-3'
                onClick={() => { editAccount() }}>
                Edit Account
              </button>
            </Link>
          </form>
        </div>
      ) : (
        <div>
          <h1 className='font-medium text-xl text-center  mb-6 w-80'>My Account</h1>
          <div className='flex flex-col w-80 mb-2'>
            <p className='text-center flex flex-col mb-2'>
              <span className='text-lg mb-2'>Nombre:</span>
              <input className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/40 focus:outline-none py-2 px-4'
                defaultValue={parsedAccount?.name} disabled type="text" />
            </p>
            <p className='text-center flex flex-col mb-2'>
              <span className='text-lg mb-2'>Email:</span>
              <input className='rounded-lg border border-black placeholder:font-light 
              placeholder:text-sm placeholder:text-black/40 focus:outline-none py-2 px-4'
                defaultValue={parsedAccount?.email} type="text" disabled placeholder='Ingrese su email' />
            </p>
            <p className='relative text-center flex flex-col'>
              <span className='text-lg mb-2'>Contraseña:</span>
              <input className='rounded-lg border border-black placeholder:font-light 
              placeholder:text-sm placeholder:text-black/40 focus:outline-none py-2 px-4'
                defaultValue={parsedAccount?.password} disabled type='text' />
            </p>
          </div>
          <button className=' bg-black text-white w-full rounded-lg py-3 mt-4 mb-2'
              onClick={() => setView('edit-user-info')} >Edit user</button>
        </div>
      )
      }
    </Layout>
  )
}

export default MyAccount