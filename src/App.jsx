import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Pages/MainLayout"
import Dashboard from "./Pages/Dashboard";
import AllLeads from "./Pages/AllLeads";
import AllEmployees from "./Pages/AllEmployee"
import AllCustomers from "./Pages/AllCustomer";
import TaxInvoice from "./Pages/TaxInvoice";
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import Login from "./Pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
               
                <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />   </Route>
         
          <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="leads" element={<AllLeads/>} />
          <Route path="employees" element={<AllEmployees />} />
          <Route path="customers" element={<AllCustomers />} />
          <Route path="invoice" element={<TaxInvoice />} />   </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;