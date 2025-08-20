import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, Menu } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true); // Sidebar abierto por defecto

  const navItems = [
    { path: "/admin/dashboard", label: "Inicio", icon: <Home size={20} /> },
    { path: "/admin/usuarios", label: "Usuarios", icon: <Users size={20} /> },
    { path: "/admin/reservas", label: "Reservas", icon: <Users size={20} /> },
    { path: "/admin/usuarios2", label: "Precios", icon: <Users size={20} /> },
    { path: "/admin/usuarios3", label: "Servicios", icon: <Users size={20} /> },
    { path: "/admin/usuarios4", label: "Galería", icon: <Users size={20} /> },
    { path: "/admin/usuarios5", label: "Empresa", icon: <Users size={20} /> },
  ];

  useEffect(() => {
    if (location.pathname !== "/admin/dashboard") {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [location.pathname]);

  return (
    <aside
      className={`min-h-screen bg-gray-900 text-gray-200 flex flex-col transition-all duration-300 ${
        isOpen ? "w-64" : "w-28"
      }`}
    >
      
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {isOpen && <h1 className="text-xl font-bold">Mi Dashboard</h1>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-gray-800"
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="flex-1 p-3 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-md transition ${
              location.pathname === item.path
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            {item.icon} {/*F */}
            {isOpen && <span>{item.label}</span>} {/*T */}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
