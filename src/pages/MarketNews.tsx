export default function MarketNews() {
  return (
    <div className="max-w-6xl space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Market news
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Latest financial and market-related news.
        </p>
      </div>

      {/* NEWS LIST */}
      <div className="space-y-4">
        <NewsItem
          title="US inflation data beats expectations"
          summary="Markets react as inflation comes higher than forecast."
          time="2 hours ago"
        />
        <NewsItem
          title="Bitcoin stabilizes after recent volatility"
          summary="Crypto markets show signs of consolidation."
          time="5 hours ago"
        />
        <NewsItem
          title="Asian stocks open higher amid global optimism"
          summary="Equity markets rise following positive global cues."
          time="Yesterday"
        />
      </div>
    </div>
  );
}

function NewsItem({
  title,
  summary,
  time,
}: {
  title: string;
  summary: string;
  time: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition">
      <div className="font-medium text-slate-900">
        {title}
      </div>
      <div className="text-sm text-slate-600 mt-1">
        {summary}
      </div>
      <div className="text-xs text-slate-500 mt-2">
        {time}
      </div>
    </div>
  );
}
