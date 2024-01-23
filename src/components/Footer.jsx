import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"
import "../style/nav.css"

function Footer() {

    const location = useLocation()

  return (
    <footer className="bottom-0 shadow-md bg-gray-900 w-full">
        <div className="w-full p-4 md:py-8 container mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between ">
                <Link
                    to="/"
                    className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                >
                    <img src={logo} alt="Logo" width={150} height={200} />
                </Link>

                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
                    <li>
                        <Link
                            to="/DevKa/"
                            className={`footer me-4 md:me-6 ${location.pathname === "/DevKa/" ? "active" : ""}`}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/DevKa/servicios"
                            className={`footer me-4 md:me-6 ${location.pathname === "/DevKa/servicios" ? "active" : ""}`}
                        >
                            Servicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/DevKa/sobre-nosotros"
                            className={`footer me-4 md:me-6 ${location.pathname === "/DevKa/sobre-nosotros" ? "active" : ""}`}
                        >
                            Sobre Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/DevKa/contacto"
                            className={`footer ${location.pathname === "/DevKa/contacto" ? "active" : ""}`}
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 sm:mx-auto lg:my-8 border-gray-700"/>
            <span className="block text-sm sm:text-center text-gray-400">©2023 Todos los Derechos Reservados</span>
        </div>
      
    </footer>
  )
}

export default Footer


