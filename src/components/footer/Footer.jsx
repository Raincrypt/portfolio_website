import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
} from "react-icons/ai";

import data from "../../assets/data.json"

const Footer = () => {
    return (
      <footer>
        <div>
          <img
            src={data.personalInfo.image}
            alt="Created By"
          />

          <h2>{data.personalInfo.name}</h2>
          <p>{data.personalInfo.motto}</p>
        </div>

        <aside>
          <h2>Social Media</h2>

          <article>
            <a href={data.personalInfo.linkedin} target={"_blank"}>
              <AiFillLinkedin />
            </a>
            <a href={data.personalInfo.github} target={"_blank"}>
              <AiFillGithub />
            </a>
            <a href={data.personalInfo.instagram} target={"_blank"}>
              <AiFillInstagram />
            </a>
          </article>
        </aside>
      </footer>
    );
};

export default Footer;