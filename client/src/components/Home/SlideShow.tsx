"use client"
import Image from 'next/image'
import img1 from "../../../public/img1.png"
import img2 from "../../../public/img2.png"
import img3 from "../../../public/img3.png"
import { Button } from '../ui/button'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Parallax, Pagination, Navigation, Autoplay  } from 'swiper/modules';

type Props = {}

const SlideShow = (props: Props) => {
  return (
    // <div className='grid grid-cols-2 items-center p-10 w-full justify-between'>
    //   <section id="left" className="flex  flex-col items-start gap-6"><h1 className='font-bold  text-[2.5rem] word-wrap'>Get the windows 11 professional and Microsoft Office now!!</h1>
    //  <p>* Include access to all windows 11 functions <br /> * 100% guaranteed sucessful installation <br /> * Live Installation Support Avaliable </p>
    //   <Button className="bg-blue-600 px-6 py-4 text-[1.1rem] font-medium rounded-lg">Shop Now</Button>
    //   </section>
   // style={{
    //  '--swiper-navigation-color': '#fff',
      //'--swiper-pagination-color': '#fff',
    //}}
    //   <section id="right" className='justify-self-end'><Image src={img1} className="" alt="img"/></section>
    // </div>
    <>
     <Swiper
        speed={1200}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay ]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg "
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
    <div className='grid grid-cols-2 items-center p-10 w-full justify-between' data-swiper-parallax="300" >
      <section id="left" className="flex  flex-col items-start gap-6 ml-2" >
         <h1 className='font-bold  text-[2.5rem] word-wrap' data-swiper-parallax="-400" >Get the windows 11 professional and Microsoft Office now!!</h1>
         <p data-swiper-parallax="-500" >* Include access to all windows 11 functions <br /> 
            * 100% guaranteed sucessful installation <br /> 
            * Live Installation Support Avaliable </p>
         <Button data-swiper-parallax="-400" className="bg-blue-600 px-6 py-4 text-[1.1rem] font-medium rounded-lg">Shop Now</Button>
      </section>
      <section id="right" className='justify-self-end ' data-swiper-parallax="-600">
        <Image src={img1} className="" alt="img"/>
      </section>
    </div> 
        </SwiperSlide>
        <SwiperSlide>
    <div className='grid grid-cols-2 items-center p-10 w-full justify-between' data-swiper-parallax="300" >
      <section id="left" className="flex  flex-col items-start gap-6 ml-2" >
         <h1 className='font-bold  text-[2.5rem] word-wrap' data-swiper-parallax="-400" >Get the windows 11 professional and Microsoft Office now!!</h1>
         <p data-swiper-parallax="-500" >* Include access to all windows 11 functions <br /> 
            * 100% guaranteed sucessful installation <br /> 
            * Live Installation Support Avaliable </p>
         <Button data-swiper-parallax="-400" className="bg-blue-600 px-6 py-4 text-[1.1rem] font-medium rounded-lg">Shop Now</Button>
      </section>
      <section id="right" className='justify-self-end ' data-swiper-parallax="-600">
        <Image src={img2} className="" alt="img"/>
      </section>
    </div> 
        </SwiperSlide>
        <SwiperSlide>
    <div className='grid grid-cols-2 items-center p-10  w-full justify-between' data-swiper-parallax="-300" >
      <section id="left" className="flex  flex-col items-start gap-6 ml-2" >
         <h1 className='font-bold  text-[2.5rem] word-wrap' data-swiper-parallax="-400" >Purchase the windows 11 Developers Edition</h1>
         <p data-swiper-parallax="-500" >* Include access to all windows 11 functions <br /> 
            * 100% guaranteed sucessful installation <br /> 
            * Live Installation Support Avaliable </p>
         <Button data-swiper-parallax="-400" className="bg-blue-600 px-6 py-4 text-[1.1rem] font-medium rounded-lg">Shop Now</Button>
      </section>
      <section id="right" className='justify-self-end ' data-swiper-parallax="-600">
        <Image src={img3} className="" alt="img"/>
      </section>
    </div> 
        </SwiperSlide>
       
      </Swiper>
    </>
  )
}

export default SlideShow

