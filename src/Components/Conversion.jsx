
import paid from "../assets/Images/PaidSearch0.png";
const Conversion = ({ text, achieve }) => {
  return (
    <div className="main-conver">
      <div className="main-content">
        <h1>Conversion Rate Optimization</h1>
        <div className="row">
          {text.map((item) => (
            <div className="first-text" key={item.id}>
              <h1 style={item.style}>{item.title}</h1>
              <p>
                {item.firstdescription} <span>{item.seconddescription}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="underline"></div>
        <div className="paid">
          <h1>Paid Search Advertising</h1>
          <span>Make every dollar count.</span>
          <div className="image">
            <img src={paid} alt="" />
          </div>
        </div>
        <div className="achive">
          {achieve.map((item) => (
            <div className="first" key={item.id}>
              <p>
                {item.title} <span>{item.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conversion;
