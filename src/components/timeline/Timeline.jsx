import React from "react";
import data from "../../assets/data.json";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timeline-box">
      <div className="project-heading">
        <h2 className="project-heading1">PROJECTS</h2>
        <h2 className="project-heading2">TIMELINE</h2>
      </div>
        {
          data.projects.map((item, index) => (
            <TimelineItem
              heading={item.title}
              date={item.date}
              index={index}
              key={item.title}
            />
        ))
        }
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, date, index }) => (
  <div
    className={`timeline-item ${
      index % 2 === 0 ? "left-timeline" : "right-timeline"
    }`}
  >
    <div>
      <h2>{heading}</h2>
      <p>{date}</p>
    </div>
  </div>
);

export default Timeline;