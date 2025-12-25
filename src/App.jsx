import Navbar from './Components/Navbar'
import Rank from './Components/Rank'
import Seamless from './Components/Seamless'
import { logo } from './Data/BrandImage'
import { tableData } from './Data/Table'
import './style.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Rank logo={logo}/>
      <Seamless tableData={tableData}/>
    </div>
  )
}

export default App
