import bImage from "../assets/barberimage.jpg";
import tipoCorte from "../assets/tipo_corte.jpg";
import ClientesS from "../assets/clientes_satisfechos.jpg";
import reseña1 from "../assets/prueba1.jpg";
export default function Home() {
  return (
    <div className="relative">
      <img
        src={bImage}
        alt="Barbería"
        className="w-full max-h-[500px] object-cover"
      />

      <div className="p-6">
        <section className="mt-10 px-6">
          <div className="flex flex-col md:flex-row justify-center gap-x-12 items-start">
           <div className="flex-shrink-0 mt-6 ml-4">
      <h2 className="text-2xl font-bold">Cortes populares</h2>
    
            <img
              src={tipoCorte}
              alt="Cortes de cabello populares"
              className="w-80 h-[400px] object-contain mt-[-20] mr-40 transform -translate-y-15"
            />
          </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-medium max-w-md mid-h-[400px] flex flex-col justify-between">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Precio de cortes
              </h3>
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left text-gray-700">
                      cortes
                    </th>
                    <th className="px-4 py-2 text-left text-gray-700">
                      precio
                    </th>
                    <th className="px-4 py-2 text-left text-gray-700">
                      Cita
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="px-4 py-2">corte clasico</td>
                    <td className="px-4 py-2">$100</td>
                    <td className="px-4 py-5 "><a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-2 rounded transition">Reservación</a></td>
                  </tr>
                  <tr className="">
                    <td className="px-4 py-2">corte clasico</td>
                    <td className="px-4 py-2">$100</td>
                    <td className="px-4 py-5 "><a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-2 rounded transition">Reservación</a></td>
                   </tr>
                   <tr className="">
                    <td className="px-4 py-2">corte clasico</td>
                    <td className="px-4 py-2">$100</td>
                    <td className="px-4 py-5 "><a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-2 rounded transition">Reservación</a></td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </section>
      <div className="w-[1500px] h-[700px] overflow-hidden ml-[-68px]">
        <section className="relative m-">
          <img 
          src={ClientesS} 
          alt="Clientes satisfechos"
          className="w-full object-cover h-[500px]"
          />
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center">
          <h2 className="text-3xl font-bold text-white/90 drop-shadow-lg">Clientes satisfechos</h2>

          </div>
            <div className="absolute inset-0 flex justify-center items-end gap-x-45 p-8">
      <div className="bg-black/60 p-6 rounded-xl w-[300px]  max-w-md text-white/90 shadow-lg">
        
        <h3 className="text-xl font-semibold text-center mb-5">Carlos Mendoza</h3>
        <img 
          src={reseña1}  // Captura de chat
          alt="Reseña por chat"
          className="w-[200px] h-[200px] object-cover mx-auto border border-gray-400"
        />
      </div>
      <div className="bg-black/60 p-6 rounded-xl w-[300px] max-w-md text-white/90 shadow-lg">
        
        <h3 className="text-xl font-semibold text-center mb-5">Ricardo Radilla</h3>
        <img 
          src={reseña1}  // Captura de chat
          alt="Reseña por chat"
          className="w-[200px] h-[200px] object-cover mx-auto border border-gray-400"
        />
      </div>
      <div className="bg-black/60 p-6 rounded-xl w-[300px] max-w-md text-white/90 shadow-lg">
        
        <h3 className="text-xl font-semibold text-center mb-5">Manuel Serpias</h3>
        <img 
          src={reseña1}  // Captura de chat
          alt="Reseña por chat"
          className="w-[200px] h-[200px] object-cover mx-auto border border-gray-400"
        />
      </div>
    </div>
        </section>
        </div>
      </div>
    </div>
  );
}
