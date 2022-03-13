import React from "react";
import {
  UserOutlined,
  IdcardOutlined,
  PhoneOutlined,
  MailOutlined,
  BankOutlined,
  IeOutlined,
} from "@ant-design/icons/";
import Modal from "antd/lib/modal/Modal";
import Input from "antd/lib/input/Input";

const ClientsModal = ({ handleCancel, handleOk, isModalVisible }) => {
  return (
    <>
      <Modal
        title="Добавить клиента"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="50%"
      >
        <Input
          placeholder="Имя Фамилия"
          size="large"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
          placeholder="Дата рождения"
          size="large"
          prefix={<IdcardOutlined />}
        />
        <br />
        <br />
        <Input
          placeholder="Номер телефона"
          size="large"
          prefix={<PhoneOutlined />}
        />
        <br />
        <br />
        <Input
          placeholder="Электронная почта"
          size="large"
          prefix={<MailOutlined />}
        />
        <br />
        <br />
        <Input placeholder="Адрес" size="large" prefix={<BankOutlined />} />
        <br />
        <br />
        <Input
          placeholder="Социальные сети"
          size="large"
          prefix={<IeOutlined />}
        />
      </Modal>
    </>
  );
};

export default ClientsModal;
