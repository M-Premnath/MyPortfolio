import React from "react";
import Marquee from "react-fast-marquee";
import "../styles/skills.css";

const Skills = () => {
  const images = [
    "./assets/Skills/Html5.png",
    "./assets/Skills/css.png",
    "./assets/Skills/Js.png",
    "./assets/Skills/Bootstrap.png",
    "./assets/Skills/Tailwind.png",
    "./assets/Skills/Mui.png",
    "./assets/Skills/React.png",
    "./assets/Skills/Node.png",
    "./assets/Skills/Python.png",
    "./assets/Skills/Figma.png",
    "./assets/Skills/Github.png",
  ];

  const getAltText = (imagePath) => {
    return imagePath.split('/').pop().split('.')[0];
  };

  return (
    <section id="skills" className="skills"  style={{ paddingTop: "3rem", height: "70vh" }}>
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold bungee-shade-regular title">Skills</h2>

      {/* Marquee Section */}
      <div className="container">
        <Marquee speed={30} pauseOnHover={true} gradient={true} gradientWidth={0}>
          {images.map((image, index) => (
            <div key={index} className="mx-4 image-container">
              <img src={image} alt={getAltText(image)} className="h-20 md:h-24" />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Reverse Marquee for Mobile */}
      <div className="mt-8 block md:hidden reverse-marquee">
        <Marquee
          speed={30}
          pauseOnHover={true}
          gradient={true}
          gradientWidth={0}
          direction="right"
        >
          {images.slice().reverse().map((image, index) => (
            <div key={index} className="mx-4">
              <img src={image} alt={getAltText(image)} className="h-20 md:h-24" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;