import bImage from '../assets/barberimage.jpg';
import tipoCorte from '../assets/tipo_corte.jpg';
export default function Home() {
  return (
        <div className="relative">
      {/* Imagen de fondo */}
      <img
        src={bImage}
        alt="Barbería"
        className="w-full max-h-[500px] object-cover"/>

        <div className="p-6">
        <section className="mt-10 px-6">
        <h2 className="text-2xl font-bold mb-4 ml-43">Cortes populares</h2>
        <div className="flex flex-col md:flex-row justify-center items-start">
      <img
        src={tipoCorte}
        alt="Cortes de cabello populares"
        className="w-80 h-auto object-contain mr-40"/>

        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h3 className="text-2xl font-bold mb-4 text-center">Precio de cortes</h3>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-gray-700">cortes</th>
                <th className="px-4 py-2 text-left text-gray-700">precio</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t" >
                <td className="px-4 py-2">corte clasico</td>
                <td className="px-4 py-2">$100</td>
              </tr>
            </tbody>
          </table>
        </div>
</div>
      </section>
      
        </div>
    </div>


  );
}
