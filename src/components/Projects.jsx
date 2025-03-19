import React from 'react'
import "../styles/projects.css";
const cards = [
  {
    id: 1,
    image: "https://picsum.photos/200/300",
    title: "Card Title 1",
    content: "This is a brief description of the first card.",
    tags: ["React", "Tailwind", "UI"],
    link: "#"
  },
  {
    id: 2,
    image: "https://picsum.photos/200/300",
    title: "Card Title 2",
    content: "This is a brief description of the second card.",
    tags: ["Frontend", "Design", "UX"],
    link: "#"
  },
  {
    id: 3,
    image: "https://picsum.photos/200/300",
    title: "Card Title 3",
    content: "This is a brief description of the third card.",
    tags: ["JavaScript", "Components", "Web"],
    link: "#"
  },
  {
    id: 4,
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
    </div>
  </section>
    
  )
}

export default Projects