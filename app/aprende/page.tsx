import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const articulos = [
  {
    categoria: "Impuestos",
    titulo: "¿Qué es el IRPF y cómo te afecta?",
    descripcion: "El Impuesto a la Renta de las Personas Físicas es el principal impuesto que pagan los trabajadores independientes en Uruguay.",
    tiempo: "3 min",
    slug: "que-es-el-irpf",
  },
  {
    categoria: "Impuestos",
    titulo: "¿Qué es el BPS y cuánto tengo que pagar?",
    descripcion: "El Banco de Previsión Social recauda las contribuciones de seguridad social. Si trabajás de forma independiente, tenés que saber cuánto te corresponde aportar.",
    tiempo: "3 min",
    slug: "que-es-el-bps",
  },
  {
    categoria: "Estructuras",
    titulo: "¿Qué es una SAS y para quién es ideal?",
    descripcion: "La Sociedad por Acciones Simplificada es la estructura más moderna y flexible de Uruguay.",
    tiempo: "4 min",
    slug: "que-es-una-sas",
  },
  {
    categoria: "Estructuras",
    titulo: "¿Cuándo conviene crear una empresa?",
    descripcion: "No siempre tiene sentido crear una empresa. Te contamos en qué momento vale la pena dar ese paso.",
    tiempo: "5 min",
    slug: "cuando-conviene-crear-empresa",
  },
  {
    categoria: "Decisiones",
    titulo: "¿Qué pasa con mis impuestos si gano más?",
    descripcion: "Cuando tus ingresos crecen, tus obligaciones cambian. Te explicamos cómo funcionan las franjas impositivas.",
    tiempo: "4 min",
    slug: "que-pasa-si-gano-mas",
  },
  {
    categoria: "Decisiones",
    titulo: "Errores comunes de los trabajadores independientes",
    descripcion: "Desde no registrarse a tiempo hasta elegir la estructura incorrecta. Estos son los errores más frecuentes.",
    tiempo: "5 min",
    slug: "errores-comunes",
  },
];

const categorias = ["Todos", "Impuestos", "Estructuras", "Decisiones"];

export default function Aprende() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="max-w-4xl mx-auto px-8 py-16 w-full">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Aprendé</p>
        <h1 className="text-4xl font-bold mb-4">Impuestos explicados en simple</h1>
        <p className="text-gray-500 text-lg mb-12">Todo lo que necesitás saber para tomar mejores decisiones, sin jerga contable.</p>

        <div className="flex gap-3 mb-12">
          {categorias.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-500 cursor-pointer hover:border-gray-900 hover:text-gray-900 transition"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articulos.map((art) => (
                <a
              key={art.titulo}
              href={`/aprende/${art.slug}`}
              className="border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition block"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-widest text-gray-400">{art.categoria}</span>
                <span className="text-xs text-gray-400">{art.tiempo} de lectura</span>
              </div>
              <h2 className="font-bold text-lg mb-2">{art.titulo}</h2>
              <p className="text-gray-500 text-sm">{art.descripcion}</p>
            </a>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Querés saber cuánto te queda?</h2>
          <p className="text-gray-500 mb-6">Usá el simulador para ver tu situación concreta en 2 minutos.</p>
          <a href="/simulador" className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-700 transition">
            Ir al simulador →
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}