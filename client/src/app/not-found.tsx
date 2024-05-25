import Footer from '@/components/Home/Footer'
import Header from '@/components/Home/Header'
import Navbar from '@/components/Home/Navbar'
import SlideShow from '@/components/Home/SlideShow'
import Tabs from '@/components/Home/Tabs'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div>
         <title>Page Not Found | One Faster</title>
    <div>
      <section id="heading" className=" text-white bg-gradient-to-t from-gray-800 to-gray-900 w-full h-fit">
        <Header />
        <Navbar />
        <Tabs />
      </section>
      <section>
        <h1 className="text-center text-3xl font-bold my-4 h-[50vh]">Page Not Found</h1>
      </section>
      <Footer/>
      </div>
    </div>
  )
}

export default Page