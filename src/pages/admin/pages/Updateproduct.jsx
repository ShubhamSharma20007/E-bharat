import React from 'react'

const Updateproduct = () => {
  return (
    <div>
   <div>
      <div className="main-add max-w-sm  flex justify-center mx-auto items-center h-[100vh]">
        <div className=" flex flex-col w-full p-4 bg-slate-200 rounded-lg">
        <h1 className='text-center font-bold text-2xl'>Update Product</h1>
          <input type="text" className='rounded-md p-1 my-2 w-full' placeholder='Product Title'/>   
          <input type="text" className='rounded-md p-1 my-2' placeholder='Product Price'/>
          <input type="text" className='rounded-md p-1 my-2' placeholder='Product ImgUrl'/>
          <input type="text" className='rounded-md p-1 my-2' placeholder='Product Category'/>
          <button type='submit' className='bg-sky-800 text-white rounded-sm font-bold w-1/2 mx-auto mt-3' >Submit</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Updateproduct
