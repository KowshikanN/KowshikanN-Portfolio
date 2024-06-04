import { skills } from "../assets";
import { collabApps } from "../constants";
import Heading from "./Heading";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
// import { motion } from "framer-motion";

const Skills = () => {
  return (
    <Section id="skills" crosses>
      <div className="container relative z-2">
        <div className="flex justify-center">
          {" "}
          <Heading className="md:max-w-md lg:max-w-2xl" title="Skills" />
        </div>
      </div>
      <div className="container">
        <div className="lg:ml-[21.5rem] xl:w-[38rem] mt-4">
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={skills}
                    width={48}
                    height={48}
                    alt="Skill Icon - Icon by Freepik"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
      <br />
      <br />
    </Section>
  );
};

export default Skills;
