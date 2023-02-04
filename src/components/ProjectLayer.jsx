import { ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import snakenladder from "../assets/snakeandladder.png"
// import spectacles1 from "../assets/spectacles1.jpg"
// import twitty from "../assets/twitty.jpg"

function ProjectLayer() {
  return (
    <div>
         <ParallaxLayer offset={2} speed={0.3} className="flex flex-col">
          <div className="bg-[#1D1D25] flex flex-col md:flex-row h-full w-full">
            <div className="md:basis-1/2  flex justify-center items-center h-full text-[#BFBFC1]">
              <div className="flex flex-col gap-4 p-5 lg:p-20">
                <div className="basis-2/3 text-3xl font-semibold">
                  Featured <span className='text-colorTheme '>Projects</span>
                </div>
                <div className='text-justify'>Created as a part of the learning process, the goal was to build modern, responsive and useful web applications.</div>
                <div className='text-justify'>To find out more details about a specific project, <span className='text-colorTheme'>please chick on it</span>.</div>
                {/* <div className="basis-1/3 flex justify-center items-center md:justify-start md:items-start">
                  <button className="border border-colorTheme p-2">
                    See more
                  </button>
                </div> */}
              </div>
            </div>
            <div className="md:basis-1/2   w-full flex flex-col p-10  gap-16">
            <div className="flex justify-center items-center cursor-pointer ">
                  <img
                    src={snakenladder}
                    alt="snakenladder"
                    className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 h-full w-full"
                  />
                   </div>
                   <div className='flex flex-row justify-center items-center gap-4'>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="text-lightGray w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  <div className='flex flex-row justify-center items-center'>
                  <li className='text-4xl  ml-5 text-colorTheme '/>
                <li className='text-4xl ml-5 text-lightGray'/>
                <li className='text-4xl ml-5  text-lightGray'/>
                </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="text-lightGray w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>


                   </div>
              {/* <div className="grid grid-cols-2 h-full">
                <div className="border flex justify-center items-center cursor-pointer">
                  <img
                    src={snakenladder}
                    alt="snakenladder"
                    className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 h-full w-full"
                  />
                   </div>
                <div className="borderflex justify-center items-center cursor-pointer">
                <img
                    src={spectacles1}
                    alt="spectacles1"
                    className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 h-full w-full"
                  />
                </div>
                <div className="border flex justify-center items-center cursor-pointer">
                <img
                    src={twitty}
                    alt="twitty"
                    className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 h-full w-full"
                  />
                </div>
                <div className="border  flex justify-center items-center cursor-pointer flex-row hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150">
                <img
                    src={snakenladder}
                    alt="snakenladder"
                    className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 h-full w-full"
                  />
                </div>
              
              </div> */}
            </div>
          </div>
          {/* <div className="h-full flex">
            <div className="basis-1/2 flex justify-center p-10 items-center text-[#BFBFC1]">
              <div className="text-4xl font-semibold">
                Lets talk about the project
              </div>
            </div>
            <div className="basis-1/2 flex justify-center p-5 items-center">
              <button className="border border-colorTheme p-2 text-[#BFBFC1]">
                Contact me
              </button>
            </div>
          </div> */}
        </ParallaxLayer>
    </div>
  )
}

export default ProjectLayer