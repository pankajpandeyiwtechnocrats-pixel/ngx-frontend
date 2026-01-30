export default function EconomicCalendar() {
  return (
    <div className="max-w-6xl space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Economic calendar
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Track upcoming economic events and indicators.
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex flex-col sm:flex-row gap-4">
        <select className="border rounded-md px-3 py-2 text-sm text-gray-500">
          <option>Today</option>
          <option>This week</option>
          <option>This month</option>
        </select>

        <select className="border rounded-md px-3 py-2 text-sm text-gray-500">
          <option>All countries</option>
          <option>USA</option>
          <option>EU</option>
          <option>UK</option>
        </select>
      </div>

      {/* EVENTS TABLE */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 text-left">Time</th>
              <th className="px-4 py-3 text-left">Country</th>
              <th className="px-4 py-3 text-left">Event</th>
              <th className="px-4 py-3 text-left">Impact</th>
            </tr>
          </thead>
          <tbody>
            <CalendarRow
              time="14:30"
              country="USA"
              event="CPI (YoY)"
              impact="High"
            />
            <CalendarRow
              time="16:00"
              country="EU"
              event="ECB Interest Rate Decision"
              impact="High"
            />
            <CalendarRow
              time="18:30"
              country="UK"
              event="Retail Sales"
              impact="Medium"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CalendarRow({
  time,
  country,
  event,
  impact,
}: {
  time: string;
  country: string;
  event: string;
  impact: "Low" | "Medium" | "High";
}) {
  const impactColor =
    impact === "High"
      ? "text-red-600"
      : impact === "Medium"
      ? "text-yellow-600"
      : "text-green-600";

  return (
    <tr className="border-t text-gray-500 hover:bg-gray-50">
      <td className="px-4 py-3">{time}</td>
      <td className="px-4 py-3">{country}</td>
      <td className="px-4 py-3">{event}</td>
      <td className={`px-4 py-3 font-medium ${impactColor}`}>
        {impact}
      </td>
    </tr>
  );
}
