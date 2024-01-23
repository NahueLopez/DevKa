import img from "../assets/Inicio.gif"
import { TypeAnimation } from "react-type-animation"
import { Link } from "react-router-dom"
import laptop from "../assets/laptop.jpg"

function Index() {
  return (
    <>
      <section className = "bg-white">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center h-screen">
          <main className="lg:w-1/2 w-full text-center mb-4 md:mb-0 order-last md:order-first">
            <div className="text black">
              <div className="md:max-w-[800px] md:mt-[-96px] w-full mx-auto flex flex-col justify-center">
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                  Transformá la Esencia de tu Empresa
                </h1>
                <div className="flex justify-center flex-col lg:flex-row items-center">
                  <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                    de manera
                  </p>
                  <TypeAnimation sequence={[
                    "Segura",
                    500,
                    "Rapida",
                    500,
                    "Inteligente",
                    500,
                  ]}
                  speed ={50}
                  className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#52bed7]"
                  wrapper="span"
                  repeat={Infinity}
                  />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">
                   Conéctate con nosotros y recibirás el assesoramient más acertado. Estamos aquí para mejorar tu experiencia 
                </p>
                <Link to="/contacto"
                      className="bg-[#52bed7] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#377d8c] hover:text-white hover:shadow-xl"
                >
                    Contacto
                </Link>
              </div>
            </div>
          </main>
          
          <div className="lg:w-1/3 w-full order-first md:order-last">
                <img src={img} alt="Img" className="mx-auto w-full max-w-xs lg:max-w-lg" />
          </div>
        </div>
      </section>
    
      <section className="bg-[#52bed7] text-center">
        <div className="flex items-center">
          <div className="container mx-auto py-2">
            <h1 className="text-center uppercase text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-6">
              La integración de software potencia la eficiencia, automatiza procesos y asegura la competitividad empresarial. 
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="w-full bg-white py-16 px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4" src={laptop} alt="laptop"/>
              <div className="flex flex-col justify-center ">
                <p className="text-[#52bed7] font-bold"> 
                  Tener un Software
                </p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                  Permite gestionar el análisis de datos de forma centralizada
                </h1>      
                <p>
                  Esto facilita la gestión eficiente y coordinada de todas las actividades en un único lugar, optimizando recursos y asegurando consistencia en los procesos.
                </p>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Index
