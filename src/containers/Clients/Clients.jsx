import { Button, Col, Layout, Row, Typography } from "antd";
import React, { useState } from "react";
import { PlusCircleFilled } from "@ant-design/icons/";
import ClientsTable from "./ClientsTable";
import Modal from "antd/lib/modal/Modal";

const Clients = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
          onClick={showModal}
        >
          Добавить клиента
        </Button>
      </Row>
      <Layout>
        <Row>
          <Col xs={24} md={24}>
            <ClientsTable isModalVisible={isModalVisible} />
            <Modal
              title="Basic Modal"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};

export default Clients;
