import React from "react";

const Table = ({ tableData }) => {
  return (
    <div className="main-table">
      {tableData.map((item, index) => (
        <div className="part">
          <div className="content" key={index}>
            <h6>{item.title}</h6>
            <p>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
