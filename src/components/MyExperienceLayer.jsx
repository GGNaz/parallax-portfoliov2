import { ParallaxLayer } from '@react-spring/parallax'
import React from 'react'

function MyExperienceLayer() {

  const experienceList = [
    {
      position: "Junior Developer",
      svgIcon: (
      <>
        <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
        </>
      ),
      date: "October 09, 2021 - Present",
      content: (
        <div className='text-lightGray py-2 text-justify'>
        As a junior developer at 
        <span className='text-colorTheme'> <a
                href="https://xyphersolutionsinc.com/"
                target="blank"
                rel="noopener noreferrer"
              > Xypher Solution Inc </a></span>, I am proud of my skills and knowledge in various areas of web development. I have experience in 
        <span className='text-colorTheme'> <a
                href="https://www.gend.co/blog/what-is-api-integration-a-guide-for-non-technical-people"
                target="blank"
                rel="noopener noreferrer"
              > API integration</a></span>,
         which has allowed me to seamlessly connect my projects with external data sources. I also have a strong understanding of layout and design principles, which enables me to create visually appealing and user-friendly interfaces. In addition to these skills, I have a comprehensive knowledge of 
         <span className='text-colorTheme'><a
                href="https://docs.npmjs.com/about-npm"
                target="blank"
                rel="noopener noreferrer"
              > NPM packages </a></span> 
         and their various functions. This knowledge has proved invaluable in streamlining my workflows and making my development process more efficient. Another area I excel in is integratingGoogle Maps into my projects. I have experience using the 
         <span className='text-colorTheme'><a
                href="https://developers.google.com/maps/documentation"
                target="blank"
                rel="noopener noreferrer"
              > Google Maps API </a></span> 
         to display maps and markers. Overall, my skills and knowledge have allowed me to be a productive and effective junior developer.
        </div>
      ),
    },
    {
      position: "Web Developer (Internship)",
      svgIcon: (
      
        <path fill-rule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clip-rule="evenodd" />
  
      ),
      date: "Feb 2019 - May 2019",
      content: (
        <div className='text-lightGray py-2 text-justify'>
          As a web developer at  <span className='text-colorTheme'> <a
                href="https://www.philmech.gov.ph/"
                target="blank"
                rel="noopener noreferrer"
              > Philippine Center for Postharvest Development and
Mechanization (PhilMech)</a></span>, I have acquired skills in layout design, specifically for 
<span className='text-colorTheme'> <a
                href="https://fitsmallbusiness.com/what-is-a-kiosk-examples/"
                target="blank"
                rel="noopener noreferrer"
              > kiosk machines </a></span> and personal data sheets (PDS) using 
              <span className='text-colorTheme'> <a
                href="https://getbootstrap.com/docs/4.0/layout/grid/"
                target="blank"
                rel="noopener noreferrer"
              >Bootstrap grid system</a></span>. Additionally, I have also designed several login pages and certificates, taking into consideration the user interface and experience. The use of Bootstrap grid allowed me to create a responsive and structured layout, ensuring that the PDS and other pages are displayed correctly on various screen sizes. These skills have greatly enhanced my overall web development abilities and have allowed me to create visually appealing and functional web pages.
         </div>
      ),
    }
  ]

  

  return (
    <ParallaxLayer
        
      speed={0.4}
      offset={3}
    
    >
    <div className="flex w-full flex-col gap-10 px-5 lg:px-20">
    <div className="text-3xl font-semibold text-white">My <span className="text-colorTheme">Experience</span></div>
    <div className="flex flex-col gap-2">
      {
        experienceList?.map((data,index)=> {
          const { position, svgIcon, content,date } = data
          return (
            <div className='flex flex-col gap-2' key={index}>
            <div className="flex flex-row gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="bg-lightGray rounded-full p-1 w-7 h-7">{svgIcon}</svg>
        
            <div className='text-white font-medium text-lg'>{position}</div>
         
            </div>
            <div className=' border-l-2 ml-3.5 border-l-lightGray px-5 flex flex-col'>
              <div className='text-[#6B7274] font-light -mt-3'>
                {date}
              </div>
              {content}
            </div>
            </div>
          )
        })
      }
     
    </div>
</div>
</ParallaxLayer>
  )
}

export default MyExperienceLayer