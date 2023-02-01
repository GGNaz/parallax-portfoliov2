import { ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import snakenladder from "../assets/snakeandladder.jpg"
import spectacles1 from "../assets/spectacles1.jpg"
import twitty from "../assets/twitty.jpg"

function ProjectLayer() {
  return (
    <div>
         <ParallaxLayer offset={2} speed={0.3} className="flex flex-col">
          <div className="bg-[#1D1D25] flex flex-col md:flex-row h-full w-full">
            <div className="md:basis-1/2  flex justify-center items-center h-full text-[#BFBFC1]">
              <div className="flex md:flex-col gap-2 p-5">
                <div className="text-2xl basis-2/3">
                  Take a look of what Im created and inspired by
                </div>
                <div className="basis-1/3 flex justify-center items-center md:justify-start md:items-start">
                  <button className="border border-colorTheme p-2">
                    See more
                  </button>
                </div>
              </div>
            </div>
            <div className="md:basis-1/2  bg-gray-400  w-full ">
              <div className="grid grid-cols-2 h-full">
                <div className="border flex justify-center items-center cursor-pointer">
                  <img
                    src={snakenladder}
                    alt="snakenladder"
                    className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 h-full w-full"
                  />
                  {/* <button className="absolute justify-center items-center bg-[#1D1D25] text-white p-2">view</button> */}
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
                {/* <div className="border">1</div>
                <div className="border">1</div> */}
              </div>
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