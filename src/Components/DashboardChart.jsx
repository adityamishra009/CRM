import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const months = [
  { name: "Jan", leads: 2300, closure: 700000 },
  { name: "Feb", leads: 2200, closure: 650000 },
  { name: "Mar", leads: 2100, closure: 750000 },
  { name: "Apr", leads: 100, closure: 200000 },
  { name: "May", leads: 0, closure: 0 },
  { name: "Jun", leads: 0, closure: 0 },
  { name: "Jul", leads: 0, closure: 0 },
  { name: "Aug", leads: 0, closure: 0 },
  { name: "Sep", leads: 0, closure: 0 },
  { name: "Oct", leads: 0, closure: 0 },
  { name: "Nov", leads: 0, closure: 0 },
  { name: "Dec", leads: 0, closure: 0 },
];

const days = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  leads: Math.floor(Math.random() * 50) + 50,
  revenue: Math.floor(Math.random() * 100000),
}));

const ChartCard = ({ title, children }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: "10px",
      padding: "16px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      height: "100%",
    }}
  >
    <h3 style={{ marginBottom: "10px", fontWeight: 600 }}>{title}</h3>
    {children}
  </div>
);

const DashboardCharts = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      
      {/* TOP CHARTS (RESPONSIVE GRID) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {/* Leads */}
        <ChartCard title="Month On Month Leads">
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={months}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="leads"
                stroke="#1677ff"
                fill="#1677ff33"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Closure */}
        <ChartCard title="Month On Month Closure">
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={months}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="closure"
                stroke="#52c41a"
                fill="#52c41a33"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* DAY WISE LEADS */}
      <div style={{ marginTop: "16px" }}>
        <ChartCard title="Day Wise Leads">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={days}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="leads"
                stroke="#1677ff"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* DAY WISE REVENUE */}
      <div style={{ marginTop: "16px" }}>
        <ChartCard title="Day Wise Revenue">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={days}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#52c41a"
                fill="#52c41a33"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

export default DashboardCharts;