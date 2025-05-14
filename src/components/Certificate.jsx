import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/CertificateSlider.css"; // Import CSS file

const certificates = [
  { id: 1, title: "Frontend Developer (React)", image: "./assets/Certificates/Frontend Developer (React).jpg",org:"HackerRank", link: "https://www.hackerrank.com/certificates/02156e874e19" },
  { id: 2, title: "Python", image: "./assets/Certificates/Python.png",org:"Kaggle", link: "https://www.kaggle.com/learn/certification/premnathtm/python" },
  { id: 3, title: "Responsive Web Design", image: "./assets/Certificates/Web design.jpg",org:"freeCodeCamp", link:"https://www.freecodecamp.org/certification/Premnath/responsive-web-design" },
  { id: 4, title: "CSS (Basic)", image: "./assets/Certificates/Css.jpg",org:"HackerRank", link: "https://www.hackerrank.com/certificates/e3ce0bf156ee" },
  { id: 5, title: "HTML Fundamentals", image: "./assets/Certificates/Html.jpg",org:"Coddy tech", link: "https://coddy.tech/certifications/g9HDsm-cTiZhY" },
  { id: 6, title: "ReactJS for Beginners", image: "./assets/Certificates/React.jpg",org:"Simplilearn", link: "https://simpli-web.app.link/e/da2DIrRs1Rb" },
];

const CertificateSlider = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "50px",
    slidesToShow: 2,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="certificate-slider" id="certificate">
      <h2 className="text-2xl md:text-4xl font-bold bungee-shade-regular certificate-title">My Certifications</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {certificates.map((cert) => (
            <div key={cert.id} className="slide">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
              <div className="certificate-card">
                <img src={cert.image} alt={cert.title} className="certificate-img" />
                <h3 className="certificate-name">{cert.title}</h3>
                <p className="certificate-footer">Issued by  {cert.org}</p>
              </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CertificateSlider;
