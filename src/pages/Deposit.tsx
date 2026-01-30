export default function Deposit() {
  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900">
        Deposit funds
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
          <label className="text-sm text-slate-500">Payment method</label>
          <select className="w-full mt-1 px-4 py-2 border border-slate-500 rounded-lg text-gray-500">
            <option>UPI</option>
            <option>Bank transfer</option>
            <option>Credit / Debit card</option>
            <option>Crypto</option>
          </select>
        </div>

        <button className="bg-[#2563eb] text-white font-medium px-5 py-2 rounded-lg">
          Proceed to deposit
        </button>
      </div>
    </div>
  );
}
