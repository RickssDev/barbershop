import React from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import Clasico from "../assets/corte_clasico.jpeg";
import Afeitado from "../assets/afeitado.jpg";
import Barber from "../assets/barberimage.jpg";
import Footer from '../components/Footer';
export default function Servicios() {
  const servicios = [
    {
      nombre: "Corte Clásico",
      precio: "150.00$",
      duracion: "30 min",
      img: Clasico,
    },
    {
      nombre: "Fade Profesional",
      precio: "180.00$",
      duracion: "35 min",
      img: Afeitado,
    },
    {
      nombre: "Afeitado",
      precio: "120.00$",
      duracion: "25 min",
      img: Clasico,
    },
    {
      nombre: "gasg",
      precio: "120.00$",
      duracion: "25 min",
      img: Clasico,
    },
    {
      nombre: "gawgag",
      precio: "120.00$",
      duracion: "25 min",
      img: Clasico,
    },
  ];

  return (
    <>
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center py-8 px-4 sm:px-6"
    style={{ backgroundImage: `url(${Barber})` }}
    >
      <div className="flex flex-col items-center gap-10 p-4 sm:p-6 mt-20 max-w-3xl bg-white bg-opacity-20 w-full rounded-lg shadow-lg ">
        {servicios.map((servicio) => (
          <div
            key={servicio.nombre}
            className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md w-full overflow-hidden hover:shadow-lg transition duration-300 hover:scale-95 hover:translate-y-[2px]"
          >
            <img
              src={servicio.img}
              alt={servicio.nombre}
              className="w-full sm:w-40 h-60 sm:h-40 object-cover"
            />
            <div className="flex flex-col justify-between p-4 w-full">
              <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                  {servicio.nombre}
                </h3>
                <p className="text-yellow-600 text-lg sm:text-xl font-semibold mt-2 sm:mt-0">
                  {servicio.precio}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
            <div className="flex items-center gap-1">
                <Clock size={16} />
                <p className="text-gray-600 text-sm sm:text-base">{servicio.duracion}</p>
            </div>
            <Link
                to="/reservas"
                className="bg-yellow-600 text-white px-4 py-1 rounded text-sm hover:bg-yellow-700 whitespace-nowrap"
            >
                Reservar
            </Link>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
