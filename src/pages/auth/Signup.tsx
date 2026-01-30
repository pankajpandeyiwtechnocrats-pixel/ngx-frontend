import { Mail, Lock, User, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Signup() {

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Content */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md px-6">
          <h2 className="text-2xl font-semibold text-black text-center mb-8 leading-snug">
            <p className="block">Welcome to <span className="font-bold text-[#2563eb]">ngX</span> </p>
          </h2>


          {/* Tabs */}
          <div className="flex justify-center gap-8 border-b mb-8">
            <Link
              to="/login"
              className="pb-2 text-gray-400 hover:text-black"
            >
              Sign in
            </Link>
            <span className="pb-2 border-b-2 text-black border-black font-medium">
              Create an account
            </span>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="text-sm text-gray-600">Full name</label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="w-full text-gray-900 border-gray-50 pl-10 pr-3 py-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Your mobile number
              </label>
                <div className="relative mt-1">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <span className="absolute left-10 mt-0.5 pr-1 py-2 text-gray-500 font-semibold bg-transparent">+91</span>
                    <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    className="w-full text-gray-900 border-gray-50 pl-20 pr-3 py-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                    />
                </div>
            </div>
                       
            <div>
              <label className="text-sm text-gray-600">
                Your email address
              </label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  className="w-full text-gray-900 border-gray-50 pl-10 pr-3 py-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  className="w-full text-gray-900 border-gray-50 pl-10 pr-3 py-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                />
              </div>
            </div>

            <button
              type="button"
              className="w-full mt-2 py-2 rounded bg-[#2563eb] font-medium text-white"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
