import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-8 py-32 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">Para independientes en Uruguay</p>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Entendé cuánto te queda<br />en el bolsillo.
        </h1>
        <p className="text-xl text-gray-500 mb-10">
          NETO te ayuda a entender tus impuestos, elegir la estructura correcta<br />y tomar mejores decisiones financieras. Sin jerga contable.
        </p>
        <a href="/simulador" className="bg-gray-900 text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-gray-700 transition">
          Calculá tu sueldo neto →
        </a>
      </section>

      {/* PROBLEMA */}
      <section className="bg-gray-50 px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">El problema es real</h2>
          <p className="text-lg text-gray-500 mb-12">
            La información está fragmentada. Los contadores hablan en términos técnicos.<br />
            Los sitios del gobierno son confusos. Y vos solo querés saber qué hacer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { titulo: "¿Cuánto pago de impuestos?", desc: "No sabés exactamente qué porcentaje se lleva el Estado de tu ingreso." },
              { titulo: "¿Qué estructura me conviene?", desc: "Unipersonal, SAS, SRL... nadie te explica cuál es la mejor para tu caso." },
              { titulo: "¿Qué pasa si gano más?", desc: "No sabés cómo cambian tus obligaciones cuando tus ingresos crecen." },
            ].map((item) => (
              <div key={item.titulo} className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold mb-2">{item.titulo}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIMULADOR CTA */}
      <section className="max-w-3xl mx-auto px-8 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Simulá tu situación en 2 minutos</h2>
        <p className="text-gray-500 mb-8">Respondé algunas preguntas y te mostramos cuánto te queda después de impuestos.</p>
        <a href="/simulador" className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-700 transition">
          Ir al simulador →
        </a>
      </section>

      {/* ESTRUCTURAS */}
      <section className="bg-gray-50 px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Cuál es la estructura correcta para vos?</h2>
          <p className="text-gray-500 mb-12">Comparamos las opciones más comunes para que puedas decidir con claridad.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {["Unipersonal", "SAS", "SRL", "SA"].map((tipo) => (
              <div key={tipo} className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                <p className="font-semibold">{tipo}</p>
              </div>
            ))}
          </div>
          <a href="/estructuras" className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-700 transition">
            Ver comparación completa →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-8 py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Preguntas frecuentes</h2>
        <div className="space-y-6">
          {[
            { p: "¿NETO reemplaza a un contador?", r: "No. NETO es una herramienta de orientación. Para decisiones legales y contables formales, siempre recomendamos consultar con un profesional." },
            { p: "¿Los cálculos son exactos?", r: "Son estimaciones orientativas basadas en la normativa vigente. La situación de cada persona puede variar." },
            { p: "¿Necesito crear una cuenta?", r: "No. Podés usar NETO sin registrarte." },
          ].map((item) => (
            <div key={item.p} className="border-b border-gray-100 pb-6">
              <h3 className="font-semibold mb-2">{item.p}</h3>
              <p className="text-gray-500 text-sm">{item.r}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}