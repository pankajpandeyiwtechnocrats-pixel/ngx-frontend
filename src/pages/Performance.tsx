export default function Performance() {
  return (
    <div className="max-w-6xl space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900">
        Performance
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat title="Total trades" value="128" />
        <Stat title="Winning trades" value="72" />
        <Stat title="Win rate" value="56%" />
        <Stat title="Net profit" value="+$320.50" positive />
      </div>

      {/* CHART PLACEHOLDER */}
      <div className="bg-white border rounded-xl p-6 h-64 flex items-center justify-center text-slate-400">
        Performance chart will appear here
      </div>
    </div>
  );
}

function Stat({
  title,
  value,
  positive,
}: {
  title: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="bg-white border rounded-xl p-4">
      <div className="text-sm text-slate-500">{title}</div>
      <div
        className={`text-xl font-semibold mt-1 ${
          positive ? "text-green-600" : "text-slate-900"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
