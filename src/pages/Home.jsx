import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-pink-700 flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-5xl font-bold mb-4 text-center drop-shadow-xl">Bienvenido a LalandStream 🌊</h1>
      <p className="text-lg mb-8 text-white/80 text-center max-w-xl">
        Tu plataforma de streaming donde puedes pausar y continuar tus películas justo donde las dejaste.
      </p>

      <div className="flex gap-4">
        <Link to="/login">
          <button className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 transition shadow-lg text-white font-semibold">
            Iniciar sesión
          </button>
        </Link>
        <Link to="/register">
          <button className="px-6 py-3 rounded-full bg-white text-purple-700 hover:bg-gray-100 transition shadow-lg font-semibold">
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
}
