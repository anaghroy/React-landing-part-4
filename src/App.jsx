import Navbar from './Components/Navbar'
import Rank from './Components/Rank'
import { logo } from './Data/BrandImage'
import './style.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Rank logo={logo}/>
    </div>
  )
}

export default App
