import React from 'react'
import Image from 'next/image'
import img1 from "../../../public/img1.png"
import { Button } from '../ui/button'

type Props = {}

const SlideShow = (props: Props) => {
  return (
    <div className='grid grid-cols-2 items-center p-10 w-full justify-between'>
      <section id="left" className="flex  flex-col items-start gap-6"><h1 className='font-bold  text-[2.5rem] word-wrap'>Get the windows 11 professional and Microsoft Office now!!</h1>
     <p>* Include access to all windows 11 functions <br /> * 100% guaranteed sucessful installation <br /> * Live Installation Support Avaliable </p>
      <Button className="bg-blue-600 px-6 py-4 text-[1.1rem] font-medium rounded-lg">Shop Now</Button>
      </section>
      <section id="right" className='justify-self-end'><Image src={img1} className="" alt="img"/></section>
    </div>
  )
}

export default SlideShow