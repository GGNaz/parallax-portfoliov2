import React, { useEffect } from "react";
// import TagCloud, { TagCloudOptions } from "TagCloud";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
function TextSphere() {
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
  const options = {
          radius: 300,
          initSpeed: "normal",
          maxSpeed: "normal",
          keep: true,
          useContainerInlineStyles: true,
          useItemInlineStyles:true
        };

  return (
    <div className="flex w-full justify-center items-center">
    
        {/* <span className="tagcloud text-white text-2xl"></span> */}
        <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "normal",
        })}
        className="text-white"
        // onClick={(tag: string, ev: MouseEvent) => alert(tag)}
        // onClickOptions={{ passive: true }}
    >
        {[
            "VSCode",
            "NodeJs",
            "ReactJs",
            "Tailwind",
            "Material UI",
            "HTML",
            "JavaScript",
            "CSS",
            "Git",
            "Google Map",
            "S3",
            "ChartJs",
            "Redux",
            "Zustand",
        ]}
    </TagCloud>
    
    </div>
  );
}

export default TextSphere;
