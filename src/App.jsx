import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import Dashboard from "./Pages/Dashboard";
import AllLeads from "./Pages/AllLeads";
import AllEmployees from "./Pages/AllEmployee";
import AllCustomers from "./Pages/AllCustomer";
import TaxInvoice from "./Pages/TaxInvoice";
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import Login from "./Pages/Login";


function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ ROOT DECISION */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* ✅ Public */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* ✅ Private */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="leads" element={<AllLeads />} />
            <Route path="employees" element={<AllEmployees />} />
            <Route path="customers" element={<AllCustomers />} />
            <Route path="invoice" element={<TaxInvoice/>} />
          </Route>
        </Route>

        {/* ✅ fallback */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;