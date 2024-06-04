import React from 'react'

export const Features = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className="custom-container">
            <div className="wrapper flex-col lg:flex-row flex items-center">
                <div className='relative w-full lg:w-1/2'>
                 <div className="relative">
                 <img src="/feature-banner.png" alt="" />
                 <img src="/shape-1.png" alt="" className='absolute -z-[1] left-0 top-0' />
                 </div>
                </div>
                <div className='w-full lg:w-1/2'>
                  <div className='mb-5'>
                    <h6 className='text-lg text-center lg:text-left font-medium capitalize text-red-500'>features</h6>
                    <h1 className='text-5xl text-center lg:text-left font-bold uppercase'>uifry premium</h1>
                  </div>
                  <div>
                    <div className='mb-5'>
                      <h6 className='text-lg font-bold'>Budgeting Intervals</h6>
                      <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                    <div className='mb-5'>
                      <h6 className='text-lg font-bold'>Budgeting Intervals</h6>
                      <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                    <div className='mb-5'>
                      <h6 className='text-lg font-bold'>Budgeting Intervals</h6>
                      <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
