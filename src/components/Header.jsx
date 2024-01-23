import { useState,useEffect } from "react"
import { Transition } from "@headlessui/react"
import logo from "../assets/Logo.png"
import { Link, useLocation } from "react-router-dom"
import "../style/nav.css"

function Header() {

    const location = useLocation()
    const [ isOpen, setIsOpen ] = useState(false)

    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }

  return (

    <header className="fixed top-0 w-full bg-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2">
        <Link to="/">
            <img src={logo} alt="Logo" width={150} />
        </Link>

        {/* Menú para pantallas moviles */}
        <div className="md:hidden absolute right-0 mr-4 justify-center">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http:/w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h12m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menú de navegacion Pantalla Grande */}
      <nav className="hidden md:flex space-x-4">
        <Link 
            className={`nav-link ${location.pathname === "/DevKa/" ? "active" : ""}`}
            to="/DevKa/"
        >

            Inicio
        </Link>
        <Link
            className={`nav-link ${location.pathname === "/DevKa/servicios" ? "active" : ""}`}
            to="/DevKa/servicios"
        >
            Servicios
        </Link>
        <Link
            className={`nav-link ${location.pathname === "/DevKa/sobre-nosotros" ? "active" : ""}`}
            to="/DevKa/sobre-nosotros"
        >
            Sobre Nosotros
        </Link>
        <Link
            className={`nav-link ${location.pathname === "/DevKa/contacto" ? "active" : ""}`}
            to="/DevKa/contacto"
        >
            Concatco
        </Link>
      </nav>

        {/* Menú de navegacion Pantalla Pequeña */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="trasition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden absolute top-12 right-0 w-full bg-gray-100 mt-5">
          <div className="flex flex-col p-4 space-y-2">
            <Link 
              onClick={toggleMenu}
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              to="/"
            >
                Inicio
            </Link>
            <Link
                onClick={toggleMenu}
                className={`nav-link ${location.pathname === "/servicios" ? "active" : ""}`}
                to="/servicios"
            >
                Servicios
            </Link>
            <Link
                onClick={toggleMenu}
                className={`nav-link ${location.pathname === "/sobre-nosotros" ? "active" : ""}`}
                to="/sobre-nosotros"
            >
                Sobre Nosotros
            </Link>
            <Link
                onClick={toggleMenu}
                className={`nav-link ${location.pathname === "/contacto" ? "active" : ""}`}
                to="/contacto"
            >
                Concatco
            </Link>
          </div>
        </div>
      </Transition>
      </div>
    </header>
  )
}

export default Header
