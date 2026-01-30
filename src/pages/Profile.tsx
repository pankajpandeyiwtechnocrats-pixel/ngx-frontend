export default function Profile() {
  return (
    <div className="max-w-3xl space-y-6">
      {/* PAGE TITLE */}
      <h1 className="text-2xl font-semibold text-slate-900">
        Profile
      </h1>

      {/* PERSONAL INFO */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="font-medium text-slate-900 mb-4">
          Personal information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-500">
          <Input label="Full name" value="Pankaj Pandey" />
          <Input label="Email address" value="p****3@gmail.com" />
          <Input label="Phone number" value="+91 ********90" />
          <Input label="Country" value="India" />
        </div>

        <button
          className="mt-6 bg-yellow-400 hover:bg-yellow-500
                     text-black font-medium px-4 py-2
                     rounded-lg transition"
        >
          Save changes
        </button>
      </div>

      {/* SECURITY */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="font-medium text-slate-900 mb-4">
          Security
        </h2>

        <div className="space-y-3">
          <SecurityRow
            title="Password"
            description="Last changed 3 months ago"
            action="Change"
          />
          <SecurityRow
            title="Two-factor authentication"
            description="Not enabled"
            action="Enable"
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- Helpers ---------- */

function Input({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <label className="block text-sm text-slate-500 mb-1">
        {label}
      </label>
      <input
        value={value}
        disabled
        className="w-full px-3 py-2 border border-slate-300
                   rounded-md text-sm bg-gray-50"
      />
    </div>
  );
}

function SecurityRow({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action: string;
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

      <button className="text-sm bg-amber-400 text-black px-5 py-2 rounded-lg font-small hover:underline">
        {action}
      </button>
    </div>
  );
}
