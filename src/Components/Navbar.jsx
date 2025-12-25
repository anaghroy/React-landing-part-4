import { ArrowBigDownDash, ArrowUpLeft } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="main-navbar">
      <div className="logo">
        <div className="main-left">
          <div className="icon">
            <ArrowUpLeft color="#FF3E00" size={40} strokeWidth={3} />
            <h1>entlify</h1>
          </div>

          <div className="service">
            <h1>Services</h1>
            <ArrowBigDownDash color="#FF3E00" size={12} />
          </div>
        </div>
        <div className="button">
          <a href="#">Let's Talk</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
