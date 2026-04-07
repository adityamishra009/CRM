import React from "react";
import { Card, Row, Col } from "antd";
import {
  AppstoreOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import RecentLeadsTable from "../Components/RecentLeadsTable";
import TopCustomersTable from "../Components/TopCustomersTable";

import DashboardChart from "../Components/DashboardChart"

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
      title: "Monthly Leads",
      value: 0,
      change: "0%",
      icon: <CalendarOutlined />,
      gradient: "linear-gradient(135deg, #722ed1, #b37feb)",
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
    <div
      style={{
        padding: "16px",
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <h2 style={{ marginBottom: "14px", fontWeight: 600 }}>
        Leads (77,076)
      </h2>

      {/* CARDS */}
      <Row gutter={[12, 12]}>
        {stats.map((item, index) => (
          <Col xs={24} sm={12} md={12} lg={8} key={index}>
            <Card
              bordered={false}
              style={{
                borderRadius: "12px",
                background: item.gradient,
                color: "#fff",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              }}
              bodyStyle={{ padding: "16px" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                
                {/* ICON */}
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    marginRight: "12px",
                  }}
                >
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      opacity: 0.9,
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                    }}
                  >
                    {item.value}
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      marginTop: "2px",
                      opacity: 0.85,
                    }}
                  >
                    {item.change}
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* TABLES */}
      <div style={{ marginTop: "16px" }}>
        <RecentLeadsTable />
      </div>

      <div style={{ marginTop: "16px" }}>
        <TopCustomersTable />
      </div>

         <DashboardChart/>

    </div>
  );
};

export default Dashboard;