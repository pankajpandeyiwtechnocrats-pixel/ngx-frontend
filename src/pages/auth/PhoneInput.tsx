import { Smartphone } from "lucide-react";
import { useState } from "react";

export default function PhoneInput({
  onSubmit,
}: {
  onSubmit: (phone: string) => void;
}) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function validate() {
    const regex = /^[6-9]\d{9}$/;

    if (!regex.test(phone)) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }

    setError("");
    onSubmit(phone);
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm text-slate-500">Mobile number</label>

        <div
          className={`flex items-center border rounded-lg overflow-hidden ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        >
          <div className="px-3 bg-gray-50 border-r text-sm">
            🇮🇳 +91
          </div>

          <div className="pl-3 text-gray-400">
            <Smartphone size={18} />
          </div>

          <input
            type="tel"
            inputMode="numeric"
            maxLength={10}
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, ""))
            }
            placeholder="Enter mobile number"
            className="flex-1 px-3 py-2 outline-none text-sm"
          />
        </div>

        {error && (
          <p className="text-xs text-red-600 mt-1">{error}</p>
        )}
      </div>

      <button
        onClick={validate}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded-lg"
      >
        Continue
      </button>
    </div>
  );
}
