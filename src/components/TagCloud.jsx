import React, { useEffect } from "react";
import TagCloud from "TagCloud";
function TextSphere() {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "ReactJS",
        "NodeJs",
        "JavaScript",
        "CSS",
        "Material UI",
        "Tailwind",
        "HTML",
        "MySQL",
      ];
      const options = {
        radius: 300,
        initSpeed: "normal",
        maxSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <div className="flex w-full">
      <div className="flex justify-center items-center">
        <span className="tagcloud text-white text-2xl"></span>
      </div>
    </div>
  );
}

export default TextSphere;
