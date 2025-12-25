import Capabilities from "./Components/Capabilities";
import Engine from "./Components/Engine";
import Navbar from "./Components/Navbar";
import Rank from "./Components/Rank";
import Seamless from "./Components/Seamless";
import Services from "./Components/Services";
import Shortest from "./Components/Shortest";
import { logo } from "./Data/BrandImage";
import { term } from "./Data/CapabiliData";
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
    </div>
  );
};

export default App;
