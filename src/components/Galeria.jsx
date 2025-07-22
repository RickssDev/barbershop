import React from "react";
import Logo from "../assets/logo.jpeg";
import Footer from '../components/Footer'
export default function Galeria() {
  
  const fotos = [
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
  ];

  return (
    <>
    <div className="max-w-7xl mx-auto p-6 pt-[120px]">
      <h2 className="text-3xl font-bold mb-6 text-center">Galería de Fotos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {fotos.map((foto, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={foto}
              alt={`Foto ${i + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
