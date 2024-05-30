"use client"
import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header";
import Navbar from "@/components/Home/Navbar/Navbar";
import SlideShow from "@/components/Home/SlideShow";
import Tabs from "@/components/Home/Tabs";
import React, { useState, useRef, useEffect } from "react";
import "./notFoundStyles.css"
type Props = {};

const Page = (props: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event:any) => {
      const { clientX, clientY } = event;
      const pageX = document.documentElement.clientWidth;
      const pageY = document.documentElement.clientHeight;
      const xAxis = (clientX / pageX) * 100 - 100;
      const yAxis = ((pageY / 2 - clientY) / pageY) * 300;
      setPosition({ x: xAxis, y: yAxis });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (  <>
    <div className="relative bg-white ">
      <title>Page Not Found | One Faster</title>

      <section
        id="heading"
        className=" text-white bg-gradient-to-t from-gray-800 to-gray-900 w-full h-fit">
        <Header />
        <Navbar />
        <Tabs />
      </section>
   <div className="h-[600px] w-full relative">
    <div className="box !bg-gradient-to-t from-gray-800 to-gray-900 " ref={containerRef}>
       <div className="box__ghost ">
        <div className="symbol"></div>
          <div className="symbol"></div>
            <div className="symbol"></div>
            <div className="symbol"></div>
            <div className="symbol"></div>
           <div className="symbol"></div>
    
    <div className="box__ghost-container">
      <div className="box__ghost-eyes" style={{
                 transform: `translate(${position.x}%, -${position.y}%)`,
             }}>
        <div className="box__eye-left"></div>
        <div className="box__eye-right"></div>
      </div>
      <div className="box__ghost-bottom">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div className="box__ghost-shadow"></div>
  </div>
  
  <div className="box__description">
    <div className="box__description-container">
      <div className="box__description-title">Whoops!</div>
      <div className="box__description-text">It seems like we couldn&apos;t find the page you were looking for</div>
    </div>
    
    <a href="/" target="_blank" className="box__button mb-6">Go back</a>
    </div> 
  </div></div>
  <Footer />  </div> 
 
  </>

       
   
  );
};

export default Page;

// const CursorChaser = () => {
// {/* <Footer />  </div> </div>
 //     */}
//  <div
//         className="flex items-center justify-center h-screen bg-purple-700"
//         ref={containerRef}
//       >
//         <div className="w-[350px] h-full max-h-[600px] min-h-[450px] bg-l-purple-700 border-2 border-purple-700 rounded-[20px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-[30px]">
//           <div className="p-[15px] absolute left-1/2 top-[30%] -translate-x-1/2">
//             <div className="opacity-20 w-[12px] h-[4px] bg-white absolute bottom-[65px] left-0"></div>
//             <div className="opacity-20 w-[12px] h-[4px] bg-white absolute bottom-[65px] left-0"></div>
//             <div className="opacity-20 w-[12px] h-[4px] bg-white absolute top-[5px] left-[40px]"></div>
//             <div className="opacity-20 w-[12px] h-[4px] bg-white absolute top-[10px] right-[30px]"></div>
//             <div className="opacity-20 w-[12px] h-[4px] bg-white absolute bottom-[65px] right-0"></div>
//             <div className="opacity-20 w-[12px] h-[4px] bg-white absolute bottom-[65px] right-0"></div>
//           </div>
//           <div className="bg-white w-[100px] h-[100px] border-2 border-purple-700 rounded-[100px] absolute m-0 auto">
//             <div className="h-[12px] w-[70px] bg-purple-700 absolute left-[50%] top-[45%]">
//               <div className="w-[12px] h-[12px] bg-purple-700 absolute left-0"></div>
//               <div className="w-[12px] h-[12px] bg-purple-700 absolute right-0"></div>
//             </div>
//               <div className="h-[20px] w-[20px] bg-white border-2 border-purple-700 rounded-[100px] absolute m-0 auto">
//               <div className="h-[20px] w-[20px] bg-white rounded-[100px]"></div>
//               <div className="h-[20px] w-[20px] bg-white rounded-[100px] m-0 -1px"></div>
//               <div className="h-[20px] w-[20px] bg-white rounded-[100px]"></div>
//               <div className="h-[20px] w-[20px] bg-white rounded-[100px] m-0 -1px"></div>
//               <div className="h-[20px] w-[20px] bg-white rounded-[100px]"></div>
//             </div>
//           </div>
//           <div
//             className="absolute top-0 left-0 w-full h-full pointer-events-none"
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <div
//               className="w-[12px] h-[12px] bg-purple-700 rounded-full"
//               style={{
//                 transform: `translate(${position.x}px, ${position.y}px)`,
//               }}
//             ></div>
//           </div>
//         </div>
//   return (
//     <div
//       className="flex items-center justify-center h-screen bg-purple-700"
//       ref={containerRef}
//     >
//       <div className="w-350px h-full max-h-600px min-h-450px bg-l-purple-700 border-2 border-purple-700 rounded-20px absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-30px">
//         <div className="p-15px absolute left-1/2 top-30% -translate-x-1/2">
//            <div className="opacity-20 w-12px h-4px bg-white absolute bottom-65px left-0"></div>
//     <div className="opacity-20 w-12px h-4px bg-white absolute bottom-65px left-0"></div>
//    <div className="opacity-20 w-12px h-4px bg-white absolute top-5px left-40px"></div>
//    <div className="opacity-20 w-12px h-4px bg-white absolute top-10px right-30px"></div>
//     <div className="opacity-20 w-12px h-4px bg-white absolute bottom-65px right-0"></div>
//    <div className="opacity-20 w-12px h-4px bg-white absolute bottom-65px right-0"></div>
//         </div>
//         <div className="bg-white w-100px h-100px border-2 border-purple-700 rounded-100px absolute m-0 auto">
//           <div className="h-12px w-70px bg-purple-700 absolute left-50% top-45%">
//    <div className="w-12px h-12px bg-purple-700 absolute left-0"></div>
//  <div className="w-12px h-12px bg-purple-700 absolute right-0"></div>
//         </div>
//         <div className="h-20px w-20px bg-white border-2 border-purple-700 rounded-100px absolute m-0 auto">
//            <div className="h-20px w-20px bg-white rounded-100px"></div>
//   <div className="h-20px w-20px bg-white rounded-100px m-0 -1px"></div>
//    <div className="h-20px w-20px bg-white rounded-100px"></div>
// <div className="h-20px w-20px bg-white rounded-100px m-0 -1px"></div>
//  <div className="h-20px w-20px bg-white rounded-100px"></div>
//         </div>
//       </div>
//       <div
//         className="absolute top-0 left-0 w-full h-full pointer-events-none"
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <div
//           className="w-12px h-12px bg-purple-700 rounded-full"
//           style={{
//             transform: `translate(${position.x}px, ${position.y}px)`,
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default CursorChaser;
