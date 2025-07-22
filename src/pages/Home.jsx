import bImage from "../assets/barberimage.jpg";
import tipoCorte from "../assets/tipo_corte.jpg";
import ClientesS from "../assets/clientes_satisfechos.jpg";
import reseña1 from "../assets/prueba1.jpg";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import { ArrowRight } from "lucide-react";
import Clasico from "../assets/corte_clasico.jpeg";
import Fade from "../assets/fade_normal.jpg";
import Afeitado from "../assets/afeitado.jpg";
import { Link } from "react-router-dom";
import "../index.css";
export default function Home() {
  return (
    <div className="relative bg-black/95 text-white min-h-screen">
      <img
        src={bImage}
        alt="Barbería"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
      />
      <div className="pt-[px]">
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Nuestros Servicios
        </h2>
        <div className="flex flex-wrap justify-center gap-15">
          {[
            {
              nombre: "Corte Clásico",
              desc: "Un corte tradicional y limpio para cualquier ocasión.",
              img:Clasico,
            },
            {
              nombre: "Fade Profesional",
              desc: "Degradado preciso con estilo moderno y elegante.",
              img:Fade,
            },
            {
              nombre: "Afeitado Completo",
              desc: "Afeitado al ras con toalla caliente y cuidado facial.",
              img:Afeitado,
            },
            {
              nombre: "Corte Clásico",
              desc: "Un corte tradicional y limpio para cualquier ocasión.",
              
            },
            {
              nombre: "Fade Profesional",
              desc: "Degradado preciso con estilo moderno y elegante.",
            },
            {
              nombre: "Afeitado Completo",
              desc: "Afeitado al ras con toalla caliente y cuidado facial.",
            },
          ].map((servicio, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-md w-90 px-8 py-20 flex flex-col items-center text-center hover:shadow-lg transition duration-300 hover:scale-95 hover:translate-y-[2px]"
            >
              <img
                src={servicio.img}
                alt={servicio.nombre}
                className="w-60 h-60 object-cover rounded-full shadow-sm mb-4 border-2 border-gray-300"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {servicio.nombre}
              </h3>
              <p className="text-base px-2 text-gray-600 mb-4">{servicio.desc}</p>
              <Link
              to="/servicios"
              className="flex items-center gap-2 text-white bg-yellow-600 hover:bg-yellow-700 px-5 py-2 rounded-full font-medium"
              >
              <ArrowRight className="w-5 h-5" />
              </Link>

            </div>
          ))}
        </div>
      </section>
    </div>

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
      <Footer />
    </div>
  );
}
