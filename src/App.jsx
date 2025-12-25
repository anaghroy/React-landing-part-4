import Navbar from './Components/Navbar'
import Rank from './Components/Rank'
import Seamless from './Components/Seamless'
import Services from './Components/Services'
import { logo } from './Data/BrandImage'
import { tableData } from './Data/Table'
import './style.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Rank logo={logo}/>
      <Seamless tableData={tableData}/>
      <Services/>
    </div>
  )
}

export default App
