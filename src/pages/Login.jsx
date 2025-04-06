import { useState } from "react";
import { login } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/player");
    } catch (err) {
      alert("Error en el login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 relative overflow-hidden">
      {/* Fondo de peces (estilo Flow) */}
      <img
        src="/fondo-flow.webp"
        alt="Flow Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />

      {/* Contenido */}
      <div className="z-10 bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white border-opacity-20">
        <h2 className="text-3xl font-bold text-white text-center mb-6 font-[Comic_Sans_MS] tracking-wide">
          Bienvenido a LalandStream 🌊
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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
            Iniciar sesión
          </button>
        </form>

        <p className="text-white text-sm mt-6 text-center opacity-80">
          ¿No tienes cuenta? <a href="/register" className="text-cyan-300 underline hover:text-cyan-100">Regístrate</a>
        </p>
      </div>
    </div>
  );
}
