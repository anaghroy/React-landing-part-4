import Capabilities from './Components/Capabilities'
import Navbar from './Components/Navbar'
import Rank from './Components/Rank'
import Seamless from './Components/Seamless'
import Services from './Components/Services'
import Shortest from './Components/Shortest'
import { logo } from './Data/BrandImage'
import { term } from './Data/CapabiliData'
import { tableData } from './Data/Table'
import './style.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Rank logo={logo}/>
      <Seamless tableData={tableData}/>
      <Services/>
      <Capabilities term={term}/>
      <Shortest/>
    </div>
  )
}

export default App
