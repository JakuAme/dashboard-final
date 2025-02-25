import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Etsy', 'eBay', 'Shopify'],
  datasets: [
    {
      label: 'Ordini Ricevuti',
      data: [10, 5, 8], // Dati esempio
      backgroundColor: ['#f87171', '#60a5fa', '#34d399'],
    },
  ],
};

export default function StatisticsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Statistiche</h1>
      <div className="w-full max-w-md">
        <Bar data={data} />
      </div>

::contentReference[oaicite:0]{index=0}
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
              <td className="border p-2 flex gap-2">
                {order.status !== 'Stampato' && (
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => updateOrderStatus(order.id, 'Stampato')}
                  >
                    Mark as Stampato
                  </button>
                )}
                {order.status !== 'Spedito' && (
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    onClick={() => updateOrderStatus(order.id, 'Spedito')}
                  >
                    Mark as Spedito
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
