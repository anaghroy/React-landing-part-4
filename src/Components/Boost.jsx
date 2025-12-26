import React from "react";

const Boost = ({ contentData }) => {
  return (
    <div className="main-flex">
      {contentData.map((item, index) => (
        <div className="content" key={index}>
          <p>
            <span>{item.highlight}</span>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Boost;
