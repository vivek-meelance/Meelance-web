import React from 'react'

const page = () => {
  return (
    <>
    <div className='flex container min-h-[900px] gap-[40px] py-[40px]'>
      <div className='basis-[33.3%] flex flex-col gap-[50px]'>
        <div className='shadow-[0px_8px_22.200000762939453px_12px_#90909014] rounded-2xl h-[400px]'></div>
        <div className='shadow-[0px_8px_22.200000762939453px_12px_#90909014] rounded-2xl h-[100px]'></div>
        <div className='shadow-[0px_8px_22.200000762939453px_12px_#90909014] rounded-2xl h-[100px]'></div>
        <div className='shadow-[0px_8px_22.200000762939453px_12px_#90909014] rounded-2xl h-[300px]'></div>
      </div>
      <div className='basis-[33.3%] shadow-[0px_8px_22.200000762939453px_12px_#90909014] rounded-2xl'></div>
      <div className='basis-[33.3%] flex flex-col gap-[50px]'>
        <div className='shadow-[0px_8px_22.200000762939453px_12px_#90909014] rounded-2xl h-[300px]'></div>
        <div className='shadow-[0px_8px_22.200000762939453px_12px_#90909014] rounded-2xl h-[600px]'></div>
      </div>
    </div>
    </>
  )
}

export default page