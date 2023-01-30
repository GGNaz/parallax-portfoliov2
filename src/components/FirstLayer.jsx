import { ParallaxLayer,Parallax } from '@react-spring/parallax'
import React from 'react'
import wallpaper from "../assets/wallpaper.jpg";
import photo4 from "../assets/naz1.png";

import javascriptIcon from "../assets/javascript.png";
import tailwindIcon from "../assets/tailwind.png";
import htmlIcon from "../assets/html.png";


function FirstLayer() {
  return (
    <div>
        
        <ParallaxLayer
        
        //   speed={1}
          factor={0}
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/7241628/pexels-photo-7241628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
            // backgroundColor: "#2D2E31",
            backgroundSize: "cover",
            height: "100vh",
           
           
          }}
          className=""
        >
          <div className='h-screen w-full bg-darkColor -z-10 absolute opacity-70' />
          <div className=" h-10 w-full z-40 absolute bottom-0 bg-gradient-to-b from-colorTheme/0 to-darkColor/100" />
          <div className="flex flex-row justify-between p-2 ">
            <div className="text-colorTheme flex flex-row gap-2 justify-center items-center">
              <div>NS</div>
              {/* <img
                  src={tagIcon}
                  alt="tagIcon"
                  className="h-7 w-7"
                /> */}
            </div>
            <div className="flex flex-row gap-2">
              <a
                href="https://www.linkedin.com/in/nazer-somera-b7b598223/"
                target="blank"
                rel="noopener noreferrer"
              >
                <button onclick="buttonHandler()">
                  <div className="text-[#B4B5B8] hover:text-white">
                    LinkedIn
                  </div>
                </button>
              </a>
              <a
                href="https://github.com/GGNaz"
                target="blank"
                rel="noopener noreferrer"
              >
                <button onclick="buttonHandler()">
                  <div className="text-[#B4B5B8] hover:text-white">Github</div>
                </button>
              </a>
              <div>
                <a href="mailto:nazersomera123@gmail.com">
                  <button onclick="buttonHandler()">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="text-colorTheme w-6 h-6 bg-[#56545A] rounded-full p-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex h-screen">
            <div className="text-white  md:basis-3/6 lg:basis-3/5 w-full p-2">
              <div className="flex flex-col justify-center items-center h-screen">
                <div>
                  <div className="text-6xl font-semibold">Hello </div>
                  <div className="text-6xl font-semibold">
                    Im <span className="text-colorTheme">Nazer</span>,
                  </div>
                  <div className="text-6xl font-semibold">Web developer</div>
                  <button className="text-md mt-2 border p-2 rounded-md">
                    View my CV
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex md:basis-3/6 lg:basis-2/5 hidden relative justify-center">
           
                <div className="bg-[#28292D] h-[80vh] w-[80vh] -z-10 bottom-0 inset-16 absolute shadow-[inset_0_-3px_20px_rgba(0,0,0,0.6)] rounded-full"></div>
       
              <ParallaxLayer  offset={0} speed={1.5} className="z-10">
              <div className="bg-[#333438] shadow-lg z-10 absolute bottom-64 right-20 h-20 w-20 rounded-full">
                <img
                  src={htmlIcon}
                  alt="htmlIcon"
                  className="h-20 w-20 p-4"
                />
                </div>
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={1} className="z-10 ">
              <div className="bg-[#333438] shadow-lg z-10 absolute bottom-28 left-10  h-20 w-20 rounded-full">
              <img
                  src={tailwindIcon}
                  alt="reactIcon"
                  className="h-20 w-20 p-3"
                />
                </div>
                
              </ParallaxLayer>
              <ParallaxLayer offset={0} speed={0.5} className="md:z-10 ">
                <div className="bg-[#333438] shadow-lg z-10 absolute bottom-5 right-10 h-28 w-28 rounded-full">
                  <img
                    src={javascriptIcon}
                    alt="javascriptIcon"
                    className="h-28 w-28 p-5 "
                  />
                </div>
              </ParallaxLayer>
              <img
                src={photo4}
                alt="photo3"
                className="h-[80vh] md:flex absolute bottom-12 hidden"
              />
              {/* <ParallaxLayer speed={0.8} className="flex flex-col justify-center items-center">
           <img src="https://img.icons8.com/fluency/48/null/css3.png" className='absolute h-20 '/>
           </ParallaxLayer>
           <img src="https://img.icons8.com/color/48/null/javascript--v1.png" className='absolute h-20 right-7' /> */}
            </div>
            {/* <div className=' text-white font-sans text-5xl font-semibold -mt-14 z-10 '>
            Nazer Somera
           </div> */}
          </div>
        </ParallaxLayer>
    
     
        {/* <ParallaxLayer
          offset={1}
          speed={1}
          factor={4}
          style={{
            backgroundColor: "blue",
            backgroundSize: "cover",
          }}
        ></ParallaxLayer> */}
    </div>
  )
}

export default FirstLayer