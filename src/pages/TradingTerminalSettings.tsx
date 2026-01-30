export default function TradingTerminalSettings() {
  return (
    <div className="max-w-4xl space-y-8">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Trading terminal settings
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Customize how your trading terminal behaves and looks.
        </p>
      </div>

      {/* CHART SETTINGS */}
      <Section
        title="Chart settings"
        description="Adjust how charts are displayed in the trading terminal."
      >
        <ToggleRow
          title="Show indicators panel"
          description="Display technical indicators on charts"
          enabled
        />
        <ToggleRow
          title="Crosshair mode"
          description="Enable crosshair for precise price tracking"
        />
        <SelectRow
          title="Default timeframe"
          options={["1m", "5m", "15m", "1h", "4h", "1D"]}
        />
        <SelectRow
          title="Chart theme"
          options={["Light", "Dark"]}
        />
      </Section>

      {/* TRADING PREFERENCES */}
      <Section
        title="Trading preferences"
        description="Control how trades are placed and managed."
      >
        <ToggleRow
          title="One-click trading"
          description="Place trades instantly without confirmation"
        />
        <ToggleRow
          title="Close position with opposite order"
          description="Automatically close open positions"
          enabled
        />
        <SelectRow
          title="Default order type"
          options={["Market", "Limit", "Stop"]}
        />
      </Section>

      {/* ORDER CONFIRMATION */}
      <Section
        title="Order confirmation & risk"
        description="Manage confirmations and risk warnings."
      >
        <ToggleRow
          title="Order confirmation popup"
          description="Ask confirmation before placing orders"
          enabled
        />
        <ToggleRow
          title="High-risk trade warning"
          description="Show warning for high leverage trades"
          enabled
        />
      </Section>

      {/* INTERFACE */}
      <Section
        title="Interface preferences"
        description="Customize layout and behavior of the terminal."
      >
        <ToggleRow
          title="Compact mode"
          description="Reduce spacing to show more data"
        />
        <ToggleRow
          title="Remember last instrument"
          description="Open last traded symbol automatically"
          enabled
        />
        <SelectRow
          title="Language"
          options={["English", "Hindi", "Spanish"]}
        />
      </Section>

      {/* ACTIONS */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          className="bg-yellow-400 hover:bg-yellow-500
                     text-black font-medium px-5 py-2
                     rounded-lg transition"
        >
          Save settings
        </button>

        <button
          className="border border-slate-300
                     text-slate-700 font-medium px-5 py-2
                     rounded-lg hover:bg-gray-100 transition"
        >
          Reset to default
        </button>
      </div>
    </div>
  );
}

/* ================= Helper Components ================= */

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
      <div>
        <h2 className="font-semibold text-slate-900">
          {title}
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          {description}
        </p>
      </div>

      {children}
    </div>
  );
}

function ToggleRow({
  title,
  description,
  enabled = false,
}: {
  title: string;
  description: string;
  enabled?: boolean;
}) {
  return (
    <div className="flex items-center justify-between border rounded-lg p-4">
      <div>
        <div className="font-medium text-slate-900">
          {title}
        </div>
        <div className="text-sm text-slate-500">
          {description}
        </div>
      </div>

      <div
        className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer
          ${
            enabled
              ? "bg-yellow-400 justify-end"
              : "bg-gray-300 justify-start"
          }`}
      >
        <div className="w-4 h-4 bg-white rounded-full shadow" />
      </div>
    </div>
  );
}

function SelectRow({
  title,
  options,
}: {
  title: string;
  options: string[];
}) {
  return (
    <div className="flex items-center justify-between border rounded-lg p-4">
      <div className="font-medium text-slate-900">
        {title}
      </div>

      <select
        className="text-sm border border-slate-300 rounded-md px-2 py-1
                   focus:outline-none bg-white text-black"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
