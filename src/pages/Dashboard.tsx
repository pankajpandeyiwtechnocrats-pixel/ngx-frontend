export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-slate-900">
          My account
        </h1>
      </div>

      {/* ================= SUMMARY CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          title="Balance"
          value="$1000.44"
          valueColor="text-slate-900"
        />
        <SummaryCard
          title="Equity"
          value="$1000.44"
          valueColor="text-slate-900"
        />
        <SummaryCard
          title="Margin used"
          value="$1000.00"
          valueColor="text-slate-900"
        />
        <SummaryCard
          title="Free margin"
          value="$1000.44"
          valueColor="text-slate-900"
        />
      </div>

      {/* ================= PERFORMANCE ================= */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-slate-900">
            Performance
          </h2>

          <select
            className="text-sm border border-slate-300 rounded-md
                       px-2 py-1 focus:outline-none text-black"
          >
            <option>Today</option>
            <option>This week</option>
            <option>This month</option>
          </select>
        </div>

        <div
          className="h-40 flex items-center justify-center
                     text-slate-400 text-sm
                     border border-dashed rounded-lg"
        >
          Chart will be here
        </div>
      </div>
   </div>
  );
}

/* ================= REUSABLE CARD ================= */

function SummaryCard({
  title,
  value,
  valueColor,
}: {
  title: string;
  value: string;
  valueColor: string;
}) {
  return (
    <div
      className="bg-white rounded-xl border border-slate-200
                 p-4 shadow-sm hover:shadow-md transition"
    >
      <div className="text-sm text-slate-500">
        {title}
      </div>

      <div className={`text-2xl font-semibold mt-1 ${valueColor}`}>
        {value}
      </div>
    </div>
  );
}
