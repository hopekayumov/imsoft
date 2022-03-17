import React from "react";
import {
  UserOutlined,
  FileImageOutlined,
  BarcodeOutlined,
} from "@ant-design/icons/";
import Modal from "antd/lib/modal/Modal";
import Input from "antd/lib/input/Input";

const ClientsModal = ({
  handleCancel,
  handleOk,
  isModalVisible,
  name,
  setName,
  barcode,
  setBarcode,
  photo,
  setPhoto,
}) => {
  return (
    <>
      <Modal
        keyboard
        title="Добавить модель"
        visible={isModalVisible}
        onOk={handleOk}
        okText="Добавить"
        cancelText="Отмена"
        onCancel={handleCancel}
        width="50%"
      >
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Название модели"
          size="large"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          placeholder="Штрих-код"
          size="large"
          prefix={<BarcodeOutlined />}
        />
        <br />
        <br />
        <Input
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Фото модели (пример: https://www.google.com/img/image.jpg)"
          size="large"
          prefix={<FileImageOutlined />}
        />
        <br />
        <br />
      </Modal>
    </>
  );
};

export default ClientsModal;
