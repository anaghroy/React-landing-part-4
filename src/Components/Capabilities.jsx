import { ArrowUpRight } from "lucide-react";
import React from "react";

const Capabilities = ({term}) => {
  return (
    <div className="main-capa">
      <h6>Some of our team's capabilities</h6>
      <div className="main-box">
        {term.map((item, index)=>(
            <div className="content-box" key={index}>
          <ArrowUpRight color="#ce400d" size={48} strokeWidth={3} />
          <p>{item.title}</p>
        </div>
        ))}
        
      </div>
    </div>
  );
};

export default Capabilities;
