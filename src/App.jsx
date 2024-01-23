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
        <Route index element= {<Index/>} />
        <Route path="servicios" element= {<Servicios/>} />
        <Route path="sobre-nosotros" element= {<SobreNosotros/>} />
        <Route path="contacto" element= {<Contacto/>} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
