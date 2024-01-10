import React from 'react'
import ItemsCategory from '../../components/user/itemsCategory';
import Banner from '../../components/user/Banner';
import ProductSection from '../../components/user/ProductSection';
import {products} from '../../utils/DUMMY_DATA'

const Homepage = () => {
  return (
    <div className='w-full min-h-screen pt-[100px]'>
      <ItemsCategory/>
      <Banner/>
      <ProductSection products={products}/>

    </div>
  )
}

export default Homepage;
