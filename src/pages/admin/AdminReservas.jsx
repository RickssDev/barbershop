import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import { Check } from "lucide-react"; // Importamos palomita

export default function AdminReservas() {
  const [reservas, setReservas] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/api/reservas", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setReservas(res.data);
      } catch (err) {
        setError("No se pudieron cargar las reservas");
      } finally {
        setLoading(false);
      }
    };

    fetchReservas();
  }, []);

  const completarReserva = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/reservas/${id}`);
      alert("Reserva completada exitosamente");
      setReservas(reservas.filter((r) => r.id !== id));
    } catch (err) {
      alert("Error al completar la reserva");
    }
  };

  if (loading) {
    return <p className="text-center mt-8">Cargando reservas...</p>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 overflow-x-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Reservas Registradas
        </h1>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        {reservas.length === 0 ? (
          <p className="text-center">No hay reservas aún.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border border-black text-left">Cliente</th>
                  <th className="py-2 px-4 border border-black text-left">Email</th>
                  <th className="py-2 px-4 border border-black text-left">Fecha</th>
                  <th className="py-2 px-4 border border-black text-left">Hora</th>
                  <th className="py-2 px-4 border border-black text-left">Servicio</th>
                  <th className="py-2 px-4 border border-black text-left">Comentario</th>
                  <th className="py-2 px-2 border border-black text-left">Status</th>
                </tr>
              </thead>
             <tbody>
                {reservas.map(
                  ({ id, nombre_cliente, email, fecha, hora, servicio, comentario }) => {
                    const fechaFormateada = new Date(fecha).toLocaleDateString("es-MX");
                    const horaFormateada = hora.slice(0, 5); // hh:mm

                    return (
                      <tr key={id} className="hover:bg-gray-50">
                        <td className="py-2 px-4 border border-black">{nombre_cliente}</td>
                        <td className="py-2 px-4 border border-black">{email}</td>
                        <td className="py-2 px-4 border border-black">{fechaFormateada}</td>
                        <td className="py-2 px-4 border border-black">{horaFormateada}</td>
                        <td className="py-2 px-4 border border-black">{servicio}</td>
                        <td className="py-2 px-4 border border-black">{comentario || "-"}</td>
                        <td className="py-2 px-4 border border-black">
                          <button
                            onClick={() => completarReserva(id)}
                            className="w-8 h-8 flex items-center justify-center bg-green-500 cursor-pointer text-white rounded-md hover:bg-green-600 transition"
                          >
                            <Check size={16} />
                          </button>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
