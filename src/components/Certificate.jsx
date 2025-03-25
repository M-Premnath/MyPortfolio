import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/CertificateSlider.css"; // Import CSS file

const certificates = [
  { id: 1, title: "React Developer", image: "https://picsum.photos/400/250",org:"Udemy" },
  { id: 2, title: "Frontend Expert", image: "https://picsum.photos/400/250",org:"Udemy" },
  { id: 3, title: "JavaScript Mastery", image: "https://picsum.photos/400/250",org:"Udemy" },
  { id: 4, title: "UI/UX Specialist", image: "https://picsum.photos/400/250",org:"Udemy" },
  { id: 5, title: "Backend Pro", image: "https://picsum.photos/400/250",org:"Udemy" },
];

const CertificateSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
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
    <div className="certificate-slider">
      <h2 className="text-2xl md:text-4xl font-bold bungee-shade-regular certificate-title">My Certifications</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {certificates.map((cert) => (
            <div key={cert.id} className="slide">
              <div className="certificate-card">
                <img src={cert.image} alt={cert.title} className="certificate-img" />
                <h3 className="certificate-name">{cert.title}</h3>
                <p className="certificate-footer">Issued by  {cert.org}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CertificateSlider;
