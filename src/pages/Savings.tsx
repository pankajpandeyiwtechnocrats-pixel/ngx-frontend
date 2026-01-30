export default function Savings() {
  return (
    <div className="max-w-5xl space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Savings
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Grow your funds with flexible savings options.
        </p>
      </div>

      {/* SAVINGS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SavingsCard
          title="Flexible savings"
          description="Withdraw anytime without penalties"
          rate="Up to 8% annually"
        />
        <SavingsCard
          title="Fixed savings"
          description="Higher returns for fixed periods"
          rate="Up to 12% annually"
        />
      </div>

      {/* INFO */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <h2 className="font-semibold text-slate-900">
          Why choose savings?
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Earn passive income while keeping your funds secure and accessible.
        </p>
      </div>
    </div>
  );
}

function SavingsCard({
  title,
  description,
  rate,
}: {
  title: string;
  description: string;
  rate: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <div className="font-medium text-slate-900">{title}</div>
      <div className="text-sm text-slate-500 mt-1">
        {description}
      </div>
      <div className="mt-3 text-lg font-semibold text-green-600">
        {rate}
      </div>

      <button
        className="mt-4 bg-yellow-400 hover:bg-yellow-500
                   text-black font-medium px-4 py-2
                   rounded-lg transition"
      >
        Start saving
      </button>
    </div>
  );
}
