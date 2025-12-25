import React from "react";

const GraphTable = ({ graph }) => {
  return (
    <div className="graph-table">
      {graph.map((item) => (
        <div className="first-content" key={item.id}>
          <p>
            <span>{item.title}</span> {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GraphTable;
