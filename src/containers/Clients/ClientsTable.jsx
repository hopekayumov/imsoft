import { Table, Typography } from "antd";
import React from "react";
import { clientsData } from "../../data/clientsData";

const columns = [
  {
    title: "№",
    dataIndex: "number",
    key: "number",
    render: (text, record, index) => {
      return index + 1;
    },
  },
  {
    title: "Имя",
    dataIndex: "name",
    key: "name",
    render: (text) => {
      return (
        <span>
          {
            <Typography style={{ color: "#0E185F", fontWeight: "bold" }}>
              {text}
            </Typography>
          }
        </span>
      );
    },
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

const ClientsTable = () => {
  return (
    <>
      <Table
        dataSource={clientsData}
        columns={columns}
        pagination={{
          position: ["bottomCenter"],
          pageSize: 6,
          hideOnSinglePage: true,
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
};

export default ClientsTable;
