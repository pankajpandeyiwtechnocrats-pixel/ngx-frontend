import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  ChevronDown,
  Wallet,
  BarChart2,
  TrendingUp,
  Settings,
  HelpCircle,
  LayoutGrid,
  Layers,
  LogOut,
  MessageCircle,
  X,
} from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type MenuItem = {
  name: string;
  path: string;
  badge?: string;
};

type MenuSection = {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
};


const menuSections: MenuSection[] = [
        
  {
    title: "Trading",
    icon: <TrendingUp size={16} />,
    items: [
      { name: "My account", path: "/accounts" },
      { name: "Performance", path: "/performance" },
      { name: "History of orders", path: "/orders-history" },
      { name: "Trading Terminal", path: "/trade" },
    ],
  },
  {
    title: "Payments & wallet",
    icon: <Wallet size={16} />,
    items: [
      { name: "Deposit", path: "/deposit" },
      { name: "Withdrawal", path: "/withdrawal" },
      { name: "Transaction history", path: "/transactions" },
      { name: "Crypto wallet", path: "/crypto-wallet" },
    ],
  },
  {
    title: "Analytics",
    icon: <BarChart2 size={16} />,
    items: [
      { name: "Analyst views", path: "/analytics/analyst-views" },
      { name: "Market news", path: "/analytics/market-news" },
      { name: "Economic calendar", path: "/analytics/economic-calendar" },
    ],
  },
  {
    title: "ngX nenefits",
    icon: <LayoutGrid size={16} />,
    items: [
      { name: "Trading conditions", path: "/benefits/trading-conditions" },
      { name: "Savings", path: "/benefits/savings" },
      { name: "Virtual private server", path: "/benefits/vps" },
    ],
  },
  {
    title: "Copy Trading",
    icon: <Layers size={16} />,
    items: [{ name: "Copy Trading", path: "/copy-trading" }],
  },
  {
    title: "Support hub",
    icon: <HelpCircle size={16} />,
    items: [{ name: "Support", path: "/support", badge: "New" }],
  },
  {
    title: "Settings",
    icon: <Settings size={16} />,
    items: [
      { name: "Profile", path: "/profile" },
      { name: "Security", path: "/security" },
      { name: "Trading terminal", path: "/settings/trading-terminal" },
    ],
  },
];

export default function Sidebar({ isOpen, onClose }: Props) {
  const [openSection, setOpenSection] = useState<string | null>("Trading");

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 md:hidden
        transition-opacity duration-300 ease-out
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-14 h-[calc(100vh-3.5rem)] z-50 w-72 flex flex-col
        bg-white border-r border-gray-200
        transform transition-transform duration-300 ease-out will-change-transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* Header */}
        <div className="relative pl-5 p-5 border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 md:hidden text-gray-500 hover:text-gray-800 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="font-semibold text-slate-900 text-sm">
            PANKAJ PANDEY
          </div>
          <div className="text-sm text-slate-500">
            p****3@gmail.com
          </div>
        </div>

        {/* Balance */}
        <div className="p-5 pl-5 border-b border-gray-200 font-semibold text-slate-900 text-sm">
          <Wallet className="inline mr-3" size={16} />
          0.44 USD
        </div>


        {/* Menu */}
        <nav className="flex-1 p-2 space-y-1 overflow-y-auto scrollbar-thin">
          {menuSections.map((section) => {
            const isOpenSection = openSection === section.title;

            return (
              <div key={section.title}>
                {/* Section header */}
                <button
                  onClick={() =>
                    setOpenSection(isOpenSection ? null : section.title)
                  }
                  className="w-full flex justify-between items-center
                  px-4 py-3 rounded
                  text-slate-700 hover:bg-gray-100
                  transition-colors"
                >
                  <span className="flex items-center gap-3 text-sm">
                    <span className="text-gray-500">
                      {section.icon}
                    </span>
                    {section.title}
                  </span>

                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300
                    ${isOpenSection ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Animated section items */}
                <div
                  className={`ml-10 overflow-hidden transition-all duration-300 ease-out
                  ${
                    isOpenSection
                      ? "max-h-96 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-1"
                  }`}
                >
                  <div className="mt-1 space-y-1">
                    {section.items.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded text-sm
                          transition-all duration-200
                          ${
                            isActive
                              ? "bg-yellow-400 text-black"
                              : "text-slate-600 hover:bg-gray-100 hover:translate-x-1"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bottom links */}
          <div className="border-t border-gray-200 mt-4 pt-4 space-y-1">
            <NavLink
              to="/chat"
              className="flex items-center gap-3 text-sm px-4 py-3 rounded
              text-slate-700 hover:bg-gray-100 transition-colors"
            >
              <MessageCircle size={16} className="text-gray-500" />
              Live Chat
            </NavLink>

            <NavLink
              to="/help"
              className="flex items-center gap-3 text-sm px-4 py-3 rounded
              text-slate-700 hover:bg-gray-100 transition-colors"
            >
              <HelpCircle size={16} className="text-gray-500" />
              Help
            </NavLink>

            <NavLink
              to="/help"
              className="flex items-center gap-3 text-sm px-4 py-3 rounded
              text-red-500 hover:bg-gray-100 transition-colors"
            >
              <LogOut size={16} className="text-red-500" />
              Logout
            </NavLink>

            <div className="h-20 w-2"> d </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
