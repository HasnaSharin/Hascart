import React from 'react'
import {categories} from '../../utils/DUMMY_DATA'

const ItemsCategory = () => {
  return (
    <div className='min-w-full py-2 bg-zinc-50 min-h-[150px] flex justify-evenly items-center ' >
        {categories.map((cat)=>(
            <div key={cat.category} className='border-2 shadow-md hover:bg-zinc-200 cursor-pointer rounded-md 
            w-[150px] bg-zinc-100 h-[150px] flex flex-col justify-end items-center'>
            <img src={cat.img} alt=""  className='max-w-[100px] max-h-[100px] object-contain'/>
            <h4 className='font-semibold mt-2'>{cat.category}</h4>
          </div>
        

        ))}
        </div>
      
  )
  }


export default ItemsCategory;
