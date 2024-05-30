"use client"
import React,{useEffect,useRef,useState} from 'react'
import "../app/notFoundStyles.css";

type Props = {}

const ErrorPageBody = (props: Props) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
  
    useEffect(() => {
      const handleMouseMove = (event: any) => {
        const { clientX, clientY } = event;
        const pageX = document.documentElement.clientWidth;
        const pageY = document.documentElement.clientHeight;
        const xAxis = (clientX / pageX) * 100 - 100;
        const yAxis = ((pageY / 2 - clientY) / pageY) * 300;
        setPosition({ x: xAxis, y: yAxis });
      };
  
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
  return (
    <div className="h-[600px] w-full relative">
    <div
      className="box !bg-gradient-to-t from-gray-800 to-gray-900 "
      ref={containerRef}
    >
      <div className="box__ghost ">
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>

        <div className="box__ghost-container">
          <div
            className="box__ghost-eyes"
            style={{
              transform: `translate(${position.x}%, -${position.y}%)`,
            }}
          >
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
          <div className="box__description-text">
            It seems like we couldn&apos;t find the page you were looking
            for
          </div>
        </div>

        <a href="/" target="_blank" className="box__button mb-6">
          Go back
        </a>
      </div>
    </div>
  </div>
  )
}

export default ErrorPageBody