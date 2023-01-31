import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'

import FirstLayer from "./components/FirstLayer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import snakeandladderImg from "./assets/snakeandladder.jpg";
// import taraeat1 from "./assets/taraeat1.JPG";
// import taraeat from "./assets/taraeat.JPG";
// import twitty from "./assets/twitty.jpg";
// import triangle from "./assets/png/triangle.png";
import TextSphere from "./components/TagCloud";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* bg-[#2D2E31] */}
      {/* <Parallax pages={5} className="overflow-y-scroll no-scrollbar">
  
      <FirstLayer/> 
 <SecondLayer/>
   
    </Parallax> */}

      <Parallax
        pages={5}
        className="overflow-y-scroll no-scrollbar bg-[#14141B]"
      >
        {/* <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
  <p className={styles.scrollText}>Scroll down</p>
</ParallaxLayer> */}
        <FirstLayer />
        <ParallaxLayer offset={1} speed={0.5} className="flex w-full h-screen">
          <div className="basis-1/2 flex flex-col p-20 justify-center">
            <div className="text-3xl font-semibold text-white">
              <span className="text-colorTheme">Skills</span> and tools
            </div>
            <div className="text-[#BFBFC1] py-10 w-[70%]">
              For a more <span className="text-colorTheme"> detailed</span>{" "}
              overview, please feel free to check the tools that were used on a
              per-project basis.
            </div>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <TextSphere />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} className="flex flex-col">
          <div className="bg-[#1D1D25] flex h-full">
            <div className="basis-1/2 flex justify-center items-center text-[#BFBFC1]">
              <div className="flex flex-col gap-2">
                <div>Take a look of what Im created and inspired by</div>
                <div><button  className="border border-colorTheme p-2">See more</button></div>
              </div>
            </div>
            <div className="basis-1/2">asdasdasd</div>
          </div>
          <div className="h-full flex">
          <div className="basis-1/2 flex justify-center p-10 items-center text-[#BFBFC1]">
            
                <div className="text-4xl font-semibold">Lets talk about the project</div>
             
            </div>
            <div className="basis-1/2 flex justify-center p-5 items-center">
             <button className="border border-colorTheme p-2 text-[#BFBFC1]">Contact me</button>
            </div>
            </div>
        </ParallaxLayer>
        {/* <SecondLayer/> */}

        {/* <ParallaxLayer
        sticky={{ start: 2, end: 4 }}
        className="flex justify-start md:items-center z-50 "
      >
        {/* <ParallaxLayer sticky={{ start: 1, end: 2 }}>Bag</ParallaxLayer> 
        <div className="flex flex-col justify-start text-white  md:bg-white/60 w-[100%] md:w-[40%] lg:w-[50%] items-center p-5">
         
          <div className="flex md:flex-col flex-row gap-2  w-full">
          <div className="absolute left-2/4">
          <img src={triangle} alt="triangle" className="h-12 w-12 rotate-45"/>
          <img src={triangle} alt="triangle"/>
          </div>
            <div className="md:text-6xl text-3xl font-semibold">My</div>
            <div className="md:text-6xl text-3xl font-semibold">
              Recent
            </div>{" "}
            <div className="text-colorTheme md:text-6xl text-3xl font-semibold">
              {" "}
              Projects
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={1}
        className="flex justify-end items-center"
      >
     
        <div className="flex justify-center md:w-[60%] lg:w-[50%] p-5">
          <div className="p-5 border border-colorTheme rounded-xl">
            <img
              src={snakeandladderImg}
              alt="snakeandladderImg"
              className="h-[50vh] "
            />
            <div className="text-white text-2xl">Snake and Ladder game</div>
            <div>
              Snakes and Ladders is a chance-based board game featuring 100
              squares. Players have to get to the top while dealing with the
              consequences of every dice roll. Historically, the game was used
              to teach children basic moral values. The ladders were
              representative of virtues while the snakes of vice. Today, you
              could see it as a metaphor for life’s journey with all of its
              ups and downs.
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={3}
        speed={1}
        className="flex justify-end items-center "
      >
  
        <div className="flex justify-center w-full md:w-[60%] lg:w-[50%] p-5">
          <div className="flex flex-col p-5 border border-colorTheme rounded-xl gap-2">
            <div className="flex flex-row gap-2">
            <img
              src={taraeat}
              alt="taraeat"
              className="h-[45vh] w-fit md:h-[60vh] "
            />
            <img
              src={taraeat1}
              alt="taraeat1"
              className="h-[45vh] w-fit md:h-[60vh]"
            />
            </div>
            <div className="text-white text-2xl">Tara Eat App</div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={1}
        className="flex justify-end items-center "
      >
      
        <div className="flex justify-center md:w-[60%] lg:w-[50%] p-5 ">
          <div className="flex flex-col p-5 border border-colorTheme rounded-xl gap-2">
            <img
              src={twitty}
              alt="twitty"
              className="h-[50vh] md:h-[60vh] "
            />
            <div className="text-white text-2xl">Twitty</div>
            <div>A twitter base web application.</div>
          </div>
        </div>
      </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

export default App;
