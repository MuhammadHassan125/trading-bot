import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import GuestRoute from "./GuestRoute";
import AuthFormLayout from "../Layouts/AuthLayout/AuthFormLayout";
import TradingLayout from "../Layouts/TradingLayout/TradingLayout";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import AuthRoute from "./AuthRoute";

// lazy import file routes 
const Login = lazy (() => import ("../Pages/Auth/Login/Login"));
const Dashboard = lazy (() => import("../Pages/Dashboard"));
const Markets = lazy (() => import ("../Pages/Dashboard/Markets/Markets"));
const Withdraw = lazy (() => import ("../Pages/Dashboard/Withdraw/Withdraw"));
const Deposite = lazy (() => import ("../Pages/Dashboard/Deposite/Deposite"));
const History = lazy(() => import ("../Pages/Dashboard/History/History"));
const CryptoExchange = lazy(() => import("../Pages/Dashboard/Exchange/Exchange"));
const AfterExchange = lazy(() => import("../Pages/Dashboard/AfterExchange/AfterExchange"));

const Router = () => {
  return (
    <Routes>
      <Route element={<GuestRoute />}>
        <Route element={<AuthFormLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Route>

      <Route element={<AuthRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/deposit" element={<Deposite />} />
        <Route path="/history" element={<History />} />
        <Route path="/exchange" element={<CryptoExchange />} />
        <Route path="/exchange-save" element={<AfterExchange />} />
        </Route>

        <Route path="/trading" element={<TradingLayout />} />
        <Route path="/buy-sell" element={<TradingLayout />} />
        <Route path="/widthdraw" element={<Withdraw />} />
      </Route>
    </Routes>
  );
};

export default Router;
