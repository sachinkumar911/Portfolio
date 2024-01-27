import { Link } from "react-router-dom";
import {arrow} from "../assets/icons"
const InfoBox = ({ text, link, btntext }) =>(
  <div className="info-box">
   <p className="font-medium sm:text-xl text-center"> {text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {
        btntext
      }
      <img src={arrow} alt="" className="w-4 h-4 object-contain" />
    
    </Link>
  </div>
);


const rendercontent = {
  1: <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"> Hi, I am <span className=" font-semibold">SACHIN MEHTA </span> 👋
  <br />
  I'm a passionate Full Stack  web developer 
  <br />
 <span className="font-semibold ">I DESIGN YOUR DREAMS INTO A NEW REALITY</span> 
   </h1>,
  2:(
    <InfoBox
      text={`I'm a passionate web developer currently pursuing MCA from NIT Jamshedpur. With a strong foundation in web development and a diverse skill set.`}
      link="/about"
      btntext={`Learn more`}
    />
  ),
  3: (
    <InfoBox
      text={`Need a Project done or looking for a dev ? I am just a few keystrokes away `}
      link="/contact"
      btntext={`Lest's Talk`}
    />
  ),
  4: (
    <InfoBox
      text={`Led multiple projects to success over the years.Curious about the impact? `}
      link="/projects "
      btntext={`Visit My Portfoilo`}
    />
  ),
};


const HomeInfo = ({ currentStage }) => {
  return rendercontent[currentStage] || null;
};

export default HomeInfo;
