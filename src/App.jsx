import Capabilities from "./Components/Capabilities";
import Conversion from "./Components/Conversion";
import Engine from "./Components/Engine";
import Footer from "./Components/Footer";
import Gain from "./Components/Gain";
import Navbar from "./Components/Navbar";
import Rank from "./Components/Rank";
import Seamless from "./Components/Seamless";
import Services from "./Components/Services";
import Shortest from "./Components/Shortest";
import Web from "./Components/Web";
import { achieve } from "./Data/AchiveData";
import { contentData } from "./Data/BoostData";
import { logo } from "./Data/BrandImage";
import { term } from "./Data/CapabiliData";
import { text } from "./Data/ConversionData";
import { icons } from "./Data/developIcon";
import { graph } from "./Data/GraphData";
import { tableData } from "./Data/Table";
import "./style.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <Rank logo={logo} />
      <Seamless tableData={tableData} />
      <Services />
      <Capabilities term={term} />
      <Shortest />
      <Engine graph={graph} />
      <Conversion text={text} achieve={achieve}/>
      <Web icons={icons} contentData={contentData}/>
      <Gain/>
      <Footer/>
    </div>
  );
};

export default App;
