import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Gestione Ordini</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/orders" className="p-6 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600">
          📦 Gestione Ordini
        </Link>
        <Link href="/products" className="p-6 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-600">
          🛒 Catalogo Prodotti
        </Link>
        <Link href="/statistics" className="p-6 bg-purple-500 text-white rounded-xl shadow-md hover:bg-purple-600">
          📊 Statistiche
        </Link>
      </div>
    </div>
  );
}
