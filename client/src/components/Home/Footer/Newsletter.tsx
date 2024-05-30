import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CloudLightningIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { IoLogoYoutube } from 'react-icons/io5'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {RiInstagramFill} from 'react-icons/ri'

type Props = {}

const Newsletter = (props: Props) => {
  return (
    <div className="h-[240px] py-5 px-10 grid grid-cols-3 text-black gap-x-6 ">
       <section className=""> <h1 className="capitalize font-bold text-[1.5rem] text-black flex gap-2 items-center"><CloudLightningIcon className="text-blue-500 h-12 w-12"/>ONE FASTER</h1></section>
       <section className="flex flex-col gap-2 mt-2">
       <span><h1 className="uppercase ">Dont miss any Offer!</h1>
        <p className="text-[0.8rem]">Subscribe to our newsletter to get updates on our latest offers!</p></span> 
     <span className=" flex items-center gap-4">   <Input type={"text"} placeholder="Fill in your e-mail address" className="border-slate-400"/> <Button variant={"outline"} className="border-slate-400">Subscribe</Button></span>
     <label className="flex items-center text-slate-500 text-[0.8rem] !font-normal">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    value=""
                    className="mr-2"
                  />
                  <span>i agree to oneFaster&apos;s Privacy and cookie policy, You can unsubscribe from newsletters at any time.</span>
                </label>
       </section>
       <section className="text-[0.8rem]">
          <div>
          <h1 className="uppercase text-[1rem] text-right ">Join us</h1>
           <span className="flex gap-2 text-[1.8rem] mt-2 justify-end text-gray-600 items-center"> 
           <Link href="/" className=""><RiInstagramFill/></Link>
           <Link href="/" className=""><FaSquareXTwitter/></Link>
           <Link href="/" className=""><IoLogoYoutube/></Link>
           </span>
            </div>
         
       </section>

        </div>
  )
}

export default Newsletter