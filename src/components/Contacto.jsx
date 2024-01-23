import contacto from "../assets/contacto.png"
import {FaInstagram, FaLinkedin } from "react-icons/fa"

function Contacto() {
  return (
    <section className='mx-auto pt-20 lg:pt-40 bg-white mt-20 md:mt-0 mb-20'>
      <div className="container mx-auto flex flex-col md:flex-row text-center items-center justify-between">
        <div className="container flex flex-col lg:flex-row items-center">
          <div className="flex flex-col">
            <div className="text-center md:text-2xl text-xl font-bold w-full px-4 md:px-0 text-[#52bed7] mb-5">
              Completa el siguiente formulario y nos pondremos en contacto contigo lo más pronto posible.
            </div>
            <div className="w-full lg:max-w-lg mx-auto mt-10 lg:mt-5">
              <form className="w-full max-w-sm mx-auto lg:text-left">
                <div className="flex mb-4">
                  <div className="mr-4">
                    <label className="text-gray-700 text-sm font-bold mb-4" htmlFor="nombre">
                      Nombre
                    </label>
                    <input
                      className="rounded-md appearance-none bg-transparent border w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none border-[#52bed7]"
                      type="text" id="nombre" placeholder="Nombre" aria-label="nombre" required />
                  </div>
                  <div>
                    <label className="text-gray-700 text-sm font-bold mb-4" htmlFor="apellido">
                      Apellido
                    </label>
                    <input
                      className="rounded-md appearance-none bg-transparent border w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none border-[#52bed7]"
                      type="text" id="apellido" placeholder="Apellido" aria-label="apellido" required />
                  </div>
                </div>
                <div className="mb-4 border-teal-500">
                    <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input 
                      className="rounded-md appearance-none bg-transparent border w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none border-[#52bed7]"
                      type="email" id="email" placeholder="Email" aria-label="email" required />
                </div>
                <div className="mb-4 border-teal-500">
                    <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="empresa">
                      Empresa
                    </label>
                    <input 
                      className="rounded-md appearance-none bg-transparent border w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none border-[#52bed7]"
                      type="text" id="empresa" placeholder="Empresa" aria-label="empresa" required />
                </div>
                <div className="mb-4 border-teal-500">
                    <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">
                      Mensaje
                    </label>
                    <textarea 
                      className="rounded-md appearance-none bg-transparent border w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none border-[#52bed7]"
                      id="mensaje" placeholder="Escribe tu mensaje" aria-label="mensaje" required />
                </div>
                <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                  Enviar
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={contacto} className="rounded-xl mx-auto lg:w-[800px] lg:h-[700px] w-[300px]" alt="Contacto" />
            <h1 className="text-xl font-bold w-full px-4 md:px-40 ">Nuestras Redes Sociales</h1>
            <div className="flex flex-row gap-2 justify-center pb-5">
              <FaInstagram className="hover:cursor-pointer transition-transform transform hover:scale-110" style={{fontSize: '24px', color: '#52bed7'}} />
              <FaLinkedin className="hover:cursor-pointer transition-transform transform hover:scale-110" style={{fontSize: '24px', color: '#52bed7'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
