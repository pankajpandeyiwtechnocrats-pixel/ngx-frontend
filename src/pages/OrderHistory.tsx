export default function OrderHistory() {
  return (
    <div className="max-w-7xl space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900">
        History of orders
      </h1>

      <div className="bg-white border rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-white text-gray-500">
            <tr>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Symbol</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Lot</th>
              <th className="px-4 py-3 text-left">Profit</th>
            </tr>
          </thead>
          <tbody>
            <Row date="10 Jan 2026" symbol="EURUSD" type="Buy" lot="0.10" profit="+$12.40" />
            <Row date="11 Jan 2026" symbol="BTCUSD" type="Sell" lot="0.02" profit="-$8.10" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Row({
  date,
  symbol,
  type,
  lot,
  profit,
}: {
  date: string;
  symbol: string;
  type: string;
  lot: string;
  profit: string;
}) {
  const positive = profit.startsWith("+");

  return (
    <tr className="border-t text-gray-500 hover:bg-gray-50">
      <td className="px-4 py-3">{date}</td>
      <td className="px-4 py-3">{symbol}</td>
      <td className="px-4 py-3">{type}</td>
      <td className="px-4 py-3">{lot}</td>
      <td
        className={`px-4 py-3 font-medium ${
          positive ? "text-green-600" : "text-red-600"
        }`}
      >
        {profit}
      </td>
    </tr>
  );
}
