import Image from 'next/image'
import React from 'react'
import img5 from "../../../public/img5.jpg"
import img4 from "../../../public/img4.png"
import img6 from "../../../public/img6.jpg"

type Props = {
    title:string,
    price:number,
    img:number
}

const Cards = (props: Props) => {
  return (
    <div className='flex flex-col rounded-md border border-slate-300 '>
        <section id="product_image" className="">
            <Image src={props.img == 4 ? img4 : props.img == 6 ? img6 : img5} alt="image" className=""/>
        </section>
        <section id="product_details" className="p-4 flex flex-col "> <h2 className="font-medium text-[0.9rem]">{props.title}</h2><p>$ {props.price}</p></section>
    </div>
  )
}

export default Cards