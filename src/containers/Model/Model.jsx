import { Layout, Button, Typography, Row, Col } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import React from "react";
import ModelTable from "./components/ModelTable";

const Model = () => {
  return (
    <Layout>
      <Row
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>
          <h1>Модель</h1>
        </Typography>
        <Button
          type="primary"
          icon={<PlusCircleFilled />}
          block
          size="large"
          style={{
            backgroundColor: "#001529",
            color: "white",
            width: "auto",
            marginBottom: "10px",
          }}
        >
          Добавить модель
        </Button>
      </Row>
      <Layout>
        <Row>
          <Col xs={24} md={24}>
            <ModelTable />
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};

export default Model;
