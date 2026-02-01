import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import fx_logo from "../../assets/fx_logo.png";

import {
  Bell,
  User,
  Menu,
  LogOut,
  Settings,
  ShieldCheck,
} from "lucide-react";

type Props = {
  onMenuClick: () => void;
};

export default function Navbar({ onMenuClick }: Props) {
  const [openProfile, setOpenProfile] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  const notifyRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setOpenProfile(false);
      }
      if (
        notifyRef.current &&
        !notifyRef.current.contains(e.target as Node)
      ) {
        setOpenNotifications(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-40
        h-14 bg-white
        border-b border-gray-200
        flex items-center justify-between
        px-4 md:px-6
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="
            md:hidden
            w-9 h-9 flex items-center justify-center
            rounded-full
            text-gray-600 hover:bg-gray-100
          "
        >
          <Menu size={20} />
        </button>
      </div>
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 hover:opacity-90 transition"
        >
          <img
            src={fx_logo}
            alt="Logo"
            className="h-7 w-auto object-contain"
          />
        </Link>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-1">
        {/* NOTIFICATIONS */}
        <div ref={notifyRef} className="relative">
          <IconButton
            icon={<Bell size={18} />}
            onClick={() => {
              setOpenNotifications(!openNotifications);
              setOpenProfile(false);
            }}
          />

          {openNotifications && (
            <div
              className="
                relative right-0 mt-50 w-80
                bg-white border border-gray-200
                rounded-xl shadow-lg
                overflow-hidden
                animate-dropdown
              "
            >
              <div className="px-4 py-3 font-semibold text-slate-900">
                Notifications
              </div>

              <div className="border-t" />

              {/* EMPTY STATE */}
              <div className="py-10 text-center text-sm text-slate-500">
                You don’t have any notifications yet
              </div>
            </div>
          )}
        </div>

        
        {/* PROFILE */}
        <div ref={profileRef} className="relative">
          <IconButton
            icon={<User size={18} />}
            onClick={() => {
              setOpenProfile(!openProfile);
              setOpenNotifications(false);
            }}
            active={openProfile}
          />

          {openProfile && (
            <div
              className="
                absolute right-0 mt-3 w-64
                bg-white border border-gray-200
                rounded-xl shadow-lg z-50
                animate-dropdown pb-5
              "
            >
              <div className="px-4 py-5 flex gap-3 items-center">
                <div className="p-2 bg-gray-100 text-gray-500 rounded-full">
                  <User size={16} />
                </div>
                <div>
                  <div className="font-medium text-slate-900">
                    PANKAJ PANDEY
                  </div>
                  <div className="text-xs text-slate-500">
                    p****3@gmail.com
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-300" />

              <NavLink
                to="/settings"
                onClick={() => setOpenProfile(false)}
                className="menu-item mt-3"
              >
                <Settings size={16} />
                Settings
              </NavLink>

              <NavLink
                to="/benefits/trading-conditions"
                onClick={() => setOpenProfile(false)}
                className="menu-item"
              >
                <ShieldCheck size={16} />
                Trading conditions
              </NavLink>

              <div className="border-t my-3 border-gray-300" />

              <button
                onClick={() => {
                  setOpenProfile(false);
                  navigate("/login");
                }}
                className="menu-item text-red-600 hover:bg-red-50"
              >
                <LogOut size={16} />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

/* ---------- Icon Button ---------- */
function IconButton({
  icon,
  onClick,
  active,
}: {
  icon: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-9 h-9 flex items-center justify-center
        rounded-full transition
        ${
          active
            ? "bg-gray-100 border border-gray-100 text-gray-500"
            : "hover:bg-gray-50 text-gray-600"
        }
      `}
    >
      {icon}
    </button>
  );
}
