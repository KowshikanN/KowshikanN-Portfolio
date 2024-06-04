import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.0, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Projects = () => {
  return (
    <Section id="projects" className="pt-[12rem] -mt-[5.25rem]" crosses>
      <div className="container relative z-2">
        <div className="flex justify-center">
          {" "}
          <Heading className="md:max-w-md lg:max-w-2xl" title="Projects!" />
        </div>
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <Tilt options={defaultOptions}>
              <a
                href={item.destinationUrl} // Provide the destination URL here
                key={item.id}
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] border border-gray-300" // Added border style here
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
                target="_blank" // Open link in new tab
                rel="noopener noreferrer" // Required for security reasons
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore more
                    </p>
                    <Arrow />
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </a>
            </Tilt>
          ))}
        </div>
      </div>
      <br />
    </Section>
  );
};

export default Projects;
