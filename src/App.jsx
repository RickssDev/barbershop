import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogPage from './components/Blog';
import Galeria from './components/Galeria';
import Servicios from './components/Servicios';
import AdminLogin from './pages/AdminLogin';
import Reservas from './components/reservas';
import AdminDash from './pages/AdminDashboard';

function App() {
  const location= useLocation();
  return (
    <>
    {location.pathname !== '/admin-secret' && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/admin-secret" element={<AdminLogin />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/admin/dashboard" element={<AdminDash />} />
      </Routes>
    </>
  );
}

export default App;

