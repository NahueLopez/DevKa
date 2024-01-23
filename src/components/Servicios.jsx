import v1 from "../assets/Ventaja1.png"
import v2 from "../assets/Ventaja2.png"
import v3 from "../assets/Ventaja3.png"
import v4 from "../assets/Ventaja4.png"
import v5 from "../assets/Ventaja5.png"
import servicios from "../assets/servicios.png"

function Servicios() {
  return (
    <>
      <section className="mx-auto pt-20 lg:pt-40 mb-10">
        <div className="text-center py-auto mx-auto uppercase md:text-3xl text-xl font-bold text-[#52bed7]">
          <h1>Nuestros Servicios</h1>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row text-center items-center justify-between order-last md:order-first">
          <div className="container order-first md:order-last flex flex-col lg:flex-row items-center">
            <div className="text-center md:text-2xl text-xl font-bold w-full px-4 md:px-40">
              Ofrecemos una variedad de servicios, y es importante destacar que cada uno de ellos está diseñado para abordar necesidades específicas de manera especializada.
            </div>
            <img src={servicios} className="rounded-xl mx-auto mt-5 w-full md:w-auto"/>
          </div>
        </div>
      </section>

      <section>
        <div className="py-5 md:text-2xl text-xl text-center justify-end mt-5 text-white bg-[#52bed7] underline">
          Nuestros servicios:
        </div>

        <nav className="flex md:flex-row flex-col gap-5 mx-auto justify-center items-center bg-[#52bed7] pb-5">
          <div>
            <p className="text-center text-xl text-white">
              Diseño
            </p>
            <img src={v1} alt="V1" />
          </div>
          <div>
            <p className="text-center text-xl text-white">
              Consultoria
            </p>
            <img src={v2} alt="V2" />
          </div>
          <div>
            <p className="text-center text-xl text-white">
              Mantenimiento
            </p>
            <img src={v3} alt="V3" />
          </div>
          <div>
            <p className="text-center text-xl text-white">
              Desarrollo
            </p>
            <img src={v4} alt="V4" />
          </div>
          <div>
            <p className="text-center text-xl text-white">
              Analisis
            </p>
            <img src={v5} alt="V5" />
          </div>
  
        </nav>

      </section>
    </>
  )
}

export default Servicios
