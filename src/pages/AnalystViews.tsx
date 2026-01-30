export default function AnalystViews() {
  return (
    <div className="max-w-6xl space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Analyst views
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Professional market insights and trade ideas from analysts.
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex flex-col sm:flex-row gap-4">
        <select className="border rounded-md px-3 py-2 text-sm text-gray-500">
          <option>All markets</option>
          <option>Forex</option>
          <option>Crypto</option>
          <option>Indices</option>
        </select>

        <select className="border rounded-md px-3 py-2 text-sm text-gray-500">
          <option>Latest</option>
          <option>Top rated</option>
        </select>
      </div>

      {/* ANALYST CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnalystCard
          market="EUR/USD"
          direction="Buy"
          target="1.1020"
          stop="1.0920"
          analyst="FX Research Team"
        />
        <AnalystCard
          market="BTC/USD"
          direction="Sell"
          target="41,500"
          stop="44,200"
          analyst="Crypto Desk"
        />
      </div>
    </div>
  );
}

function AnalystCard({
  market,
  direction,
  target,
  stop,
  analyst,
}: {
  market: string;
  direction: "Buy" | "Sell";
  target: string;
  stop: string;
  analyst: string;
}) {
  const color =
    direction === "Buy" ? "text-green-600" : "text-red-600";

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <div className="flex items-center justify-between mb-3">
        <div className="font-medium text-slate-900">
          {market}
        </div>
        <span className={`font-semibold ${color}`}>
          {direction}
        </span>
      </div>

      <div className="text-sm text-slate-600 space-y-1">
        <div>Target: <span className="font-medium">{target}</span></div>
        <div>Stop loss: <span className="font-medium">{stop}</span></div>
      </div>

      <div className="mt-4 text-xs text-slate-500">
        Analyst: {analyst}
      </div>
    </div>
  );
}
