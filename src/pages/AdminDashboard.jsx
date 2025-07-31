import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [reservas, setReservas] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/api/reservas', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setReservas(res.data);
      } catch (err) {
        setError('No se pudieron cargar las reservas');
      } finally {
        setLoading(false);
      }
    };

    fetchReservas();
  }, []);

  if (loading) {
    return <p className="text-center mt-8">Cargando reservas...</p>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto mt-15">
      <h1 className="text-3xl font-bold mb-6 text-center">Reservas Registradas</h1>

      {error && (
        <p className="text-red-600 text-center mb-4">{error}</p>
      )}

      {reservas.length === 0 ? (
        <p className="text-center">No hay reservas aún.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Cliente</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Email</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Fecha</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Hora</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Servicio</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Comentario</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map(({ id, nombre_cliente, email, fecha, hora, servicio, comentario }) => {
                const fechaFormateada = new Date(fecha).toLocaleDateString('es-MX');
                const horaFormateada = hora.slice(0, 5); // hh:mm

                return (
                  <tr key={id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b border-gray-300">{nombre_cliente}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{email}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{fechaFormateada}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{horaFormateada}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{servicio}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{comentario || '-'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
