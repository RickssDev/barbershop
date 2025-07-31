import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HORARIOS_LABORALES = [
  "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00"
];

export default function ReservaForm() {
  const [nombre_cliente, setNombreCliente] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [servicio, setServicio] = useState('');
  const [comentario, setComentario] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [horasOcupadas, setHorasOcupadas] = useState ([]);

  const servicios = ['Corte Clasico', 'Afeitado', 'Corte y Afeitado', 'Barba'];

    // se activa solo si hay fecha seleccionada
    useEffect(() => {
    if (!fecha) {
      setHorasOcupadas([]);
      setHora('');
      return;
    }

    async function fetchHorasOcupadas() {
      try {
        const res = await axios.get(`http://localhost:3000/api/reservas/disponibilidad?fecha=${fecha}`);
        setHorasOcupadas(res.data);
        setHora('');
      } catch (err) {
        setError('Error al cargar horas disponibles');
      }
    }

    fetchHorasOcupadas();
  }, [fecha]);

  const horasDisponibles = HORARIOS_LABORALES.filter(
    h => !horasOcupadas.some(hOcupada => hOcupada.startsWith(h))
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!nombre_cliente || !email || !fecha || !hora || !servicio) {
      setError('Por favor, llena todos los campos obligatorios');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/api/reservas', {
        nombre_cliente,
        email,
        fecha,
        hora,
        servicio,
        comentario,
      });

      setSuccess(res.data.msg);
      setNombreCliente('');
      setEmail('');
      setFecha('');
      setHora('');
      setServicio('');
      setComentario('');
      setHorasOcupadas([]);
    } catch (err) {
      setError(err.response?.data?.msg || 'Error al enviar la reserva');
    }
  };

    const hoy = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Reserva tu servicio</h2>

      {error && (
        <p className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center">{error}</p>
      )}

      {success && (
        <p className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-center">{success}</p>
      )}

      <form onSubmit={handleSubmit}>

        <label className="block mb-2 font-semibold" htmlFor="nombre_cliente">Nombre completo *</label>
        <input
          type="text"
          id="nombre_cliente"
          value={nombre_cliente}
          onChange={(e) => setNombreCliente(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />

        <label className="block mb-2 font-semibold" htmlFor="email">Correo electrónico *</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
          <label className="block mb-2 font-semibold" htmlFor="fecha">Fecha *</label>
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
            required
            min={new Date().toISOString().split('T')[0]} // para no permitir fechas pasadas, se crea un array de valor 2 (0,1).
          />
         <label className="block mb-2 font-semibold" htmlFor="hora">Hora *</label>
        <select
          id="hora"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
          required
          disabled={!fecha || horasDisponibles.length === 0} //desactivar select
        >
          <option value="">Selecciona una hora</option>
          {horasDisponibles.length === 0 && fecha && (
            <option disabled>No hay horas disponibles</option>
          )}
          {horasDisponibles.map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>

        <label className="block mb-2 font-semibold" htmlFor="servicio">Servicio *</label>
        <select
          id="servicio"
          value={servicio}
          onChange={(e) => setServicio(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
          required
        >
          <option value="">Selecciona un servicio</option>
          {servicios.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <label className="block mb-2 font-semibold" htmlFor="comentario">Comentario (opcional)</label>
        <textarea
          id="comentario"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-200"
          rows="3"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Reservar
        </button>
      </form>
    </div>
  );
}
