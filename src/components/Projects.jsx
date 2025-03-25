import React from 'react'
import "../styles/projects.css";
import { FaLink} from "react-icons/fa";

const cards = [
  {
    id: 1,
    image: "https://picsum.photos/200/300",
    title: "Image Search Application",
    content: "Developed a React-based image search application using the Pixabay API..",
    tags: ["React", "Tailwind","Axios","React-router", "Js", "Pixabay API"],
    link: "#"
  },
  {
    id: 2,
    image: "https://picsum.photos/200/300",
    title: "QR Code Generator",
    content: "Built a QR code generator that converts any website link into a QR code",
    tags: ["Html", "Css", "JavaScript"],
    link: "#"
  },
  {
    id: 3,
    image: "https://picsum.photos/200/300",
    title: "Weather Application",
    content: "Developed a real-time weather application that fetches weather data based on the city name entered by th",
    tags: ["Html", "Css","JavaScript", "Weather API"],
    link: "#"
  },
  {
    id: 4,
    image: "https://picsum.photos/200/300",
    title: "Card Title 4",
    content: "This is a brief description of the fourth card.",
    tags: ["Development", "Programming", "CSS"],
    link: "#"
  },
  {
    id: 5,
    image: "https://picsum.photos/200/300",
    title: "Card Title 4",
    content: "This is a brief description of the fourth card.",
    tags: ["Development", "Programming", "CSS"],
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
          className="border border-gray-300 rounded-lg p-4 hover:shadow-lg card transition-shadow hover:scale-105 hover:border-2 hover:border-blue-500 hover:brightness-100  transition-transform  "
        >
          <a
            href={card.link}
            className="text-blue-600 hover:underline link"
          >
            <img
            src={card.image}
            alt={card.title}
            className="w-full h-45 object-cover rounded-md mb-4 filter brightness-70 hover:brightness-100 transition-filter"
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
      href="../assets/git.png" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative group overflow-hidden rounded-lg  border-1 border-gray-300 hover:border-sky-400/50 hover:border-2 transition-all duration-300 git-card"
    >
      <img 
        src="../src/assets/git.png" 
        alt="GitHub Projects" 
        className="w-full h-100 object-cover transition-all duration-300 brightness-70 group-hover:brightness-[0.3] "
      />
      <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-2 text-white link">
        View More on Github <FaLink className="inline-block" />
      </div>
    </a>
    </div>
  </section>
    
  )
}

export default Projects