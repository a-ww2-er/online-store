import React from 'react'
import Cards from '../Home/Cards'

type Props = {}

const AllProducts = (props: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2  w-full">
        <Cards title="Adobe Acrobat: definite edition 2019" price={200} img={4}/>
        <Cards title="Microsoft Office suite 2020-23" price={1000} img={5}/>
        <Cards title="Windows 11: Professional Fully licensed" price={500} img={6}/>
        <Cards title="AutoDesk suites: All Home editions 2020-24" price={100} img={4}/>

      </div>
  )
}

export default AllProducts