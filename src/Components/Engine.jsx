import React from "react";
import graphimage from "../assets/Images/graph.png";
import { CircleSmall } from "lucide-react";
import GraphTable from "./GraphTable";

const Engine = ({ graph }) => {
  return (
    <div className="main-engine">
      <div className="content">
        <h1>Search Engine</h1>
        <h1>Optimization</h1>
      </div>
      <div className="span">
        <p>Ensure your SEO works</p>
        <p>beyond algorithms.</p>
      </div>
      <div className="main-image">
        <div className="image">
          <img src={graphimage} alt="graphimage" />
        </div>
      </div>
      <div className="button-text">
        <div className="before">
          <CircleSmall className="icon-bg" color="#858585" size={16} />
          <p>Before Entlify</p>
        </div>
        <div className="before">
          <CircleSmall className="icon-org" color="#95310e" size={16} />
          <CircleSmall className="icon-org2" color="#3CC7E4" size={16} />
          <p>After Entlify</p>
        </div>
      </div>
      <GraphTable graph={graph} />
    </div>
  );
};

export default Engine;
