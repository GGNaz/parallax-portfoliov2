import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'
import TagCloud from "TagCloud";
import FirstLayer from "./components/FirstLayer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import snakeandladderImg from "../src/assets/snakeandladder.jpg";
// import taraeat1 from "../src/assets/taraeat1.jpg";
// import taraeat from "../src/assets/taraeat.jpg";
// import twitty from "../src/assets/twitty.jpg";
// import triangle from "../src/assets/png/triangle.png";
// import spectacles from "../src/assets/spectacles1.jpg";
import TextSphere from "./components/TagCloud";
import { spectacles } from "./components/Spectacles";
import ProjectLayer from "./components/ProjectLayer";
import MyExperienceLayer from "./components/MyExperienceLayer";

function App() {
  const [count, setCount] = useState(0);
  // useEffect(() => {

  //   return () => {
  //     const container = ".tagcloud";
  //     const texts = [
  //       "ReactJS",
  //       "NodeJs",
  //       "JavaScript",
  //       "CSS",
  //       "Material UI",
  //       "Tailwind",
  //       "HTML",
  //       "MySQL",
  //     ];
  //     const options = {
  //       radius: 300,
  //       initSpeed: "normal",
  //       maxSpeed: "normal",
  //       keep: true,
  //       useContainerInlineStyles: true,
  //       useItemInlineStyles:true
  //     };

  //     TagCloud(container, texts, options);
  //   };
  // }, []);
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
        <ParallaxLayer offset={1} speed={0.2} className=" md:flex w-full justify-center items-center">
          <div className="flex md:basis-1/2 flex-col p-5 md:p-10 lg:p-20 md:gap-5 justify-center">
            <div className="text-3xl font-semibold text-white">
              <span className="text-colorTheme">Skills</span> and tools
            </div>
            <div className="text-[#BFBFC1] py-5 md:py-10 w-full md:w-[70%]">
              For a more <span className="text-colorTheme"> detailed</span>{" "}
              overview, please feel free to check the tools that Im used on a
              per-project basis.
            </div>
          </div>
          <div className=" md:basis-1/2 flex w-full justify-center items-center">
            <TextSphere />

            {/* <div className="flex w-full">
      <div className="flex justify-center items-center">
        <span className="tagcloud text-white text-2xl"></span>
      </div>
    </div> */}
          </div>
        </ParallaxLayer>
       <ProjectLayer/>
        {/* <SecondLayer/> */}
   
       <MyExperienceLayer/>
       
       {/* <ParallaxLayer
        offset={4}
        speed={1}
        horizontal={true}
        className="bg-blue-500"
      >
        123123
      </ParallaxLayer> */}
      
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
