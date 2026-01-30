export default function Help() {
  return (
    <div className="max-w-5xl space-y-8">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Help & Support
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Find answers, guides, and get support when you need it.
        </p>
      </div>

      {/* QUICK ACTIONS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <HelpCard
          title="Live chat"
          description="Chat with our support team 24/7"
          action="Open chat"
        />
        <HelpCard
          title="FAQs"
          description="Find answers to common questions"
          action="View FAQs"
        />
        <HelpCard
          title="Trading guides"
          description="Learn how to trade step by step"
          action="Read guides"
        />
      </div>

      {/* FAQ SECTION */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="font-semibold text-slate-900 mb-4">
          Frequently asked questions
        </h2>

        <div className="space-y-3">
          <FaqItem
            question="How do I open a trading account?"
            answer="You can open a trading account from the dashboard by clicking on “Open account”."
          />
          <FaqItem
            question="How do I deposit funds?"
            answer="Go to Payments & wallet → Deposit and choose your preferred payment method."
          />
          <FaqItem
            question="Is my money safe?"
            answer="We use industry-standard security practices to keep your funds and data secure."
          />
        </div>
      </div>

      {/* CONTACT SUPPORT */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="font-medium text-slate-900">
            Still need help?
          </h3>
          <p className="text-sm text-slate-600">
            Our support team is available 24/7.
          </p>
        </div>

        <button
          className="bg-yellow-400 hover:bg-yellow-500
                     text-black font-medium px-4 py-2
                     rounded-lg transition self-start sm:self-auto"
        >
          Contact support
        </button>
      </div>
    </div>
  );
}

/* ---------- Helper components ---------- */

function HelpCard({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition">
      <div className="font-medium text-slate-900">
        {title}
      </div>
      <div className="text-sm text-slate-500 mt-1">
        {description}
      </div>

      <button className="mt-4 text-sm font-medium text-yellow-600 hover:underline">
        {action}
      </button>
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="border border-slate-200 rounded-lg p-4">
      <div className="font-medium text-slate-900">
        {question}
      </div>
      <div className="text-sm text-slate-500 mt-1">
        {answer}
      </div>
    </div>
  );
}
