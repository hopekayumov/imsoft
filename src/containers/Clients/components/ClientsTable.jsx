import { hover } from "@testing-library/user-event/dist/hover";
import { Button, Table, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClient } from "../../../slices/clientsSlice";

const ClientsTable = ({ handleDeleteClient }) => {
  const columns = [
    {
      title: "№",
      dataIndex: "number",
      key: "number",
      render: (text, record, index) => index + 1,
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
      render: (text) => {
        return <Typography.Text copyable>{text}</Typography.Text>;
      },
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
      filters: [
        {
          text: "Fergana",
          value: "Fergana",
        },
        {
          text: "Namangan",
          value: "Namangan",
        },
        {
          text: "Samarqand",
          value: "Samarqand",
        },
        {
          text: "Andijon",
          value: "Andijon",
        },
        {
          text: "Tashkent",
          value: "Tashkent",
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: "Социальные сети",
      dataIndex: "socialMedia",
      key: "socialMedia",
      render: (text) => {
        return (
          <div
            style={{
              margin: "0 auto",
              width: "100px",
              padding: "5px",
              border: "1px solid #0E185F",
              textAlign: "center",
              borderRadius: "8px",
            }}
          >
            <Typography style={{ color: "#0E185F" }}>{text}</Typography>
          </div>
        );
      },
      filters: [
        {
          text: "Telegram",
          value: "Telegram",
        },
        {
          text: "Instagram",
          value: "Instagram",
        },
        {
          text: "Facebook",
          value: "Facebook",
        },
      ],
      onFilter: (value, record) => record.socialMedia.indexOf(value) === 0,
    },
    {
      title: "Действия",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => {
        return (
          <Button
            style={{
              borderRadius: "7px",
            }}
            danger
            onClick={() =>
              dispatch(
                deleteClient({
                  id: record.id,
                })
              )
            }
          >
            <Typography style={{ color: "red" }}>Удалить</Typography>
          </Button>
        );
      },
    },
  ];

  const dispatch = useDispatch();
  const { clients } = useSelector((state) => state.clients);
  console.log(clients.id);

  return (
    <>
      <Table
        dataSource={clients}
        columns={columns}
        pagination={{
          position: ["bottomCenter"],
          pageSize: 5,
          hideOnSinglePage: true,
        }}
        style={{ width: "100%", height: "100%" }}
        rowKey="id"
      />
    </>
  );
};

export default ClientsTable;
