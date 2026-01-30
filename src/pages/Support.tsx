export default function Support() {
  return (
    <div className="max-w-5xl space-y-8">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Support hub
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Get help from our support team or track your requests.
        </p>
      </div>

      {/* SUPPORT CHANNELS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SupportCard
          title="Live chat"
          description="Chat with our support team 24/7"
          action="Start chat"
        />
        <SupportCard
          title="Email support"
          description="Send us an email and get a response"
          action="Send email"
        />
        <SupportCard
          title="Help center"
          description="Browse FAQs and guides"
          action="Open help"
        />
      </div>

      {/* TICKETS */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-slate-900">
            Support tickets
          </h2>

          <button
            className="bg-yellow-400 hover:bg-yellow-500
                       text-black font-medium px-4 py-2
                       rounded-lg transition"
          >
            Create ticket
          </button>
        </div>

        {/* EMPTY STATE */}
        <div className="border border-dashed rounded-lg p-8
                        flex flex-col items-center text-center">
          <div className="text-4xl mb-3">🎫</div>

          <div className="font-medium text-slate-700">
            No support tickets
          </div>

          <div className="text-sm text-slate-500 mt-1">
            You have not created any support tickets yet.
          </div>
        </div>
      </div>

      {/* STATUS INFO */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6
                      flex flex-col sm:flex-row sm:items-center
                      sm:justify-between gap-4">
        <div>
          <h3 className="font-medium text-slate-900">
            All systems operational
          </h3>
          <p className="text-sm text-slate-600">
            Trading, payments, and withdrawals are running normally.
          </p>
        </div>

        <span
          className="inline-flex items-center px-3 py-1
                     rounded-full text-sm font-medium
                     bg-green-100 text-green-700"
        >
          Operational
        </span>
      </div>
    </div>
  );
}

/* ---------- Helper Components ---------- */

function SupportCard({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5
                    hover:shadow-md transition">
      <div className="font-medium text-slate-900">
        {title}
      </div>

      <div className="text-sm text-slate-500 mt-1">
        {description}
      </div>

      <button
        className="mt-4 text-sm font-medium text-yellow-600
                   hover:underline"
      >
        {action}
      </button>
    </div>
  );
}
