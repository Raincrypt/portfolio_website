import React from "react";

const IconContainer = ({skill,icon}) => {
  return (
    <div className="icon-container">
      {icon}
      <span>{skill}</span>
    </div>
  );
};

export default IconContainer;
