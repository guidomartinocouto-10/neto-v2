"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const preguntas = [
  {
    id: 1,
    pregunta: "¿Qué tipo de trabajo hacés?",
    opciones: ["Tecnología / Software", "Diseño / Creatividad", "Consultoría / Asesoría", "Salud / Bienestar", "Legal / Contable", "Otro"],
  },
  {
    id: 2,
    pregunta: "¿Trabajás solo o con socios?",
    opciones: ["Solo", "Con socios"],
  },
  {
    id: 3,
    pregunta: "¿Tenés empleados?",
    opciones: ["No, trabajo solo", "Sí, tengo empleados"],
  },
  {
    id: 4,
    pregunta: "¿De dónde vienen tus clientes?",
    opciones: ["Solo de Uruguay", "Solo del exterior", "De ambos"],
  },
  {
    id: 5,
    pregunta: "¿Cuál es tu ingreso mensual aproximado?",
    opciones: ["Menos de $50.000", "$50.000 – $100.000", "$100.000 – $200.000", "Más de $200.000"],
  },
];

export default function Simulador() {
  const [paso, setPaso] = useState(0);
  const [respuestas, setRespuestas] = useState<string[]>([]);
  const [terminado, setTerminado] = useState(false);

  const preguntaActual = preguntas[paso];

  function elegir(opcion: string) {
    const nuevas = [...respuestas, opcion];
    setRespuestas(nuevas);
    if (paso + 1 < preguntas.length) {
      setPaso(paso + 1);
    } else {
      setTerminado(true);
    }
  }

  function reiniciar() {
    setPaso(0);
    setRespuestas([]);
    setTerminado(false);
  }

  if (terminado) {
    const exterior = respuestas[3] === "Solo del exterior" || respuestas[3] === "De ambos";
    const socios = respuestas[1] === "Con socios";
    const ingreso = respuestas[4];

    let estructura = "Unipersonal";
    let explicacion = "Para tu situación, arrancar como unipersonal es la opción más simple y económica. Menos burocracia, menos costos.";

    if (socios) {
      estructura = "SAS";
      explicacion = "Como trabajás con socios, una SAS es ideal. Es flexible, moderna y tiene menos requisitos que una SRL.";
    } else if (exterior && ingreso === "Más de $200.000") {
      estructura = "SAS";
      explicacion = "Con clientes en el exterior y buenos ingresos, una SAS te da más estructura legal y puede ser conveniente para exportar servicios.";
    }

    return (
      <main className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex flex-col items-center justify-center flex-1 px-8 py-16">
          <div className="max-w-xl w-full text-center">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Tu resultado</p>
            <h1 className="text-4xl font-bold mb-4">Te recomendamos: {estructura}</h1>
            <p className="text-gray-500 text-lg mb-10">{explicacion}</p>
            <div className="bg-gray-50 rounded-2xl p-8 text-left mb-8 space-y-3">
              {preguntas.map((p, i) => (
                <div key={p.id} className="flex justify-between text-sm">
                  <span className="text-gray-400">{p.pregunta}</span>
                  <span className="font-medium">{respuestas[i]}</span>
                </div>
              ))}
            </div>
            <button onClick={reiniciar} className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-700 transition">
              Volver a simular
            </button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 px-8 py-16">
        <div className="max-w-xl w-full">
          <p className="text-sm text-gray-400 mb-8">Pregunta {paso + 1} de {preguntas.length}</p>
          <div className="w-full bg-gray-100 rounded-full h-1 mb-12">
            <div
              className="bg-gray-900 h-1 rounded-full transition-all"
              style={{ width: `${((paso) / preguntas.length) * 100}%` }}
            />
          </div>
          <h2 className="text-3xl font-bold mb-10">{preguntaActual.pregunta}</h2>
          <div className="space-y-4">
            {preguntaActual.opciones.map((opcion) => (
              <button
                key={opcion}
                onClick={() => elegir(opcion)}
                className="w-full text-left px-6 py-4 border border-gray-200 rounded-xl hover:border-gray-900 hover:bg-gray-50 transition text-base"
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}