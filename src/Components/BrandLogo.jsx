const BrandLogo = ({ logo }) => {
  console.log(logo);
  return (
    <div className="main-brand">
      {logo.map((item, index) => (
        <div className="first-image" key={index}>
          <img src={item.brandLogo} alt="logo" />
        </div>
      ))}
    </div>
  );
};

export default BrandLogo;
