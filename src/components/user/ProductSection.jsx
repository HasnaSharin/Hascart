import React from 'react'
import Button from '../shared/button'

const ProductSection = (props) => {
  return (
    <>
        <h1 className='text-zinc-600 font-bold text-2xl ml-14 mt-5'>Products</h1>
        <div className='flex w-full mt-2 bg-gray-200 h-[350px] py-8 px-10 whitespace-nowrap overflow-x-auto overflow-y-hidden scroll-width gap-5'>
        {props.products.map((item)=>(
        <div key={item.id} className='min-w-[250px] h-[280px] bg-white shadow-lg rounded-lg flex flex-col justify-evenly item-center hover:scale-105 transition-transform cursor-pointer'>
            <img  alt="" className='w-full h-[50%] object-contain' src={item.imgUrl}/>
            <h2 className='text-lg text-black capitalize'>{item.name}</h2>

            <p className='text-sm text-gray-900 capitalize'>{item.manufacturer}</p>
            <Button btnType={"Add to Cart"}/>

        </div>
      

    
      ))}
      </div>
      </>
  )
}

export default ProductSection
