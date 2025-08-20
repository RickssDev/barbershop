import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogPage from './components/Blog';
import Galeria from './components/Galeria';
import Servicios from './components/Servicios';
import AdminLogin from './pages/admin/AdminLogin';
import Reservas from './components/reservas';
import AdminDash from './pages/admin/AdminDashboard';
import AdminReservas from './pages/admin/AdminReservas';
import AdminUsuarios from './pages/admin/AdminUsuarios';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/admin-secret" element={<AdminLogin />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/admin/dashboard" element={<AdminDash />} />
        <Route path="/admin/reservas" element={<AdminReservas />} />
        <Route path="/admin/usuarios" element={<AdminUsuarios />} />
      </Routes>
    </>
  );
}

export default App;

