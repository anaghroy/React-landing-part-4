import { ArrowUpRight } from "lucide-react";
import React from "react";

const Gain = () => {
  return (
    <div className="main-gain">
      <div className="content">
        <p>
          Gain more
          <ArrowUpRight color="#FF3E00" size={32} strokeWidth={4} />
          <span>with less</span>
        </p>
        <div className="para">
          <p>Save time on the implementation of a digital marketing strategy,
          eliminate guesswork, and optimize your website for exceptional
          performance. <span>All with one team.</span></p>
        </div>
        <div className="button-btn">
        <a href="#">Request a Call</a>
      </div>
      </div>
    </div>
  );
};

export default Gain;
