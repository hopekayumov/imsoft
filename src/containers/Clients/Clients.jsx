import { Button, Col, Layout, Row, Typography } from "antd";
import React from "react";
import { PlusCircleFilled } from "@ant-design/icons/";
import ClientsTable from "./ClientsTable";

const Clients = () => {
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
          <h1>Клиенты</h1>
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
          Добавить клиента
        </Button>
      </Row>
      <Layout>
        <Row>
          <Col xs={24} md={24}>
            <ClientsTable />
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};

export default Clients;
