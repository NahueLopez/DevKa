import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Index from "./components/Index"
import Servicios from "./components/Servicios"
import SobreNosotros from "./components/SobreNosotros"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"

function App() {
  

  return (
    <BrowserRouter>

      <Header />
      
      <Routes>
        <Route path="/DevKa/" element= {<Index/>} />
        <Route path="/DevKa/servicios" element= {<Servicios/>} />
        <Route path="/DevKa/sobre-nosotros" element= {<SobreNosotros/>} />
        <Route path="/DevKa/contacto" element= {<Contacto/>} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
