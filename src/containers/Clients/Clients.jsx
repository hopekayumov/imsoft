import { Button, Col, Layout, Row, Typography } from "antd";
import React, { useState } from "react";
import ClientsTable from "./components/ClientsTable";
import { PlusCircleFilled } from "@ant-design/icons";
import ClientsModal from "./components/ClientsModal";
import { useDispatch } from "react-redux";
import { addClient } from "../../slices/clientsSlice";

const Clients = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Inputs
  const [name, setName] = useState("");
  const [dateOfbirth, setDateOfbirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [socialMedia, setSocialMedia] = useState("");

  const dispatch = useDispatch();

  const handleOk = () => {
    dispatch(
      addClient({ name, dateOfbirth, phoneNumber, email, address, socialMedia })
    );
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
            <ClientsTable />
            <ClientsModal
              handleCancel={handleCancel}
              handleOk={handleOk}
              isModalVisible={isModalVisible}
              name={name}
              setName={setName}
              dateOfbirth={dateOfbirth}
              setDateOfbirth={setDateOfbirth}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              email={email}
              setEmail={setEmail}
              address={address}
              setAddress={setAddress}
              socialMedia={socialMedia}
              setSocialMedia={setSocialMedia}
            />
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};

export default Clients;
