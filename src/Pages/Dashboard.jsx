import React from "react";
import { Card, Col, Row, Progress } from "antd";
import {
  UserOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  RiseOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import RecentLeadsTable from "../Components/RecentLeadsTable";
import TopCustomersTable from "../Components/TopCustomersTable";

const Dashboard = () => {
  const data = [
    {
      title: "Total Leads",
      value: "1,240",
      extra: "+12%",
      percent: 70,
      sub: "This week",
      icon: <UserOutlined />,
      color: "linear-gradient(135deg, #4facfe, #00f2fe)",
    },
    {
      title: "Converted",
      value: "320",
      extra: "+8%",
      percent: 60,
      sub: "This month",
      icon: <CheckCircleOutlined />,
      color: "linear-gradient(135deg, #43e97b, #38f9d7)",
    },
    {
      title: "Pending",
      value: "210",
      extra: "-5%",
      percent: 40,
      sub: "Follow-ups",
      icon: <ClockCircleOutlined />,
      color: "linear-gradient(135deg, #fa709a, #fee140)",
    },
    {
      title: "Revenue",
      value: "₹2.5L",
      extra: "+20%",
      percent: 75,
      sub: "Monthly",
      icon: <DollarOutlined />,
      color: "linear-gradient(135deg, #667eea, #764ba2)",
    },
    {
      title: "Growth",
      value: "+18%",
      extra: "+3%",
      percent: 65,
      sub: "Performance",
      icon: <RiseOutlined />,
      color: "linear-gradient(135deg, #00c6ff, #0072ff)",
    },
    {
      title: "Team",
      value: "12",
      extra: "+2",
      percent: 80,
      sub: "Active users",
      icon: <TeamOutlined />,
      color: "linear-gradient(135deg, #f093fb, #f5576c)",
    },
  ];

  return (
    <div style={{ padding: "20px", background: "#f5f6fa" }}>
      <Row gutter={[16, 16]}>
        {data.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              bordered={false}
              style={{
                borderRadius: "6px",
                color: "#fff",
                background: item.color,
                boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                height: "150px",
              }}
              bodyStyle={{ padding: "16px" }}
              hoverable
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p style={{ margin: 0, fontWeight: 600 }}>{item.title}</p>
                  <h2 style={{ margin: "4px 0", fontWeight: 800 }}>{item.value}</h2>
                </div>

                <div style={{ fontSize: "22px" }}>{item.icon}</div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{item.sub}</span>
                <span>{item.extra}</span>
              </div>

              <Progress percent={item.percent} showInfo={false} />
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ marginTop: "20px" }}>
        <RecentLeadsTable />
        <TopCustomersTable />
      </div>
    </div>
  );
};

export default Dashboard;