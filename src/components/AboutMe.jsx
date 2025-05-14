import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import ResumePDF from "../../public/assets/Premnath-M.pdf"; // Path to your PDF file
import { FaDownload } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import "../styles/style.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const AboutMe = () => {
  const handleDownload = () => {
    fetch(ResumePDF).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = "Premnath-M.pdf"; // Name for the downloaded file
        link.click();
      });
    });

    // Show toast notification
    toast("Resume Downloaded Successfully!", {
      icon: "✔️",
      style: {
        border: "2px solid rgb(0, 105, 113)",
        padding: "0.5rem 1rem",
        background: "#000000",
        color: "white",
        borderRadius: "15px",
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
          I’m Premnath M., a Full Stack Developer with a BCA and MBA, combining technical skills with business insight. I specialize in frontend development using Vue.js and React.js, and have experience in backend development with MySQL and RESTful APIs.<br/>
          I’ve worked on projects like the IRCTC Settlement Download Page, HRMS Portal upgrades, and Python tools for data extraction. Recently, I’ve been exploring Shopify app development, focusing on UI customization and dynamic product displays.<br/>
          I’m passionate about building clean, responsive interfaces and solving real-world problems with efficient, user-focused solutions. My strengths lie in turning ideas into functional, well-designed applications.
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