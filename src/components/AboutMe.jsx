import React from "react";
import "../styles/style.css";
import { FaDownload } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const AboutMe = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/src/assets/Premnath-M.pdf'; // Path to your PDF file
    link.download = 'Premnath-M.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show toast notification
    toast('Resume Downloaded Successfully!', {
      icon: '✔️',
      style: {
        border: '2px solid rgb(0, 105, 113)',
        padding: '0.5rem 1rem',
        background: '#000000',
        color: 'white',
        borderRadius: '15px',
      },
    });
  };

  return (
    <section id="about" className="w-screen min-h-screen flex items-center justify-center p-5" style={{ paddingTop: "3rem", height: "100vh" }}>
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-5 text-white-300">
        {/* Left Section */}
        <div className="flex flex-col gap-5 w-full md:w-1/3">
          <div className="relative flex items-center justify-center h-20 md:h-28 border-2 border-gray-500/80 rounded-4xl">
            <h1 className="text-[12vw] md:text-[4.5vw] xl:text-[5vw] font-bold font-patrick-hand">About</h1>
            <span className="absolute text-[20vw] md:text-[7vw] text-purple-500 font-extrabold opacity-20">Me</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 flex items-center justify-center border border-gray-500/50 rounded-2xl p-8 md:p-14 text-center right-section">
          <h1 className="text-2xl md:text-4xl font-bold bungee-shade-regular">About Me</h1>
          <p className="text-base md:text-lg leading-relaxed">
          I’m Premnath M., a Full Stack Developer with a BCA and an MBA, combining technical skills with business insight. I specialize in frontend development using Vue.js and React.js, with backend experience in MySQL and RESTful APIs. My projects include the IRCTC Settlement Download Page, HRMS Portal upgrades, and Python-based automation tasks. I focus on building clean, responsive, and user-friendly applications. I'm also exploring Shopify app development, UI customization with Tailwind CSS, and automation using Selenium. I’m passionate about continuous learning and enjoy tackling challenges that help me grow as a developer and contribute meaningful solutions.
          </p>
          <button 
            className="border-2 cursor-pointer border-purple-400/50 rounded-2xl px-4 py-2 hover:bg-purple-400/20 transition-colors flex items-center gap-2"
            onClick={handleDownload}
          >
            Download Resume <FaDownload color="teal"/>
          </button>
          <Toaster position="bottom-right" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;