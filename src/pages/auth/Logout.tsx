import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1️⃣ Clear auth data
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");

    // If you used sessionStorage
    sessionStorage.clear();

    // 2️⃣ Redirect to login
    navigate("/login", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-yellow-400 mx-auto mb-4"></div>
        <p className="text-sm text-gray-600">
          Logging you out…
        </p>
      </div>
    </div>
  );
}
