import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return React.createElement(
    "div",
    { className: "flex" },
    // Sidebar
    React.createElement(
      "div",
      {
        className: `fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:inset-auto lg:flex lg:flex-shrink-0`,
      },
      React.createElement(
        "div",
        { className: "p-4" },
        React.createElement("h2", { className: "text-2xl font-bold" }, "My Portfolio"),
        React.createElement(
          "nav",
          { className: "mt-6" },
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              { className: "mb-4" },
              React.createElement("a", { href: "#about", className: "hover:text-gray-400" }, "About Me")
            ),
            React.createElement(
              "li",
              { className: "mb-4" },
              React.createElement("a", { href: "#projects", className: "hover:text-gray-400" }, "Projects")
            ),
            React.createElement(
              "li",
              { className: "mb-4" },
              React.createElement("a", { href: "#skills", className: "hover:text-gray-400" }, "Skills")
            ),
            React.createElement(
              "li",
              { className: "mb-4" },
              React.createElement("a", { href: "#contact", className: "hover:text-gray-400" }, "Contact")
            )
          )
        )
      )
    ),
    // Toggle Button for Mobile
    React.createElement(
      "button",
      {
        onClick: toggleSidebar,
        className: "fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-lg lg:hidden",
      },
      isOpen ? "Close" : "Menu"
    )
  );
};

export default Sidebar;