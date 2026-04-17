import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import Dashboard from "./Pages/Dashboard";
import AllLeads from "./Pages/AllLeads";
import AllEmployees from "./Pages/AllEmployee";
import AllCustomers from "./Pages/AllCustomer";
import TaxInvoice from "./Pages/TaxInvoice";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <BrowserRouter>

      <ToastContainer position="top-right" autoClose={1500} />

      <Routes>

        {/* ✅ ROOT */}
        <Route
          path="/"
          element={
            isLoggedIn
              ? <Navigate to="/dashboard" />
              : <Navigate to="/login" />
          }
        />

        {/* ✅ LOGIN */}
        <Route
          path="/login"
          element={
            isLoggedIn
              ? <Navigate to="/dashboard" />
              : <Login />
          }
        />

        {/* ✅ MAIN LAYOUT */}
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="leads" element={<AllLeads />} />
          <Route path="employees" element={<AllEmployees />} />
          <Route path="customers" element={<AllCustomers />} />
          <Route path="invoice" element={<TaxInvoice />} />
        </Route>

        {/* ✅ fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;