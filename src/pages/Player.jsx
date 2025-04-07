import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

export default function Player() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="w-full p-6 flex justify-between items-center shadow-lg relative">
        <img
          src="/logo.png"
          alt="Flow Background"
          className="w-20 h-20 object-contain opacity-80"
        />
        <div>
          <Link 
            to="/selection"
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md mr-4"
          >
            Volver
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      <main className="flex-1 flex justify-center items-center">
        <VideoPlayer />
      </main>
    </div>
  );
}