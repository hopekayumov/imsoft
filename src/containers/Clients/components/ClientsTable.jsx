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
