import { useState } from "react";
import { Menu, X } from "lucide-react";
import '../index.css';
export default function Navbar(){
    const[isOpen, setIsOpen] = useState(false) 
    return(
        <nav className="bg-black/60 text-white px-6 py-4 shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Barbería logo</h1>
                <ul className="hidden md:flex flex-1 justify-between text-white font-semibold px-15">
                    <li><a href="#inicio" className="px-5 py-2 border border-white rounded hover:bg-white hover:text-black transition">Inicio</a></li>
                    <li><a href="#blog" className="px-5 py-2 border border-white rounded hover:bg-white hover:text-black transition">Blog</a></li>
                    <li><a href="#galeria" className="px-5 py-2 border border-white rounded hover:bg-white hover:text-black transition">Galería</a></li>
                    <li><a href="#contacto" className="px-5 py-2 border border-white rounded hover:bg-white hover:text-black transition">Contacto</a></li>
                </ul>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            </div>

                {isOpen && (
                <ul className="md:hidden flex flex-col mt-4 space-y-4 px-4 text-white font-semibold">
                <li><a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a></li>
                <li><a href="#servicios" onClick={() => setIsOpen(false)}>Blog</a></li>
                <li><a href="#clientes" onClick={() => setIsOpen(false)}>Galería</a></li>
                <li><a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a></li>
                </ul>
                )}
        </nav>
    );
}