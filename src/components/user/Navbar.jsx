import { Search, ShoppingCart } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='w-full h-[70px] bg-emerald-500 px-5 fixed top-0 left-0 flex justify-between items-center'>
            <h2 className='font-extrabold text-white text-2xl flex items-center '>HasCart</h2>
            <div className='relative '>
                <input type="text" placeholder='search an item' className="bg-transparent border-b  border-gray-300 w-[200px] placeholder:text-white outline-none pl-2 text-white " />
                <Search className='absolute right-2 top-1 text-white cursor-pointer ' />
            </div>
            <ul className='flex gap-8 items-center'>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/orders'}><li>Orders</li></Link>
                <Link to={'/cart'}><li><ShoppingCart /></li></Link>




            </ul>
        </div>
    )
}

export default Navbar;
