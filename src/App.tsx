import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import { LinksData } from './Data/LinksData'
import Sections from './Sections/sections'

function App() {


  return (
    <>
      <NavBar Logo='/assests/images/NavBar/Logo.png' items={LinksData} LogINButton="Login" MenuIcon='/assests/images/NavBar/Menu Icon.svg' CloseIcon="/assests/images/NavBar/Icon close.svg" />
      <Sections />
      <Footer Logo='/assests/images/NavBar/Logo.png' Description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempusfelis vitae sit est quisque.' />

    </>
  )
}

export default App
