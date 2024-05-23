import Header from '@/components/Home/Header'
import Navbar from '@/components/Home/Navbar'
import Tabs from '@/components/Home/Tabs'
import AllProducts from '@/components/Shop/AllProducts'
import ShopFilterNav from '@/components/Shop/ShopFilterNav'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
         <title>Shop | One Faster</title>
      <div className="flex-column justify-center align-middle h-full">
        <section className="text-white bg-gradient-to-t from-gray-800 to-gray-900 w-full h-fit">
          <Header />
          <Navbar />
          <Tabs />
        </section>
        <section id='shop_container' className='grid grid-cols-6'>
            <ShopFilterNav/>
            <aside id='products_list'>  
            <AllProducts/>
            </aside>
            </section>
        </div>
    </>
  )
}

export default page