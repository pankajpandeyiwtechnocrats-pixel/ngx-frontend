export default function Withdraw() {
  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900">
        Withdraw funds
      </h1>

      <div className="bg-white border rounded-xl p-6 space-y-4">
        <div>
          <label className="text-sm text-slate-500">Amount</label>
          <input
            placeholder="Enter amount"
            className="w-full mt-1 px-4 py-2 border border-slate-500 rounded-lg"
          />
        </div>

        <div>
          <label className="text-sm text-slate-500">Withdraw method</label>
          <select className="w-full mt-1 px-4 py-2 border border-slate-500 rounded-lg text-gray-500">
            <option>Bank transfer</option>
            <option>UPI</option>
            <option>Crypto</option>
          </select>
        </div>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-5 py-2 rounded-lg">
          Request withdrawal
        </button>
      </div>
    </div>
  );
}
