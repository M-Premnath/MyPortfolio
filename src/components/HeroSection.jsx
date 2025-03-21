import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RotatingText } from "./RotatingText";
import "../styles/style.css";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-evenly min-h-screen mt-4 md:mt-0 HeroSection">
      {/* Left Side */}
      <div className="text-center md:text-left space-y-6 md:space-y-8 max-w-lg left-container">
        <h1 className="text-3xl md:text-5xl font-bold">Hi, I am Premnath</h1>
        <div className="text-2xl md:text-4xl font-semibold text-sky-600">
          <RotatingText
           texts={["Frontend Developer", "Backend Developer", "Full Stack Developer"]} 
           transition={{ type: "spring", damping: 30, stiffness: 400 }}
           staggerDuration={0.025}
           rotationInterval={3000}
           />
        </div>
        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-4 mt-4 social-icons">
          <a href="#" className="text-3xl  hover:text-black"><FaGithub /></a>
          <a href="#" className="text-3xl  hover:text-blue-700"><FaLinkedin /></a>
          <a href="#" className="text-3xl  hover:text-blue-600"><FaTwitter /></a>
        </div>
      </div>

      {/* Right Side - Animated Blob with Image */}
      <div className="relative w-80 h-80 md:w-96 md:h-96 mt-4 md:mt-0 right-container">
        <img src="src/assets/blob.gif" alt="blob background"   />   
        {/* Profile Image */}
        <img
          src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" 
          alt="Premnath"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-56 h-56 md:w-72 md:h-72 "
        />
      </div>
    </section>
  );
}