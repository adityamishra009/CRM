import React from "react";
import { Card, Row, Col } from "antd";
import {
  AppstoreOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import RecentLeadsTable from "../Components/RecentLeadsTable";
import TopCustomersTable from "../Components/TopCustomersTable";
import DashboardChart from "../Components/DashboardChart";

const Dashboard = () => {
  const stats = [
    {
      title: "Today's Leads",
      value: 8,
      change: "-27.27%",
      icon: <AppstoreOutlined />,
      gradient: "linear-gradient(135deg, #1677ff, #69b1ff)",
    },
    {
      title: "Weekly Leads",
      value: 19,
      change: "-83.33%",
      icon: <AppstoreOutlined />,
      gradient: "linear-gradient(135deg, #fa541c, #ff9c6e)",
    },
    {
      title: "Monthly Leads",
      value: 89,
      change: "-95.87%",
      icon: <CalendarOutlined />,
      gradient: "linear-gradient(135deg, #52c41a, #95de64)",
    },
    {
      title: "Yesterday's NCBucket Leads",
      value: 0,
      change: "0%",
      icon: <CalendarOutlined />,
      gradient: "linear-gradient(135deg, #13c2c2, #5cdbd3)",
    },
    {
      title: "Monthly NCBucket Leads",
      value: 0,
      change: "0%",
      icon: <CalendarOutlined />,
      gradient: "linear-gradient(135deg, #eb2f96, #ff85c0)",
    },
  ];

  return (
    <div className="p-4 bg-[#f5f7fa] min-h-screen">

      {/* HEADER */}
      <h2 className="mb-4 font-semibold">Leads (77,076)</h2>

      {/* CARDS */}
      <Row gutter={[16, 16]}>
        {stats.map((item, index) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xl={6}
            key={index}
            className="flex"
          >
            <Card
              bordered={false}
              className="!rounded-xl !w-full !text-white"
              style={{
                background: item.gradient,
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              }}
              bodyStyle={{ padding: "16px" }}
            >
              <div className="flex items-center">
                <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-base mr-3">
                  {item.icon}
                </div>

                <div>
                  <div className="text-[13px] opacity-90">{item.title}</div>
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="text-xs mt-[2px] opacity-85">{item.change}</div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* FULL WIDTH CONTENT */}
      <div className="mt-6">
        <Card className="!rounded-xl">
          <RecentLeadsTable />
        </Card>
      </div>

      <div className="mt-6">
        <Card className="!rounded-xl">
          <TopCustomersTable />
        </Card>
      </div>

      <div className="mt-6">
        <Card className="!rounded-xl">
          <DashboardChart />
        </Card>
      </div>

    </div>
  );
};

export default Dashboard;