// src/pages/ContentSelection.js
import { Link } from "react-router-dom";

export default function ContentSelection() {
  const featuredContent = [
    {
      id: 1,
      title: "Flow",
      thumbnail: "/banner.png",
      description: "Una experiencia visual relajante",
      isFeatured: true
    },
    {
      id: 2,
      title: "Moana 2",
      thumbnail: "/moa.png",
      description: "Paisajes naturales impresionantes"
    },
    {
      id: 3,
      title: "Wallace y Gromit: La venganza se sirve con plumas",
      thumbnail: "/wa.png",
      description: "La profundidad del mar"
    },
    {
      id: 4,
      title: "Alexander y un viaje terrible, horrible, malo... ¡Muy malo!",
      thumbnail: "/al.png",
      description: "Vida urbana en time-lapse"
    },
    {
      id: 5,
      title: "Una película de Minecraft",
      thumbnail: "/min.png",
      description: "Naturaleza en su esplendor"
    },
    {
      id: 6,
      title: "Wicked",
      thumbnail: "/wi.png",
      description: "Naturaleza en su esplendor"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold text-red-500">FlowStream</h1>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Cerrar sesión
        </button>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Destacado</h2>
        <div className="relative group">
          <Link to="/stream">
            <img 
              src={featuredContent[0].thumbnail} 
              alt={featuredContent[0].title}
              className="w-full h-96 object-cover rounded-lg brightness-75 group-hover:brightness-100 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-bold mb-2">{featuredContent[0].title}</h3>
              <p className="text-lg max-w-2xl">{featuredContent[0].description}</p>
              <button className="mt-4 bg-white text-black px-6 py-2 rounded-lg hover:bg-opacity-80 transition">
                Reproducir
              </button>
            </div>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Más contenido</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {featuredContent.slice(1).map(item => (
            <div key={item.id} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-300 bg-red-600 text-white px-4 py-2 rounded-full">
                    +
                  </button>
                </div>
              </div>
              <h3 className="mt-2 font-medium">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}