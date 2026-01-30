export default function MyAccounts() {
  return (
    <div className="max-w-6xl space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900">
        My accounts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AccountCard
          type="Standard"
          balance="$0.44"
          equity="$0.44"
          leverage="1:200"
        />
        <AccountCard
          type="Pro"
          balance="$1,250.00"
          equity="$1,310.50"
          leverage="1:500"
        />
      </div>
    </div>
  );
}

function AccountCard({
  type,
  balance,
  equity,
  leverage,
}: {
  type: string;
  balance: string;
  equity: string;
  leverage: string;
}) {
  return (
    <div className="bg-white border rounded-xl p-5 space-y-2">
      <div className="font-medium text-slate-900">{type} account</div>

      <div className="text-sm text-slate-600">
        Balance: <span className="font-medium">{balance}</span>
      </div>
      <div className="text-sm text-slate-600">
        Equity: <span className="font-medium text-green-600">{equity}</span>
      </div>
      <div className="text-sm text-slate-600">
        Leverage: <span className="font-medium">{leverage}</span>
      </div>

      <button className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded-lg">
        Open terminal
      </button>
    </div>
  );
}
