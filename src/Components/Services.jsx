import design from '../assets/Images/Symmetrical.png'

const Services = () => {
  return (
    <div className="main-service">
      <div className="left-content">
        <span>Our Service</span>
        <div className="para">
          <p>More than </p>
          <p>digital marketing</p>
        </div>
        <div className="text-content">
          <p>Search Engine Optimization</p>
          <p>Web Dev & Maintenance</p>
          <p>Conversion Rate Optimization</p>
          <p>Paid Search Advertising</p>
        </div>
      </div>
      <div className="right-content">
        <img src={design} alt="Symmetrical" />
      </div>
    </div>
  );
};

export default Services;
