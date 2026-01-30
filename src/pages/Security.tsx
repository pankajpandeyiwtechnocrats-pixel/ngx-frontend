export default function Security() {
  return (
    <div className="max-w-4xl space-y-8">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Security
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage your account security settings and protect your account.
        </p>
      </div>

      {/* PASSWORD */}
      <Section
        title="Password"
        description="Update your password regularly to keep your account secure."
      >
        <SecurityRow
          title="Password"
          value="Last changed 3 months ago"
          action="Change password"
        />
      </Section>

      {/* TWO-FACTOR AUTH */}
      <Section
        title="Two-factor authentication (2FA)"
        description="Add an extra layer of security to your account."
      >
        <SecurityRow
          title="Authenticator app"
          value="Not enabled"
          action="Enable"
        />
        <SecurityRow
          title="SMS authentication"
          value="Not enabled"
          action="Enable"
        />
      </Section>

      {/* DEVICES */}
      <Section
        title="Devices & sessions"
        description="See where you are currently logged in."
      >
        <div className="space-y-3">
          <DeviceRow
            device="Chrome on Windows"
            location="India"
            status="Active now"
          />
          <DeviceRow
            device="Mobile app"
            location="India"
            status="Last active yesterday"
          />
        </div>

        <button
          className="mt-4 text-sm font-medium text-red-600 hover:underline"
        >
          Log out of all devices
        </button>
      </Section>

      {/* ACCOUNT ACTIONS */}
      <Section
        title="Account actions"
        description="Advanced security options."
      >
        <div className="flex items-center justify-between border rounded-lg p-4">
          <div>
            <div className="font-medium text-slate-900">
              Close account
            </div>
            <div className="text-sm text-slate-500">
              Permanently close your account
            </div>
          </div>

          <button className="text-sm font-medium text-red-600 hover:underline">
            Close account
          </button>
        </div>
      </Section>
    </div>
  );
}

/* ---------- Helper Components ---------- */

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

function SecurityRow({
  title,
  value,
  action,
}: {
  title: string;
  value: string;
  action: string;
}) {
  return (
    <div className="flex items-center justify-between border rounded-lg p-4">
      <div>
        <div className="font-medium text-slate-900">
          {title}
        </div>
        <div className="text-sm text-slate-500">
          {value}
        </div>
      </div>

      <button className="text-sm font-medium text-yellow-600 hover:underline">
        {action}
      </button>
    </div>
  );
}

function DeviceRow({
  device,
  location,
  status,
}: {
  device: string;
  location: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between border rounded-lg p-4">
      <div>
        <div className="font-medium text-slate-900">
          {device}
        </div>
        <div className="text-sm text-slate-500">
          {location}
        </div>
      </div>

      <div className="text-sm text-green-600 font-medium">
        {status}
      </div>
    </div>
  );
}
