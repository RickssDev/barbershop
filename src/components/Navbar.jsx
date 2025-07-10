export default function Navbar(){

    return(
        <nav className="bg-black/60 text-white px-6 py-4 shadow-md fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Barbería logo</h1>
                <ul className="flex space-x-45 mx-auto">
                    <li><a href="#" className="hover:text-gray-400 px-6 py-2 border border-white rounded hover:bg-white  transition">Inicio</a></li>
                    <li><a href="#" className="hover:text-gray-400 px-6 py-2 border border-white rounded hover:bg-white  transition">Blog</a></li>
                    <li><a href="#" className="hover:text-gray-400 px-6 py-2 border border-white rounded hover:bg-white  transition">Galería</a></li>
                    <li><a href="#" className="hover:text-gray-400 px-6 py-2 border border-white rounded hover:bg-white  transition">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
}