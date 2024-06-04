import React from 'react'
import { Navbar } from './Navbar'

const Header = () => {
  return (
    <div className='w-screen overflow-x-hidden bg-white'>
    <div className='header w-full'>
      <Navbar/>
    </div>
    </div>
  )
}

export default Header