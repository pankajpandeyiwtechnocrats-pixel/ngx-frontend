export default function TradingConditions() {
  return (
    <div className="max-w-5xl space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Trading conditions
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Transparent and competitive trading conditions for all traders.
        </p>
      </div>

      {/* CONDITIONS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ConditionCard title="Spreads" value="From 0.0 pips" />
        <ConditionCard title="Execution" value="Market execution" />
        <ConditionCard title="Leverage" value="Up to 1:Unlimited" />
        <ConditionCard title="Instruments" value="Forex, Crypto, Indices" />
        <ConditionCard title="Minimum deposit" value="$10" />
        <ConditionCard title="Commission" value="Low & transparent" />
      </div>

      {/* INFO */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="font-semibold text-slate-900 mb-2">
          Why our trading conditions stand out
        </h2>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
          <li>Fast order execution with minimal slippage</li>
          <li>No requotes on market execution</li>
          <li>Stable spreads even during volatility</li>
        </ul>
      </div>
    </div>
  );
}

function ConditionCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="text-lg font-semibold text-slate-900 mt-1">
        {value}
      </div>
    </div>
  );
}
