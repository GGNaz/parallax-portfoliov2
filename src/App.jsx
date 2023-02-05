import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'
import { Player } from "@lottiefiles/react-lottie-player";
import TagCloud from "TagCloud";
import FirstLayer from "./components/FirstLayer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import snakeandladderImg from "../src/assets/snakeandladder.jpg";
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {
         loading ? (<Player
      src='https://assets1.lottiefiles.com/temporary_files/9SxYT7.json'
      className="h-screen w-full"
      loop
      autoplay
    />):(
      <Parallax
      pages={5}
      className=" scrollbar-w-2 scrollbar-thumb-colorTheme scrollbar-thumb-rounded-lg  scrollbar-thin scrollbar-track-transparent bg-[#14141B]"
    >
      <FirstLayer />
      <ParallaxLayer
        offset={1}
        speed={0.2}
        className=" md:flex w-full justify-center items-center"
      >
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
        </div>
      </ParallaxLayer>
      <ProjectLayer />

      <MyExperienceLayer />
    </Parallax>
    )
      }
    
    </div>
  );
}

export default App;
