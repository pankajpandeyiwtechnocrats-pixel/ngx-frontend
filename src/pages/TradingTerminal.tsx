export default function TradingTerminal() {
  return (
    <div className="h-[calc(100vh-5rem)] grid grid-cols-1 lg:grid-cols-4 gap-4">
      {/* CHART */}
      <div className="lg:col-span-3 bg-white border rounded-xl flex items-center justify-center text-slate-400">
        Chart area (TradingView integration later)
      </div>

      {/* ORDER PANEL */}
      <div className="bg-white border rounded-xl p-4 space-y-4">
        <h2 className="font-semibold text-slate-900">
          Place order
        </h2>

        <select className="w-full border rounded-lg px-3 py-2 text-sm text-gray-500">
          <option>Market</option>
          <option>Limit</option>
        </select>

        <input
          placeholder="Lot size"
          className="w-full border rounded-lg px-3 py-2 text-sm text-gray-500"
        />

        <div className="flex gap-2">
          <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg">
            Buy
          </button>
          <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-lg">
            Sell
          </button>
        </div>
      </div>
    </div>
  );
}
