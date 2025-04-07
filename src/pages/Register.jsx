import { useState } from "react";
import { register } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ email, password, username });
      alert("Usuario registrado exitosamente");
      navigate("/login");
    } catch (err) {
      alert("Error al registrarse");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 relative overflow-hidden">
      {/* Fondo animado con peces (como Flow) */}
      <img
        src="/re.png"
        alt="Flow Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />

      <div className="z-10 bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white border-opacity-20">
        <h2 className="text-3xl font-bold text-white text-center mb-6 font-[Comic_Sans_MS] tracking-wide">
          Regístrate 🐠
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Nombre de usuario"
            className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold transition duration-300"
          >
            Registrarse
          </button>
        </form>

        <p className="text-white text-sm mt-6 text-center opacity-80">
          ¿Ya tienes cuenta? <a href="/login" className="text-cyan-300 underline hover:text-cyan-100">Inicia sesión</a>
        </p>
      </div>
    </div>
  );
}
