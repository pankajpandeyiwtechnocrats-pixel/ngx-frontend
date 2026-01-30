import { useEffect, useRef, useState } from "react";

export default function OtpVerification({
  phone,
  onVerify,
}: {
  phone: string;
  onVerify: (otp: string) => void;
}) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  function handleChange(value: string, index: number) {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    setError("");

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  function handleVerify() {
    const code = otp.join("");

    if (code.length < 6) {
      setError("Please enter the complete OTP");
      return;
    }

    onVerify(code);
  }

  function resendOtp() {
    setOtp(Array(6).fill(""));
    setTimer(30);
    inputsRef.current[0]?.focus();
  }

  return (
    <div className="max-w-sm mx-auto bg-white border rounded-xl p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-slate-900">
          Verify OTP
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Enter the 6-digit code sent to <br />
          <span className="font-medium">+91 {phone}</span>
        </p>
      </div>

      {/* OTP INPUTS */}
      <div className="flex justify-center gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`
              w-10 h-12 text-center text-lg font-semibold
              border rounded-lg outline-none
              ${error ? "border-red-500" : "border-gray-300"}
              focus:border-yellow-500
            `}
          />
        ))}
      </div>

      {error && (
        <p className="text-center text-sm text-red-600">
          {error}
        </p>
      )}

      {/* VERIFY BUTTON */}
      <button
        onClick={handleVerify}
        className="
          w-full bg-yellow-400 hover:bg-yellow-500
          text-black font-medium py-2 rounded-lg
          transition
        "
      >
        Verify
      </button>

      {/* RESEND */}
      <div className="text-center text-sm text-slate-500">
        {timer > 0 ? (
          <>Resend OTP in <span className="font-medium">{timer}s</span></>
        ) : (
          <button
            onClick={resendOtp}
            className="text-yellow-600 font-medium hover:underline"
          >
            Resend OTP
          </button>
        )}
      </div>
    </div>
  );
}
