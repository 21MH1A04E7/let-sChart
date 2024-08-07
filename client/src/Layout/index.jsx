import React from 'react'
// import logo from '../assets/logo.png'
import logo from '../assets/logo-no-background.png'

const AuthLayouts = ({children}) => {
  return (
    <>
        <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white'>
            <img 
              src={logo}
              alt='logo'
              width={190}
              height={70}
            />
        </header>

        { children }
    </>
  )
}

export default AuthLayouts