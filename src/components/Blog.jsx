// src/components/Blog.jsx
import blog1 from "../assets/prueba1.jpg";
import blog2 from "../assets/prueba1.jpg";
import blog3 from "../assets/prueba1.jpg";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Cómo cuidar tu barba correctamente",
      description: "Descubre los mejores productos y técnicas para mantener una barba limpia, hidratada y con estilo.",
      image: blog1,
      link: "#"
    },
    {
      id: 2,
      title: "Tendencias de cortes masculinos 2025",
      description: "Explora los estilos más populares y modernos que dominarán este año en el mundo del grooming.",
      image: blog2,
      link: "#"
    },
    {
      id: 3,
      title: "Productos esenciales para tu rutina de barbería",
      description: "Conoce los productos clave que todo hombre debe tener para mantener su look impecable.",
      image: blog3,
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-gray-100" id="blog">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Blog de Barbería</h2>
        <p className="text-center text-gray-600 mb-10">
          Consejos, tendencias y novedades del mundo del grooming masculino
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a href={post.link} className="text-blue-500 font-semibold hover:underline">Leer más →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
