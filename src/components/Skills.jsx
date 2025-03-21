import React from "react";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const images = [
    "src/assets/Skills/Html5.png",
    "src/assets/Skills/css.png",
    "src/assets/Skills/Js.png",
    "src/assets/Skills/Bootstrap.png",
    "src/assets/Skills/Tailwind.png",
    "src/assets/Skills/Mui.png",
    "src/assets/Skills/React.png",
    "src/assets/Skills/Redux.png",
    "src/assets/Skills/Node.png",
    "src/assets/Skills/Figma.png",
    "src/assets/Skills/github.png",
  ];

  return (
    <section id="skills" className="py-10">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center font-serif">
        Skills
      </h2>

      {/* Marquee Section */}
      <div className="mt-8">
        <Marquee speed={30} pauseOnHover={true} gradient={true} gradientWidth={0}>
          {images.map((image, index) => (
            <div key={index} className="mx-4">
              <img src={image} alt={`Skill ${index + 1}`} className="h-20 md:h-24" />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Reverse Marquee for Mobile */}
      <div className="mt-8 block md:hidden">
        <Marquee
          speed={30}
          pauseOnHover={true}
          gradient={true}
          gradientWidth={100}
          direction="right"
        >
          {images.slice().reverse().map((image, index) => (
            <div key={index} className="mx-4">
              <img src={image} alt={`Skill ${index + 1}`} className="h-20 md:h-24" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
