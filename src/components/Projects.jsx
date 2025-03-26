import React from 'react';
import "../styles/projects.css";
import { FaLink } from "react-icons/fa";

const cards = [
  {
    id: 1,
    video: "src/assets/Projects/Pixabay.mp4",
    title: "Image Search Application",
    content: "Developed a React-based image search application using the Pixabay API.",
    tags: ["React", "Tailwind", "Axios", "React-router", "JavaScript", "Pixabay API"],
    link: "https://pixabay-premdev.netlify.app/"
  },
  {
    id: 2,
    video: "src/assets/Projects/QR Code Generator.mp4",
    title: "QR Code Generator",
    content: "Built a QR code generator that converts any website link into a QR code.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://qr-generator-premdev.netlify.app/"
  },
  {
    id: 3,
    video: "src/assets/Projects/Weather App.mp4",
    title: "Weather Application",
    content: "Developed a real-time weather application that fetches weather data based on the city name entered.",
    tags: ["HTML", "CSS", "JavaScript", "Weather API"],
    link: "https://m-premnath.github.io/Weather-app/"
  },
  {
    id: 4,
    video: "src/assets/Projects/Age Calculator.mp4",
    title: "Age Calculator",
    content: "An application to calculate age based on date of birth.",
    tags: ["Html","CSS","Javascript"],
    link: "https://agecalculator-premdev.netlify.app/"
  },
  {
    id: 5,
    video: "src/assets/Projects/ToDoList.mp4",
    title: "To-Do List App",
    content: "A simple and interactive To-Do List application with CRUD operations.",
    tags: ["React", "JavaScript", "CSS"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="text-2xl md:text-4xl font-bold bungee-shade-regular title">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="border border-gray-300 rounded-lg p-4 hover:shadow-lg card transition-shadow hover:scale-105 hover:border-2 hover:border-blue-500 hover:brightness-100 transition-transform"
          >
            <a href={card.link} target='_blank' className="text-blue-600 hover:underline link">
              <video
                src={card.video}
                loop
                autoPlay
                muted
                className="w-full h-45 object-cover rounded-md mb-4"
              />
            </a>
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600 mb-4">{card.content}</p>
            <div className="flex flex-wrap gap-2 mb-4 tags">
              {card.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm border border-blue-500 text-blue-500 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
        <a 
          href="https://github.com/M-Premnath" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative group overflow-hidden rounded-lg border-1 border-gray-300 hover:border-sky-400/50 hover:border-2 transition-all duration-300 git-card"
        >
          <img 
            src="../src/assets/git.png" 
            alt="GitHub Projects" 
            className="w-full h-100 object-cover transition-all duration-300 brightness-70 group-hover:brightness-[0.3]"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-2 text-white link">
            View More on Github <FaLink className="inline-block" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
