import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [modoEditar, setModoEditar] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  const [formUsuario, setFormUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    rol: "ayudante",
    foto: "",
    fotoFile: null,
  });

  // Cargar usuarios al iniciar
  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/usuarios");
      setUsuarios(res.data);
    } catch (err) {
      console.error("Error cargando usuarios:", err);
    }
  };

  const guardarUsuario = async () => {
    try {
      const formData = new FormData();
      formData.append("nombre", formUsuario.nombre);
      formData.append("email", formUsuario.email);
      formData.append("rol", formUsuario.rol);

      if (!modoEditar || formUsuario.password) { //al crear usuario se necesita envair password, si no, solo se envia la password si es nueva
        formData.append("password", formUsuario.password);
      }

      if (formUsuario.fotoFile) {
        formData.append("foto", formUsuario.fotoFile);
      }

      if (modoEditar) {
        await axios.put(
          `http://localhost:3000/api/usuarios/${usuarioEditando.id}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        await axios.post("http://localhost:3000/api/usuarios", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      fetchUsuarios();
      cerrarModal();
    } catch (err) {
      console.error("Error guardando usuario:", err);
      alert("Error al guardar usuario. Revisa la consola.");
    }
  };

  // Eliminar usuario
  const eliminarUsuario = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este usuario?")) return;
    try {
      await axios.delete(`http://localhost:3000/api/usuarios/${id}`);
      fetchUsuarios();
    } catch (err) {
      console.error("Error eliminando usuario:", err);
    }
  };

  const abrirNuevoUsuario = () => {
    setFormUsuario({
      nombre: "",
      email: "",
      password: "",
      rol: "ayudante",
      foto: "",
      fotoFile: null,
    });
    setModoEditar(false);
    setMostrarModal(true);
  };

  const abrirEditarUsuario = (usuario) => {
    setFormUsuario({
      ...usuario,
      fotoFile: null,
      password: "",
    });
    setUsuarioEditando(usuario);
    setModoEditar(true);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setModoEditar(false);
    setUsuarioEditando(null);
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Tabla de Usuarios</h2>
          <button
            onClick={abrirNuevoUsuario}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Nuevo Usuario
          </button>
        </div>

        <table className="min-w-full border-collapse bg-white rounded-md overflow-hidden text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-1 border">#</th>
              <th className="p-1 border">Nombre</th>
              <th className="p-1 border">Correo</th>
              <th className="p-1 border">Contraseña</th>
              <th className="p-1 border">Rol</th>
              <th className="p-1 border">Foto</th>
              <th className="p-1 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr
                key={u.id}
                className="text-center hover:bg-gray-50 align-middle"
              >
                <td className="p-1 border">{u.id}</td>
                <td className="p-1 border">{u.nombre}</td>
                <td className="p-1 border">{u.email}</td>
                <td className="p-1 border">••••••••</td>
                <td className="p-1 border capitalize">{u.rol}</td>
                <td className="p-1 border">
                  {u.foto ? (
                    <img
                      src={`http://localhost:3000${u.foto}`}
                      alt={u.nombre}
                      className="w-10 h-10 rounded-full mx-auto object-cover"
                    />
                  ) : (
                    <img
                      src="https://via.placeholder.com/40"
                      alt="sin foto"
                      className="w-10 h-10 rounded-full mx-auto"
                    />
                  )}
                </td>
                <td className="p-2 border flex items-center justify-center gap-2">
                  <button
                    onClick={() => abrirEditarUsuario(u)}
                    className="w-8 h-8 flex items-center justify-center cursor-pointer bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200"
                    title="Editar"
                  >
                    <FaEdit size={16} />
                  </button>
                  <button
                    onClick={() => eliminarUsuario(u.id)}
                    className="w-8 h-8 flex items-center justify-center cursor-pointer bg-red-100 text-red-600 rounded hover:bg-red-200"
                    title="Eliminar"
                  >
                    <FaTrash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {mostrarModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">
              <h3 className="text-xl font-bold mb-4">
                {modoEditar ? "Editar Usuario" : "Nuevo Usuario"}
              </h3>

              <input
                type="text"
                placeholder="Nombre"
                value={formUsuario.nombre}
                onChange={(e) =>
                  setFormUsuario({ ...formUsuario, nombre: e.target.value })
                }
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="email"
                placeholder="Email"
                value={formUsuario.email}
                onChange={(e) =>
                  setFormUsuario({ ...formUsuario, email: e.target.value })
                }
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={formUsuario.password}
                onChange={(e) =>
                  setFormUsuario({ ...formUsuario, password: e.target.value })
                }
                className="w-full p-2 border rounded mb-2"
              />
              <select
                value={formUsuario.rol}
                onChange={(e) =>
                  setFormUsuario({ ...formUsuario, rol: e.target.value })
                }
                className="w-full p-2 border rounded mb-2"
              >
                <option value="admin">Admin</option>
                <option value="ayudante">Ayudante</option>
              </select>

              <input
                type="file"
                accept="image/*" //jpg, png, etc.
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setFormUsuario({ ...formUsuario, fotoFile: file }); //Verificación de campo
                    const reader = new FileReader(); //preview
                    reader.onload = () => 
                      setFormUsuario((prev) => ({
                        ...prev,
                        foto: reader.result,
                      }));
                    reader.readAsDataURL(file);//convierte a string
                  }
                }}
                className="w-full mb-2"
              />

              {formUsuario.foto && (
                <img
                  src={formUsuario.foto}
                  alt="preview"
                  className="w-16 h-16 rounded-full mb-2"
                />
              )}

              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={cerrarModal}
                  className="bg-gray-400 px-3 py-1 rounded-md hover:bg-gray-500 text-white"
                >
                  Cancelar
                </button>
                <button
                  onClick={guardarUsuario}
                  className="bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-700 text-white"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
