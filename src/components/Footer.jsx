import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-bold mb-3">Redes sociales</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              Instagram
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="w-5 h-5" />
              Facebook
            </li>
            <li className="flex items-center gap-2">
              <Youtube className="w-5 h-5" />
              YouTube
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Servicios</h3>
          <ul className="space-y-1">
            <li>Cortes de Barba</li>
            <li>Cortes de Pelo</li>
            <li>Tratamientos</li>
            <li>Promociones</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Ubicaciones</h3>
          <ul className="space-y-1">
            <li>Guerrero, Tecpan.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        <p>Permiso COFEPRIS: 203301201A1416</p>
        <p>Aviso de privacidad · Created · By Rickss . 2025</p>
      </div>
    </footer>
  );
}
