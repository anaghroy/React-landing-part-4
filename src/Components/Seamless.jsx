
import React from "react";
import Table from "./Table";
import { tableData } from "../Data/Table";

const Seamless = () => {
  return (
    <div className="outer-content">
      <div className="main-content">
        <h1>Why teams rely on entlify</h1>
        <div className="text">
          <p>Seamless onboarding,</p>
          <p>outstanding results.</p>
        </div>
        <div className="para">
          <p>
            Entlify is a digital marketing and web development agency that works
            <br/>with SaaS teams operating in cloud management, <br/>programming,
            cybersecurity, and more.
          </p>
        </div>
        <Table tableData={tableData}/>
      </div>
    </div>
  );
};

export default Seamless;
