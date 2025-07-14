import bImage from "../assets/barberimage.jpg";
import tipoCorte from "../assets/tipo_corte.jpg";
import ClientesS from "../assets/clientes_satisfechos.jpg";
import reseña1 from "../assets/prueba1.jpg";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import "../index.css";
export default function Home() {
  return (
    <div className="relative bg-black/95 text-white min-h-screen">
      <img
        src={bImage}
        alt="Barbería"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
      />

      <div className="pt-[80px]">
        <section className="mt-10 px-6">
          <div className="flex flex-col md:flex-row justify-center gap-15 items-start">
            <div className="flex-shrink-0 mt-6 ml-4">
              <h2 className="text-2xl font-bold">Cortes populares</h2>

              <img
                src={tipoCorte}
                alt="Cortes de cabello populares"
                className="w-full max-w-sm h-auto object-contain mt-4"
              />
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Precio de cortes
              </h3>
              <table className="w-full table-auto border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-950">
                    <th className="px-4 py-2 text-left text-gray-700">
                      cortes
                    </th>
                    <th className="px-4 py-2 text-left text-gray-700">
                      precio
                    </th>
                    <th className="px-4 py-2 text-left text-gray-700">Cita</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="px-2 py-1">corte clasico</td>
                    <td className="px-2 py-1">$100</td>
                    <td className="px-4 py-5 ">
                      <a
                        href="#"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs px-3 py-1 rounded transition"
                      >
                        Reservación
                      </a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 py-1">corte clasico</td>
                    <td className="px-2 py-1">$100</td>
                    <td className="px-4 py-5 ">
                      <a
                        href="#"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs px-3 py-1 rounded transition"
                      >
                        Reservación
                      </a>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="px-2 py-1">corte clasico</td>
                    <td className="px-2 py-1">$100</td>
                    <td className="px-4 py-5 ">
                      <a
                        href="#"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs px-3 py-1 rounded transition"
                      >
                        Reservación
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <div className="w-full overflow-hidden">
          <section className="relative w-full mt-10">
            <img
              src={ClientesS}
              alt="Clientes satisfechos"
              className="w-full object-cover min-h-[500px]"
            />
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-center z-10">
              <h2 className="text-3xl font-bold text-white/90 drop-shadow-lg">
                Clientes satisfechos
              </h2>
            </div>
            <div className="absolute top-[110px] left-0 right-0 z-10 w-full px-4">
              <Carousel />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
