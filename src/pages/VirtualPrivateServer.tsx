export default function VirtualPrivateServer() {
  return (
    <div className="max-w-5xl space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Virtual Private Server (VPS)
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Trade 24/7 with zero downtime using our VPS solution.
        </p>
      </div>

      {/* BENEFITS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <VpsCard
          title="24/7 uptime"
          description="Your trading terminal stays online continuously"
        />
        <VpsCard
          title="Low latency"
          description="Faster execution and reduced slippage"
        />
        <VpsCard
          title="Secure environment"
          description="Protected infrastructure for trading bots"
        />
      </div>

      {/* ELIGIBILITY */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="font-semibold text-slate-900 mb-2">
          VPS eligibility
        </h2>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
          <li>Minimum account balance required</li>
          <li>Active trading volume criteria</li>
          <li>Available for eligible live accounts</li>
        </ul>

        <button
          className="mt-4 bg-yellow-400 hover:bg-yellow-500
                     text-black font-medium px-4 py-2
                     rounded-lg transition"
        >
          Request VPS
        </button>
      </div>
    </div>
  );
}

function VpsCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <div className="font-medium text-slate-900">{title}</div>
      <div className="text-sm text-slate-500 mt-1">
        {description}
      </div>
    </div>
  );
}
