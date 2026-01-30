export default function CopyTrading() {
  return (
    <div className="max-w-6xl space-y-8">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Copy Trading
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Automatically copy trades from experienced traders in real time.
        </p>
      </div>

      {/* INFO BANNER */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <h2 className="font-medium text-slate-900">
          How copy trading works
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Choose a strategy provider, allocate funds, and their trades will be
          copied to your account automatically.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <select className="border rounded-md px-3 py-2 text-sm text-gray-500">
          <option>Top performers</option>
          <option>Lowest risk</option>
          <option>Most copied</option>
        </select>

        <select className="border rounded-md px-3 py-2 text-sm text-gray-500">
          <option>All markets</option>
          <option>Forex</option>
          <option>Crypto</option>
          <option>Indices</option>
        </select>
      </div>

      {/* STRATEGY PROVIDERS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StrategyCard
          name="AlphaTrader"
          roi="+32.4%"
          followers="1,240"
          risk="Medium"
        />
        <StrategyCard
          name="FXMasterPro"
          roi="+18.7%"
          followers="980"
          risk="Low"
        />
        <StrategyCard
          name="CryptoEdge"
          roi="+54.1%"
          followers="2,410"
          risk="High"
        />
      </div>

      {/* EMPTY / CTA */}
      <div className="bg-white border border-slate-200 rounded-xl p-8
                      flex flex-col items-center text-center">
        <div className="text-4xl mb-3">📈</div>

        <div className="font-medium text-slate-700">
          Start copy trading today
        </div>

        <div className="text-sm text-slate-500 mt-1">
          Allocate funds to a strategy and start copying trades instantly.
        </div>

        <button
          className="mt-4 bg-yellow-400 hover:bg-yellow-500
                     text-black font-medium px-5 py-2
                     rounded-lg transition"
        >
          Browse strategies
        </button>
      </div>
    </div>
  );
}

/* ---------- Helper Components ---------- */

function StrategyCard({
  name,
  roi,
  followers,
  risk,
}: {
  name: string;
  roi: string;
  followers: string;
  risk: "Low" | "Medium" | "High";
}) {
  const riskColor =
    risk === "Low"
      ? "text-green-600"
      : risk === "Medium"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5
                    hover:shadow-md transition">
      <div className="flex items-center justify-between mb-3">
        <div className="font-medium text-slate-900">
          {name}
        </div>
        <span
          className={`text-sm font-medium ${riskColor}`}
        >
          {risk} risk
        </span>
      </div>

      <div className="space-y-1 text-sm text-slate-600">
        <div>
          ROI: <span className="font-medium text-green-600">{roi}</span>
        </div>
        <div>
          Followers: <span className="font-medium">{followers}</span>
        </div>
      </div>

      <button
        className="mt-4 w-full border border-slate-300
                   text-slate-700 font-medium px-4 py-2
                   rounded-lg hover:bg-gray-100 transition"
      >
        Copy strategy
      </button>
    </div>
  );
}
