import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";

import myImage from "../../assets/Portfolio-img.png";
import myResume from "../../assets/mousom_resume.pdf";

const Home = () => {
  const animationsMyIntro = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        {/* Section 1 */}
        <div>
          <motion.h1 {...animationsMyIntro.h1}>
            Hi, I am <br /> Mousom Sarkar
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "An Engineer", "A Computer Geek"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
              cursor: "",
              cursorClassName: "typewriter-cursor",
            }}
          />
          <div>
            <a
              href="mailto:mousoms2204@gmail.com?subject=A Job Opportunity from [Company Name / Employer Name]"
              className="hire-me-btn"
            >
              Hire Me
            </a>
            <a href="#timeline" className="project-btn">
              Projects <BsArrowUpRight />
            </a>
          </div>
          <div>
            <a
              href={myResume}
              download="Mousom_Resume"
              target="_blank"
              className="resume-btn"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section>
        <img src={myImage} alt="My Image" />
      </section>
    </div>
  );
};

export default Home;
