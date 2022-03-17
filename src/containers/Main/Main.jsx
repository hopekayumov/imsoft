import { Layout, Button, Col, Typography } from "antd";
import {
  UserOutlined,
  DropboxOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";
import "./Main.css";
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Layout
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography.Title
        style={{
          backgroundColor: "white",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        Справочник
      </Typography.Title>
      <div className="main">
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Link to="/clients">
            <Button
              type="primary"
              icon={<UserOutlined />}
              block
              size="large"
              style={{
                backgroundColor: "#001529",
                color: "white",
                width: "auto",
                marginBottom: "10px",
              }}
            >
              Перейти в Клиенты
            </Button>
          </Link>
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Link to="/detal">
            <Button
              type="primary"
              icon={<DropboxOutlined />}
              block
              size="large"
              style={{
                backgroundColor: "#001529",
                color: "white",
                width: "auto",
                marginBottom: "10px",
              }}
            >
              Перейти в Деталь
            </Button>
          </Link>
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Link to="/model">
            <Button
              type="primary"
              icon={<CodeSandboxOutlined />}
              block
              size="large"
              style={{
                backgroundColor: "#001529",
                color: "white",
                width: "auto",
                marginBottom: "10px",
              }}
            >
              Перейти в Модель
            </Button>
          </Link>
        </Col>
      </div>
    </Layout>
  );
};

export default Main;
