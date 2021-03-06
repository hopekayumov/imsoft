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

const ClientsModal = ({
  handleCancel,
  handleOk,
  isModalVisible,
  name,
  setName,
  dateOfbirth,
  setDateOfbirth,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  address,
  setAddress,
  socialMedia,
  setSocialMedia,
}) => {
  return (
    <>
      <Modal
        keyboard
        title="Добавить клиента"
        visible={isModalVisible}
        onOk={
          name === "" ||
          dateOfbirth === "" ||
          phoneNumber === "" ||
          email === "" ||
          address === "" ||
          socialMedia === ""
            ? () => {
                alert("Заполните все поля");
              }
            : handleOk
        }
        okText="Добавить"
        cancelText="Отмена"
        onCancel={handleCancel}
        width="50%"
      >
        <Input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Имя Фамилия"
          size="large"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
          required
          value={dateOfbirth}
          onChange={(e) => setDateOfbirth(e.target.value)}
          placeholder="Дата рождения"
          size="large"
          prefix={<IdcardOutlined />}
        />
        <br />
        <br />
        <Input
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Номер телефона"
          size="large"
          prefix={<PhoneOutlined />}
        />
        <br />
        <br />
        <Input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Электронная почта"
          size="large"
          prefix={<MailOutlined />}
        />
        <br />
        <br />
        <Input
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Адрес"
          size="large"
          prefix={<BankOutlined />}
        />
        <br />
        <br />
        <Input
          required
          value={socialMedia}
          onChange={(e) => setSocialMedia(e.target.value)}
          placeholder="Социальные сети"
          size="large"
          prefix={<IeOutlined />}
        />
      </Modal>
    </>
  );
};

export default ClientsModal;
