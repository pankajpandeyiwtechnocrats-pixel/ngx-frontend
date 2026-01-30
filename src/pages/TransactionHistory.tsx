export default function TransactionHistory() {
  return (
    <div className="max-w-6xl space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900">
        Transaction history
      </h1>

      <div className="bg-white border rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-white text-gray-500 border-lg">
            <tr>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <Row date="12 Jan 2026" type="Deposit" amount="$500" status="Completed" />
            <Row date="15 Jan 2026" type="Withdraw" amount="$200" status="Pending" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Row({
  date,
  type,
  amount,
  status,
}: {
  date: string;
  type: string;
  amount: string;
  status: string;
}) {
  return (
    <tr className="border-t text-gray-500 hover:bg-gray-50">
      <td className="px-4 py-3">{date}</td>
      <td className="px-4 py-3">{type}</td>
      <td className="px-4 py-3">{amount}</td>
      <td className="px-4 py-3 font-medium">{status}</td>
    </tr>
  );
}
