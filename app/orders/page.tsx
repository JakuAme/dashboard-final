import { useState } from 'react';

interface Order {
  id: number;
  platform: string;
  status: 'In attesa' | 'Stampato' | 'Spedito';
  items: string[];
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([
    // Esempio di ordine iniziale
    { id: 1, platform: 'Etsy', status: 'In attesa', items: ['Prodotto A', 'Prodotto B'] },
  ]);

  const updateOrderStatus = (id: number, status: Order['status']) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestione Ordini</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Piattaforma</th>
            <th className="border p-2">Stato</th>
            <th className="border p-2">Prodotti</th>
            <th className="border p-2">Azioni</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border">
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.platform}</td>
              <td className="border p-2">{order.status}</td>
              <td className="border p-2">{order.items.join(', ')}</td>
              <td className="border p-2">
                {order.status === 'In attesa' && (
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => updateOrderStatus(order.id, 'Stampato')}
                  >
                    Marca come Stampato
                  </button>
                )}
                {order.status === 'Stampato' && (
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    onClick={() => updateOrderStatus(order.id, 'Spedito')}
                  >
                    Marca come Spedito
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
