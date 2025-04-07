import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex font-sans">
      
      {/* Panel Izquierdo centrado */}
      <div className="w-1/2 flex flex-col items-center justify-center p-12 text-center space-y-8">
        <h1 className="text-6xl font-extrabold leading-tight">
          Flow.streaming
        </h1>

        <p className="text-2xl">
          Disfruta de series, películas <strong>gratis</strong>
        </p>

        <Link to="/login">
          <button className="bg-white text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-200 transition">
            Iniciar Sesión
          </button>
        </Link>

        <div className="flex items-center gap-4 w-full max-w-md">
          <div className="flex-1 border-b border-white"></div>
          <span className="text-white text-lg">o</span>
          <div className="flex-1 border-b border-white"></div>
        </div>

        <Link to="/register">
          <button className="bg-white text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-200 transition">
            Regístrate gratis
          </button>
        </Link>
      </div>

      {/* Panel Derecho con una sola imagen */}
      <div className="w-1/2 relative">
        <img
          src="/home.png"
          alt="imghome"
          className="w-full h-full object-cover"
          style={{ height: "783px" }}
        />
      </div>
    </div>
  );
}
