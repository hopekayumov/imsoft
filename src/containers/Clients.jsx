import { Layout, Table } from "antd";
import React, { useState } from "react";

const Clients = () => {
  const [dataSource, setDataSource] = useState([
    {
      number: "1",
      name: "Umid",
      dateOfbirth: "26.12.2022",
      phoneNumber: "+998939781332",
      email: "umidjonkayumov2000@gmail.com",
      address: "Farg'ona shahar",
      socialMedia: "Facebook",
    },
    {
      number: "2",
      name: "Farruh",
      dateOfbirth: "26.12.2022",
      phoneNumber: "+998905624743",
      email: "Farruh@gmail.com",
      address: "Farg'ona shahar",
      socialMedia: "Facebook",
    },
    {
      number: "3",
      name: "Ozod",
      dateOfbirth: "26.12.2022",
      phoneNumber: "+998993051332",
      email: "OzodBekGM@gmail.com",
      address: "Farg'ona shahar",
      socialMedia: "Facebook",
    },
    {
      number: "4",
      name: "Bobur",
      dateOfbirth: "26.12.2022",
      phoneNumber: "+998901234567",
      email: "Boburchek@gmail.com",
      address: "Farg'ona shahar",
      socialMedia: "Facebook",
    },
    {
      number: "5",
      name: "Doniyor",
      dateOfbirth: "26.12.2022",
      phoneNumber: "+998939781332",
      email: "Donik@gmail.com",
      address: "Farg'ona shahar",
      socialMedia: "Facebook",
    },
  ]);
  const columns = [
    {
      title: "№",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Дата рождения",
      dataIndex: "dateOfbirth",
      key: "dateOfbirth",
    },
    {
      title: "Номер телефона",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Электронная почта",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Адрес",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Социальные сети",
      dataIndex: "socialMedia",
      key: "socialMedia",
    },
  ];

  return (
    <Layout>
      <Table dataSource={dataSource} columns={columns} />
    </Layout>
  );
};

export default Clients;
