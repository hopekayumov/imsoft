import { Layout, Row, Button, Typography } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import DetalTable from "../Detal/components/DetalTable";
import React, { useState } from "react";
import DetalModal from "./components/DetalModal";
import { useDispatch } from "react-redux";
import { addDetal } from "../../slices/detalSlice";

const Detal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Inputs
  const [name, setName] = useState("");
  const [barcode, setBarcode] = useState("");
  const [photo, setPhoto] = useState("");

  // Dispatch
  const dispatch = useDispatch();

  // Modal handlers
  const handleOk = () => {
    dispatch(addDetal({ name, photo, barcode }));
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
          <h1>Деталь</h1>
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
          Добавить деталь
        </Button>
      </Row>
      <DetalTable />
      <DetalModal
        handleOk={handleOk}
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        name={name}
        setName={setName}
        barcode={barcode}
        setBarcode={setBarcode}
        photo={photo}
        setPhoto={setPhoto}
      />
    </Layout>
  );
};

export default Detal;
