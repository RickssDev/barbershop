import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "../index.css";
import Logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const location = useLocation(); 

  if(location.pathname.includes("admin")){
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      if (window.scrollY > scrollThreshold) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <>
      {isHome && (
        <div
          className={`w-full bg-white text-gray-800 text-sm px-6 py-2 flex flex-col sm:flex-row justify-between items-center shadow-md z-50 fixed top-0 left-0 right-0
                  transform transition-transform duration-300 ease-in-out ${
                    hideTopBar ? '-translate-y-full' : 'translate-y-0'
                  }`}
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold">📞 Llámenos:</span>
            <span className="text-gray-600">929739452</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">⏰ Horario de atención:</span>
            <span className="text-gray-600">Lunes a Viernes desde 8:00 AM a 5:00 PM</span>
          </div>
        </div>
      )}

      <nav
        className={`bg-black/60 text-white px-6 py-3 shadow-md fixed w-full z-40 transition-all duration-300 ease-in-out ${
          isHome
            ? hideTopBar
              ? 'top-0'
              : 'top-[70px] md:top-[36px]'
            : 'top-0'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1>
            <img src={Logo} alt="Logo principal" className="w-full h-13" />
          </h1>
          <ul className="hidden md:flex flex-1 justify-between text-white font-semibold px-50">
            <li>
              <Link to="/" className="px-5 py-2 border border-white rounded hover:bg-white hover:text-black transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/servicios" className="px-5 py-2 border border-white rounded hover:bg-white hover:text-black transition">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/galeria" className="px-5 py-2 border border-white rounded hover:bg-white hover:text-black transition">
                Galería
              </Link>
            </li>
            <li>
              <Link to="/blog" className="px-5 py-2 border border-white rounded hover:bg-white hover:text-black transition">
                Blog
              </Link>
            </li>
          </ul>
          <Link
            to="/reservas"
            className="px-5 py-2 border-1 text-black rounded border-white/40 bg-yellow-600 hover:bg-yellow-600/70 hover:text-black transition"
          >
            Reservar
          </Link>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <ul className="md:hidden flex flex-col mt-4 space-y-4 px-4 text-white font-semibold">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/servicios" onClick={() => setIsOpen(false)}>
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/galeria" onClick={() => setIsOpen(false)}>
                Galería
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
