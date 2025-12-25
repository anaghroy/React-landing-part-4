import { Handshake } from "lucide-react";
import bar from "../assets/Images/left.png"

const Web = () => {
  return (
    <div className="main-Web">
      <div className="text">
        <span>Web Development</span>
        <span>& Maintenance</span>
        <div className="para">
          <p>Build flawless websites that convert.</p>
        </div>
        <div className="button">
          <Handshake color="white" />
          <span>Professional Partner</span>
        </div>
      </div>
      <div className="container">
        <div className="left-content">
          <h6>Health score</h6>
          <span>The proportion of error-free pages.</span>
          <div className="image">
            <img src={bar} alt="" />
          </div>
        </div>
        <div className="right-content">
          <h6>Technical issues</h6>
          <span>The number of issues found on crawled pages.</span>
          <div className="stats">
            <div className="card pages">
              <h2>185</h2>
              <div className="bar tall"></div>
              <span>PAGES</span>
            </div>

            <div className="card warnings">
              <h2>15%</h2>
              <div className="bar medium"></div>
              <span>WARNINGS</span>
            </div>

            <div className="card errors">
              <h2>4%</h2>
              <div className="bar small"></div>
              <span>ERRORS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;
