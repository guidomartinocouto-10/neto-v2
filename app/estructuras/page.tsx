import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Estructuras() {
  const estructuras = [
    {
      nombre: "Unipersonal",
      para: "Freelancers y profesionales que arrancan solos",
      ventajas: ["Fácil de crear", "Bajo costo", "Poca burocracia"],
      desventajas: ["Sin protección de activos personales", "Menos credibilidad ante grandes clientes"],
      complejidad: "Baja",
      proteccion: "Ninguna",
      destacado: false,
    },
    {
      nombre: "SAS",
      para: "Profesionales con ingresos medios-altos o clientes en el exterior",
      ventajas: ["Protección de activos personales", "Moderna y flexible", "Ideal para exportar servicios"],
      desventajas: ["Más costos administrativos", "Requiere contador"],
      complejidad: "Media",
      proteccion: "Alta",
      destacado: true,
    },
    {
      nombre: "SRL",
      para: "Negocios con socios y estructura más formal",
      ventajas: ["Protección de activos", "Estructura sólida", "Varios socios posibles"],
      desventajas: ["Más burocracia que SAS", "Más costosa de mantener"],
      complejidad: "Media-Alta",
      proteccion: "Alta",
      destacado: false,
    },
    {
      nombre: "SA",
      para: "Empresas grandes con inversores o múltiples accionistas",
      ventajas: ["Permite inversores externos", "Alta credibilidad", "Estructura corporativa completa"],
      desventajas: ["Muy costosa", "Alta burocracia", "No recomendada para freelancers"],
      complejidad: "Alta",
      proteccion: "Muy alta",
      destacado: false,
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="max-w-5xl mx-auto px-8 py-16 w-full">
        <a href="/" className="text-sm text-gray-400 hover:text-gray-900 mb-8 inline-block">← Volver al inicio</a>
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Comparación</p>
        <h1 className="text-4xl font-bold mb-4">¿Cuál estructura te conviene?</h1>
        <p className="text-gray-500 text-lg mb-16">Comparamos las opciones más comunes para independientes y profesionales en Uruguay.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {estructuras.map((e) => (
            <div
              key={e.nombre}
              className={`rounded-2xl border p-8 ${e.destacado ? "border-gray-900 bg-gray-50" : "border-gray-200"}`}
            >
              {e.destacado && (
                <span className="text-xs uppercase tracking-widest bg-gray-900 text-white px-3 py-1 rounded-full mb-4 inline-block">
                  Más popular
                </span>
              )}
              <h2 className="text-2xl font-bold mb-2">{e.nombre}</h2>
              <p className="text-gray-500 text-sm mb-6">{e.para}</p>

              <div className="flex gap-4 mb-6 text-sm">
                <div className="bg-white border border-gray-100 rounded-lg px-4 py-2">
                  <p className="text-gray-400 text-xs mb-1">Complejidad</p>
                  <p className="font-medium">{e.complejidad}</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-lg px-4 py-2">
                  <p className="text-gray-400 text-xs mb-1">Protección</p>
                  <p className="font-medium">{e.proteccion}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Ventajas</p>
                <ul className="space-y-1">
                  {e.ventajas.map((v) => (
                    <li key={v} className="text-sm text-gray-500 flex gap-2">
                      <span className="text-gray-900">✓</span> {v}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold mb-2">Desventajas</p>
                <ul className="space-y-1">
                  {e.desventajas.map((d) => (
                    <li key={d} className="text-sm text-gray-500 flex gap-2">
                      <span className="text-gray-400">✕</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">¿No sabés cuál elegir? El simulador te ayuda a decidir.</p>
          <a href="/simulador" className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-700 transition">
            Ir al simulador →
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}