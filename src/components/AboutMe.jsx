import React from "react";
const AboutMe = () => {
  return (
    <section id="about" className="w-screen min-h-screen flex items-center justify-center p-5">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-5 text-white-300">
        {/* Left Section */}
        <div className="flex flex-col gap-5 w-full md:w-1/3">
          {/* About Block */}
          <div className="relative flex items-center justify-center h-20 md:h-28 border border-gray-500/80 rounded-4xl">
            <h1 className="text-[12vw] md:text-[4.5vw] xl:text-[5vw] font-bold font-patrick-hand">About</h1>
            <span className="absolute text-[20vw] md:text-[7vw] text-purple-500  font-extrabold opacity-20">Me</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 flex items-center justify-center border border-gray-500/50 rounded-2xl p-8 md:p-14 text-center">
        <div className="flex flex-col items-center gap-5">
            <h1 className="text-2xl md:text-4xl font-bold bungee-shade-regular">About Me</h1>
            <p className="text-lg md:text-2xl leading-relaxed bungee-shade-regular">
              I am a full-stack web developer passionate about building functional and engaging websites. With expertise in front-end and back-end development, I am always eager to learn and improve. My skills include HTML, CSS, JavaScript, React, Node.js, and MongoDB. I enjoy collaborating with teams and solving complex problems to create innovative solutions that enhance user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
