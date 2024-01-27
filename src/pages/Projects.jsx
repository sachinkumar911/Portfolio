/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {  projects } from "../constants";
import proj from "../assets/images/projects.png";




const Projects = () => {
  return  <section className=" max-container ">
  <h1 className="head-text">
    {" "}
    My
    <span className=" blue-gradient_text font-semibold drop-shadow">
      {" "}
      Projects
    </span>{" "}
  </h1>

  <div className="mt-5 flex flex-col gap-3 text-slate-500">
    <p>
    Embarking on my MCA journey has been a thrilling expedition into the realms of technology and innovation. Across the semesters, I've woven a tapestry of projects that not only showcase my evolving skills but also reflect my dedication to pushing the boundaries of what's possible. Join me in exploring this digital odyssey, where each project is a milestone, and every line of code tells a story of growth and ingenuity.
    </p>
  </div>

    <div className="mt-12 flex">
      <VerticalTimeline>
        {projects.map((projects)=>(
          <VerticalTimelineElement className="  "
          icon={
            <div>
              <img src={proj} alt=""   className='w-[80%] h-[80%] object-contain ml-1 mt-1'/>
            </div>
          }
          contentStyle={{
            borderBottom: "8px",
            borderStyle: "solid",
            borderBottomColor: "#bafdba",
            boxShadow: "none",
          }}
          
          >
            <div className="flex justify-center">
            <h3 className="blue-gradient_text font-semibold drop-shadow">
                    {projects.name}
                  </h3>
            </div>
            <div className=" font-serif flex justify-center ">{projects.description}</div>
            <a href={projects.link} className="font-serif flex justify-center btn">Check out</a>
          </VerticalTimelineElement>
        ))}

      </VerticalTimeline>
    </div>
  </section>
};

export default Projects;
