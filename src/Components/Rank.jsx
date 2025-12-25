
import BrandLogo from "./BrandLogo";
import { logo } from "../Data/BrandImage";

const Rank = () => {
  return (
    <div className="main-rank">
      <div className="main-content">
        <span>Rank higher,</span>
        <span>convert better.</span>
        <p>
          Fast-growing tech companies trust us with website development and
          traffic acquisition. Will you?
        </p>
        <div className="button">
          <form action="#" className="email-form">
            <input type="email" placeholder="Enter your work email" />
            <button type="submit">Request a Call</button>
          </form>
        </div>
      </div>
        <BrandLogo logo={logo}/>
    </div>
  );
};

export default Rank;
