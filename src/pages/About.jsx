/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Cta from "../component/Cta";
import flag from "../assets/images/flag.png";

const About = () => {
  console.log(flag);
  return (
    <section className=" max-container">
      <h1 className="head-text">
        {" "}
        Hello, I'm{" "}
        <span className=" blue-gradient_text font-semibold drop-shadow">
          {" "}
          SACHIN MEHTA
        </span>{" "}
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          currently pursuing my Master's in Computer Applications from NIT
          Jamshedpur. I take pride in having graduated with distinction from
          NPU, where I not only excelled academically but also gained practical
          experience as a part-time tutor for computer subjects.
        </p>
      </div>

      <div className=" py-10 flex flex-col ">
        <h3 className=" subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skills) => (
            <div className=" block-container w-20 h-20 ">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-none flex justify-center items-center">
                <img
                  src={skills.imageUrl}
                  alt={skills.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">My Journey</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            As a fresher, I stand at the crossroads, eager to contribute, learn,
            and innovate. I'm not just seeking opportunities; I'm on the lookout
            for challenges that will shape my trajectory. My adaptability,
            fast-learning mindset, and collaborative spirit are the tools I
            bring to the table:
          </p>
        </div>

        <div className="mt-12 flex ">
          <VerticalTimeline>
            {experiences.map((experiences) => (
              <VerticalTimelineElement
                icon={
                  <div>
                    <img src={flag} alt=""   className='w-[60%] h-[60%] object-contain ml-3 mt-3'/>
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experiences.iconBg,
                  boxShadow: "none",
                }}
              >
                <div className=" flex justify-center">
                  <h3 className="blue-gradient_text font-semibold drop-shadow">
                    {experiences.title}
                  </h3>
                </div>
                <ul className=" my-5 list-disc ml-5 space-y-2">
                  {experiences.points.map((points, index) => (
                    <li
                      key={`experiences-point-${index}`}
                      className={`text-slate-500 pl-1 ${
                        points === "Let's innovate together!"
                          ? `blue-gradient_text font-serif font-semibold`
                          : `text-slate-500`
                      }`}
                    >
                      {points}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <Cta></Cta>
    </section>
  );
};

export default About;
