import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogPage from './components/Blog';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/galeria" element={<BlogPage />} />
        <Route path="/contacto" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;

