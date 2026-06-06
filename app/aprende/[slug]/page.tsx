import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const articulos: Record<string, {
  categoria: string;
  titulo: string;
  tiempo: string;
  contenido: { subtitulo?: string; texto: string }[];
}> = {
  "que-es-el-irpf": {
    categoria: "Impuestos",
    titulo: "¿Qué es el IRPF y cómo te afecta?",
    tiempo: "3 min",
    contenido: [
      { texto: "El IRPF (Impuesto a la Renta de las Personas Físicas) es el impuesto que pagás sobre tus ingresos como trabajador independiente en Uruguay. Se calcula de forma progresiva: cuanto más ganás, mayor es el porcentaje que pagás." },
      { subtitulo: "¿Cómo funciona?", texto: "El IRPF se divide en franjas. Cada franja tiene una tasa diferente. Los primeros pesos que ganás pagan 0%, y a medida que tu ingreso sube, las franjas siguientes pagan más." },
      { subtitulo: "Las franjas actuales", texto: "Hasta $22.696: 0% — De $22.696 a $34.044: 10% — De $34.044 a $56.740: 15% — De $56.740 a $113.480: 20% — De $113.480 a $170.220: 22% — Más de $170.220: 25% o más." },
      { subtitulo: "¿Sobre qué se calcula?", texto: "El IRPF no se calcula sobre tu sueldo bruto completo, sino sobre tu ingreso después de descontar el BPS. Eso reduce un poco la base de cálculo." },
      { subtitulo: "Ejemplo práctico", texto: "Si ganás $50.000 brutos, primero se descuenta el BPS (18% = $9.000). Sobre los $41.000 restantes se aplican las franjas del IRPF." },
    ],
  },
  "que-es-el-bps": {
    categoria: "Impuestos",
    titulo: "¿Qué es el BPS y cuánto tengo que pagar?",
    tiempo: "3 min",
    contenido: [
      { texto: "El BPS (Banco de Previsión Social) es el organismo que gestiona la seguridad social en Uruguay. Como trabajador independiente, tenés la obligación de aportar al BPS mensualmente." },
      { subtitulo: "¿Cuánto se descuenta?", texto: "El aporte al BPS es del 18% de tu ingreso bruto. Este descuento se hace antes de calcular el IRPF, lo que reduce la base imponible." },
      { subtitulo: "¿Para qué sirve?", texto: "Tus aportes al BPS te dan acceso a jubilación, seguro de enfermedad, y otros beneficios de la seguridad social uruguaya." },
      { subtitulo: "¿Es obligatorio?", texto: "Sí. Si trabajás de forma independiente y generás ingresos, tenés la obligación legal de registrarte y aportar al BPS." },
    ],
  },
  "que-es-una-sas": {
    categoria: "Estructuras",
    titulo: "¿Qué es una SAS y para quién es ideal?",
    tiempo: "4 min",
    contenido: [
      { texto: "La SAS (Sociedad por Acciones Simplificada) es la estructura societaria más moderna de Uruguay, creada en 2017. Fue diseñada especialmente para emprendedores y profesionales independientes." },
      { subtitulo: "¿Por qué es popular?", texto: "Es más fácil y barata de constituir que una SRL o SA. Se puede crear en pocos días, con menos trámites y menos costos iniciales." },
      { subtitulo: "¿Para quién es ideal?", texto: "Es ideal para profesionales con ingresos medios o altos, personas que exportan servicios al exterior, y quienes quieren separar su patrimonio personal del negocio." },
      { subtitulo: "Ventaja clave", texto: "La SAS te protege personalmente. Si el negocio tiene deudas, tu patrimonio personal queda separado y protegido." },
    ],
  },
  "cuando-conviene-crear-empresa": {
    categoria: "Estructuras",
    titulo: "¿Cuándo conviene crear una empresa?",
    tiempo: "5 min",
    contenido: [
      { texto: "No siempre tiene sentido crear una empresa. Para muchos profesionales que están empezando, arrancar como unipersonal es la decisión más inteligente." },
      { subtitulo: "Señales de que ya es momento", texto: "Tus ingresos superan los $100.000 mensuales de forma estable, tenés clientes en el exterior, o necesitás emitir facturas a empresas grandes." },
      { subtitulo: "Señales de que todavía no", texto: "Estás empezando, tus ingresos son bajos o irregulares, o no querés asumir los costos fijos de mantener una empresa." },
      { subtitulo: "El costo de crear una empresa", texto: "Crear y mantener una SAS implica costos de constitución, honorarios de contador mensuales, y obligaciones administrativas." },
    ],
  },
  "que-pasa-si-gano-mas": {
    categoria: "Decisiones",
    titulo: "¿Qué pasa con mis impuestos si gano más?",
    tiempo: "4 min",
    contenido: [
      { texto: "Cuando tus ingresos crecen, tus impuestos también aumentan, pero de forma proporcional, no de golpe. El sistema uruguayo es progresivo." },
      { subtitulo: "El mito del salto de franja", texto: "Mucha gente cree que si pasan a una franja mayor, van a pagar más impuestos sobre todo su ingreso. Eso es falso. Solo pagás la tasa mayor sobre la parte que supera el límite." },
      { subtitulo: "¿Cuándo conviene revisar tu estructura?", texto: "Si tus ingresos crecen de forma sostenida, puede ser momento de evaluar si seguir como unipersonal sigue siendo conveniente o si una SAS te daría ventajas." },
    ],
  },
  "errores-comunes": {
    categoria: "Decisiones",
    titulo: "Errores comunes de los trabajadores independientes",
    tiempo: "5 min",
    contenido: [
      { texto: "Trabajar de forma independiente tiene muchas ventajas, pero también implica responsabilidades que muchos descubren tarde." },
      { subtitulo: "No registrarse a tiempo", texto: "Muchos profesionales empiezan a generar ingresos sin registrarse en BPS o DGI. Esto puede generar multas y deudas acumuladas." },
      { subtitulo: "Elegir la estructura incorrecta", texto: "Algunos crean una empresa cuando no la necesitan. Otros siguen como unipersonal cuando ya conviene dar el salto." },
      { subtitulo: "No separar las finanzas", texto: "Mezclar los ingresos del trabajo con los gastos personales dificulta saber cuánto ganás realmente." },
      { subtitulo: "No guardar para los impuestos", texto: "Los impuestos se pagan en determinados momentos del año. Si no reservás parte de tus ingresos, podés quedar sin fondos." },
    ],
  },
};

export default async function Articulo({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articulo = articulos[slug];

  if (!articulo) {
    return (
      <main className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="max-w-2xl mx-auto px-8 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Artículo no encontrado</h1>
          <a href="/aprende" className="text-gray-500 hover:text-gray-900">← Volver a Aprendé</a>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="max-w-2xl mx-auto px-8 py-16 w-full">
        <a href="/aprende" className="text-sm text-gray-400 hover:text-gray-900 mb-8 inline-block">← Volver a Aprendé</a>
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">{articulo.categoria} · {articulo.tiempo} de lectura</p>
        <h1 className="text-4xl font-bold mb-12">{articulo.titulo}</h1>
        <div className="space-y-8">
          {articulo.contenido.map((bloque, i) => (
            <div key={i}>
              {bloque.subtitulo && (
                <h2 className="text-xl font-bold mb-3">{bloque.subtitulo}</h2>
              )}
              <p className="text-gray-600 leading-relaxed">{bloque.texto}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <p className="font-semibold mb-2">¿Querés ver cómo aplica esto a tu caso?</p>
          <p className="text-gray-500 text-sm mb-6">Usá el simulador y obtené una estimación personalizada.</p>
          <a href="/simulador" className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-700 transition">
            Ir al simulador →
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}