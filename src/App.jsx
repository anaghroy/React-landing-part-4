import Capabilities from "./Components/Capabilities";
import Conversion from "./Components/Conversion";
import Engine from "./Components/Engine";
import Navbar from "./Components/Navbar";
import Rank from "./Components/Rank";
import Seamless from "./Components/Seamless";
import Services from "./Components/Services";
import Shortest from "./Components/Shortest";
import { achieve } from "./Data/AchiveData";
import { logo } from "./Data/BrandImage";
import { term } from "./Data/CapabiliData";
import { text } from "./Data/ConversionData";
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
    </div>
  );
};

export default App;
