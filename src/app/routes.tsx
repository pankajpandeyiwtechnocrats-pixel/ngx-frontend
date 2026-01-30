import { Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import LiveChat from "../pages/LiveChat";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Help from "../pages/Help";
import Security from "../pages/Security";
import TradingTerminalSettings from "../pages/TradingTerminalSettings";
import Support from "../pages/Support";
import CopyTrading from "../pages/CopyTrading";
import TradingConditions from "../pages/TradingConditions";
import Savings from "../pages/Savings";
import VirtualPrivateServer from "../pages/VirtualPrivateServer";
import AnalystViews from "../pages/AnalystViews";
import MarketNews from "../pages/MarketNews";
import EconomicCalendar from "../pages/EconomicCalendar";
import Deposit from "../pages/Deposit";
import Withdraw from "../pages/Withdrawal";
import TransactionHistory from "../pages/TransactionHistory";
import CryptoWallet from "../pages/CryptoWallet";
import MyAccounts from "../pages/MyAccounts";
import Performance from "../pages/Performance";
import OrderHistory from "../pages/OrderHistory";
import TradingTerminal from "../pages/TradingTerminal";







export default function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* DASHBOARD */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<LiveChat />} />
        <Route path="/help" element={<Help />} />
        <Route path="/security" element={<Security />} />
        <Route
          path="/settings/trading-terminal"
          element={<TradingTerminalSettings />}
        />
        <Route path="/support" element={<Support />} />
        <Route path="/copy-trading" element={<CopyTrading />} />
        <Route path="/benefits/trading-conditions" element={<TradingConditions />} />
        <Route path="/benefits/savings" element={<Savings />} />
        <Route path="/benefits/vps" element={<VirtualPrivateServer />} />
        <Route path="/analytics/analyst-views" element={<AnalystViews />} />
        <Route path="/analytics/market-news" element={<MarketNews />} />
        <Route path="/analytics/economic-calendar" element={<EconomicCalendar />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdrawal" element={<Withdraw />} />
        <Route path="/transactions" element={<TransactionHistory />} />
        <Route path="/crypto-wallet" element={<CryptoWallet />} />
        <Route path="/accounts" element={<MyAccounts />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/orders-history" element={<OrderHistory />} />
        <Route path="/trade" element={<TradingTerminal />} />


        




      </Route>
    </Routes>
  );
}
