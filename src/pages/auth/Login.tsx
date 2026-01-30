import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";


export default function Login() {
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
            <span className="pb-2 border-b-2 text-black border-black font-medium">
              Sign in
            </span>
            <Link
              to="/signup"
              className="pb-2 text-gray-400 hover:text-black"
            >
              Create an account
            </Link>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="text-sm text-gray-600">
                Your email address
              </label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  className="text-gray-900 border-gray-50 w-full pl-10 pr-3 py-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  className="text-gray-900 border-gray-50 w-full pl-10 pr-3 py-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                />
              </div>
            </div>

            <button
              type="button"
              className="w-full py-2 mt-2 rounded text-white bg-[#2563eb] font-medium "
            >
              Sign in
            </button>
          </form>

          {/* Footer links */}
          <div className="text-center mt-6 space-y-3">
            
            <p className="text-sm text-blue-600 hover:underline cursor-pointer">
              I forgot my password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
