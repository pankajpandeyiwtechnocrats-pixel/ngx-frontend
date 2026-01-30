export default function CryptoWallet() {
  return (
    <div className="max-w-5xl space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900">
        Crypto wallet
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <WalletCard symbol="BTC" balance="0.012 BTC" usd="$480" />
        <WalletCard symbol="ETH" balance="0.45 ETH" usd="$720" />
        <WalletCard symbol="USDT" balance="1200 USDT" usd="$1200" />
      </div>
    </div>
  );
}

function WalletCard({
  symbol,
  balance,
  usd,
}: {
  symbol: string;
  balance: string;
  usd: string;
}) {
  return (
    <div className="bg-white border rounded-xl p-5">
      <div className="font-medium text-slate-900">{symbol}</div>
      <div className="text-sm text-slate-500 mt-1">{balance}</div>
      <div className="mt-2 font-semibold text-green-600">{usd}</div>

      <div className="flex gap-2 mt-4">
        <button className="flex-1 border text-gray-500 rounded-lg py-1 hover:bg-gray-100">
          Deposit
        </button>
        <button className="flex-1 border text-gray-500 rounded-lg py-1 hover:bg-gray-100">
          Withdraw
        </button>
      </div>
    </div>
  );
}
