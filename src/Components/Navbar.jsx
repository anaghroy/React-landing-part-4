import { ArrowBigDownDash, ArrowUpLeft } from "lucide-react";
import React from "react";

const Navbar = ({ formRef, navbarRef }) => {
  const handleClick = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className="main-navbar">
      <div className="logo">
        <div className="main-left">
          <div className="icon" ref={navbarRef}>
            <ArrowUpLeft color="#FF3E00" size={40} strokeWidth={3} />
            <h1>entlify</h1>
          </div>

          <div className="service">
            <h1>Services</h1>
            <ArrowBigDownDash color="#FF3E00" size={12} />
          </div>
        </div>
        <div className="button">
          <button onClick={handleClick}>Let's Talk</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
