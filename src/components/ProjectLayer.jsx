import { ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import snakenladder from "../assets/snakeandladder.png"
import remindme from "../assets/remindme.png"
import taraeatapp from "../assets/taraeatapp.png"
import spectacles1 from "../assets/spectacles1.png"
// import spectacles1 from "../assets/spectacles1.jpg"
// import twitty from "../assets/twitty.jpg"
import { Carousel } from 'react-carousel-minimal';
function ProjectLayer() {
  const data = [
    {
      image: snakenladder,
      caption: `<a  href="https://snake-and-ladder-beta.vercel.app/"
      target="blank"
      rel="noopener noreferrer">
                 Snake and Ladder
                </a>`
    },
    {
      image: remindme,
      caption: "Reminder app"
    },
    {
      image: taraeatapp,
      caption: "Tara Eat"
    },
    {
      image: spectacles1,
      caption: "Spectacles"
    },
    // {
    //   image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    //   caption: "Scotland"
    // },
    // {
    //   image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    //   caption: "Darjeeling"
    // },
    // {
    //   image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    //   caption: "San Francisco"
    // },
    // {
    //   image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    //   caption: "Scotland"
    // },
    // {
    //   image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    //   caption: "Darjeeling"
    // }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
 

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
                <div className='text-justify'>For the demo of specific project, <span className='text-colorTheme'>please click on it</span>.</div>
                {/* <div className="basis-1/3 flex justify-center items-center md:justify-start md:items-start">
                  <button className="border border-colorTheme p-2">
                    See more
                  </button>
                </div> */}
              </div>
            </div>
            <div className="md:basis-1/2   w-full flex flex-col p-10  gap-16">
            <div className="flex justify-center items-center cursor-pointer ">
          
            <Carousel
            data={data}
            time={3000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}

            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            
           
          />
      </div>
            </div>
          </div>
        
        </ParallaxLayer>
    </div>
  )
}

export default ProjectLayer