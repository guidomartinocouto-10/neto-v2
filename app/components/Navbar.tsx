import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
      <Link href="/" className="text-xl font-bold tracking-tight">
        NETO
      </Link>
      <div className="flex gap-8 text-sm text-gray-500">
        <Link href="/simulador" className="hover:text-gray-900 transition">
          Simulador
        </Link>
        <Link href="/estructuras" className="hover:text-gray-900 transition">
          Estructuras
        </Link>
        <Link href="/aprende" className="hover:text-gray-900 transition">
          Aprendé
        </Link>
      </div>
    </nav>
  );
}