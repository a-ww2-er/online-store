import Image from 'next/image'
import React from 'react'


type Props = {}

const Advert = (props: Props) => {
  return (
    <div className="w-full my-6">
      <div className="flex items-center gap-4 justify-center w-full">
        
        <Image src={`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/advert1.png`} alt="advert" className="cursor-pointer object-fit  shadow-[0_0px_50px_-12px_rgb(0,0,0,0.80)] w-[580px] h-[300px] rounded-md" width={400}/>
        <Image src={`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/advert2.png`} alt="advert" className="cursor-pointer object-fit  shadow-[0_0px_50px_-12px_rgb(0,0,0,0.80)] w-[580px] h-[300px] rounded-md" width={400}/>
        
        </div>


    </div>
  )
}

export default Advert