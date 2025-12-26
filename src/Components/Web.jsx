import { Handshake } from "lucide-react";
import bar from "../assets/Images/left.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Boost from "./Boost";
import { contentData } from "../Data/BoostData";
const Web = ({ icons }) => {
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
      {/**Grid */}
      <div className="container">
        <div className="left-content">
          <h6>Health score</h6>
          <span>The proportion of error-free pages.</span>
          <div className="image">
            <img src={bar} alt="bar-graph" />
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
      <div className="develop">
        <span>Develop ON</span>
        {icons.map((item) => (
          <div className="button" key={item.id}>
            <FontAwesomeIcon icon={item.icon} color={item.color} />
            <span>{item.label}</span>
          </div>
        ))}
        <div className="reach">
          <p>
            <span>Reach out to our team</span> for a quote on custom website
            development.
          </p>
        </div>
      </div>
      <Boost contentData={contentData}/>
    </div>
  );
};

export default Web;
