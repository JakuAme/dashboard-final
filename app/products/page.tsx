import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  stock: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Prodotto A', stock: 10 },
    { id: 2, name: 'Prodotto B', stock: 5 },
  ]);

  const updateStock = (id: number, amount: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, stock: product.stock + amount } : product
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Catalogo Prodotti</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nome</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Azioni</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border">
              <td className="border p-2">{product.id}</td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">{product.stock}</td>
              <td className="border p-2 flex gap-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => updateStock(product.id, 1)}
                >
                  +1 Stock
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => updateStock(product.id, -1)}
                  disabled={product.stock <= 0}
                >
                  -1 Stock
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
