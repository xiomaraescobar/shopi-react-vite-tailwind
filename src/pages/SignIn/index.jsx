import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Link, Navigate } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { useContext, useState, useRef } from 'react'
import ShoppingCartContext from '../../context'

function SignIn() {
  const context = useContext(ShoppingCartContext)
    const [view, setView] = useState('user-info')
    const form = useRef(null)
    const [showIconPassword, setShowIconPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowIconPassword(!showIconPassword)
    }
    // Account 
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

    // Has No Account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUSerAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignIn = () => {
        const stringifiedSignOut = JSON.stringify(false)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(false)
        // Redirect
        return <Navigate replace to={'/'} />
    }

    const createAnAccount = () => {
        const formData = new FormData(form.current)
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
        }
        const stringifiedAccount = JSON.stringify(data)
        localStorage.setItem('account', stringifiedAccount)
        context.setAccount(data)
        handleSignIn()
    }
    return (
      <Layout>
      {view === 'create-user-info' ?
          (
              <div>
                  <h1 className='font-medium text-xl text-center  mb-6 w-80'>Create new user</h1>
                  <form ref={form} className='flex flex-col gap-4 2-80'>
                      <div className='flex flex-col gap-1'>
                          <label htmlFor='name' className='font-light text-lg'>Your Name: </label>
                          <input type="text"
                              id='name'
                              name='name'
                              defaultValue={parsedAccount?.name}
                              placeholder='Peter'
                              className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/40 focus:outline-none py-2 px-4' />
                      </div>
                      <div className='flex flex-col gap-1'>
                          <label htmlFor='email' className='font-light text-lg'>Your Email: </label>
                          <input type="text"
                              id='email'
                              name='email'
                              defaultValue={parsedAccount?.email}
                              placeholder='Peter@gmail.com'
                              className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/40 focus:outline-none py-2 px-4' />
                      </div>
                      <div className='flex flex-col gap-1'>
                          <label htmlFor='password' className='font-light text-lg'>Your password: </label>
                          <input type="password"
                              id='password'
                              name='password'
                              defaultValue={parsedAccount?.password}
                              placeholder='***'
                              className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/40 focus:outline-none py-2 px-4' />
                      </div>
                      <Link to='/'>
                          <button className='bg-black text-white w-full rounded-lg py-3'
                              onClick={() => { createAnAccount() }}>
                              Create Account
                          </button>
                      </Link>
                  </form>
              </div>

          ) : (
              <div>
                  <h1 className='font-medium text-xl text-center  mb-6 w-80'>Welcome</h1><div className='flex flex-col w-80'>
                      <p className='mb-2 text-center flex flex-col mb-2'>
                          <span className='font-light text-lg mb-2'>Email:</span>
                          <input className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/40 focus:outline-none py-2 px-4'
                              defaultValue={parsedAccount?.email} type="text" placeholder='Ingrese su email' />
                      </p>
                      <p className='text-center flex flex-col relative'>
                          <span className='font-light text-lg mb-2'>contraseña:</span>
                          <input className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/40 focus:outline-none py-2 px-4'
                              defaultValue={parsedAccount?.password} type={showIconPassword ? 'text' : 'password'} placeholder='***' />
                          <button onClick={togglePasswordVisibility}
                              className='absolute right-2 top-11 transform-translate-y-1/2 bg-transparent border-none'>
                              {
                                  showIconPassword ? (
                                      <EyeSlashIcon
                                          className='h-6 w-6 text-gray-400 hover:text-gray-600'
                                          aria-hidden='true'
                                      />
                                  ) : (
                                      <EyeIcon
                                          className='h-6 w-6 text-gray-400 hover:text-gray-600'
                                          aria-hidden='true'
                                      />
                                  )
                              }

                          </button>
                      </p>
                      <Link to='/'>
                          <button className='bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2'
                              onClick={() => { handleSignIn() }} disabled={!hasUSerAnAccount}>Log In</button>
                      </Link>
                      <div className='text-center'>
                          <a href="/" className='font-light text-lg underline underline-offset-4'>Forgot my password</a>
                      </div>
                      <button disabled={hasUSerAnAccount}
                          className='border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3'
                          onClick={() => setView('create-user-info')}>Sign Up</button>
                  </div>
              </div>
          )}
  </Layout>
    )
}

export default SignIn