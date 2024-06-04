import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className='w-screen h-screen overflow-hidden flex justify-center items-center bg-white'>
      <Image src="/loading.svg" alt="" />
    </div>
  )
}

export default Loading