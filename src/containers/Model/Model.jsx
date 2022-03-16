import { Layout, Button, Typography, Row, Col } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import React, { useState } from "react";
import ModelTable from "./components/ModelTable";
import ModelModal from "./components/ModelModal";
import { useDispatch } from "react-redux";
import { addModel } from "../../slices/modelSlice";

const Model = () => {
  // Modal visible state
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Inputs
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  // Dispatch
  const dispatch = useDispatch();

  // Modal handlers
  const handleOk = () => {
    dispatch(addModel({ name, photo }));
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
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
          onClick={showModal}
        >
          Добавить модель
        </Button>
      </Row>
      <Layout>
        <Row>
          <Col xs={24} md={24}>
            <ModelTable />
            <ModelModal
              handleOk={handleOk}
              isModalVisible={isModalVisible}
              handleCancel={handleCancel}
              name={name}
              setName={setName}
              photo={photo}
              setPhoto={setPhoto}
            />
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};

export default Model;
