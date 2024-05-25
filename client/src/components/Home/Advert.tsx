import Image from 'next/image'
import React from 'react'
import advert1 from "../../../public/advert1.png"
import advert2 from "../../../public/advert2.png"

type Props = {}

const Advert = (props: Props) => {
  return (
    <div className="w-full my-6">
      <div className="flex items-center gap-4 justify-center w-full">
        
        <Image src={advert1} alt="advert" className="cursor-pointer object-fit  shadow-[0_0px_50px_-12px_rgb(0,0,0,0.80)] w-[580px] h-[300px] rounded-md" width={400}/>
        <Image src={advert2} alt="advert" className="cursor-pointer object-fit  shadow-[0_0px_50px_-12px_rgb(0,0,0,0.80)] w-[580px] h-[300px] rounded-md" width={400}/>
        
        </div>


    </div>
  )
}

export default Advert