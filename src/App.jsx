import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Pages/MainLayout"
import Dashboard from "./Pages/Dashboard";
import AllLeads from "./Pages/AllLeads";
import AllEmployees from "./Pages/AllEmployee"
import AllCustomers from "./Pages/AllCustomer";
import TaxInvoice from "./Pages/TaxInvoice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/leads" element={<AllLeads/>} />
          <Route path="/employees" element={<AllEmployees />} />
          <Route path="/customers" element={<AllCustomers />} />
          <Route path="/invoice" element={<TaxInvoice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;