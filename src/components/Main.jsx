import Section from "./Section";
// import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import MainModelCanvas from "./MainModel";
// import { heroIcons } from "../constants";
// import { ScrollParallax } from "react-just-parallax";
// import { useRef } from "react";

import resumePdf from "../assets/resume/Kowshikan_Naveendran_Resume_Fall_2024_Colour.pdf"; // Replace 'your_resume.pdf' with the actual filename

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = resumePdf;
  link.setAttribute("download", "Kowshikan_Naveendran_Resume.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Main = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="main"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">Kowshikan Naveendran</h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-m-2 lg:mb-8">
            Meet Kowshikan, a tech-savvy programmer shaping the future with
            innovative solutions and relentless creativity.
          </p>
          <Button href="#contact-Me" white>
            CONTACT ME!
          </Button>
          <Button className="ml-[2rem]" white onClick={downloadResume}>
            MY RESUME!
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          {/* Replce below div with 3d model! */}
          {/* <div className="h-[1.4rem] bg-n-10 rounded-t-[0.8rem]" /> */}
          <MainModelCanvas />
          <BackgroundCircles />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </Section>
  );
};

export default Main;
