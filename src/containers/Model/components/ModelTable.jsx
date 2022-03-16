import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";

const ModelTable = () => {
  const { models } = useSelector((state) => state.models);
  const columns = [
    {
      title: "№",
      dataIndex: "number",
      key: "number",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Фото",
      dataIndex: "photo",
      key: "photo",
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={models} />
    </>
  );
};

export default ModelTable;
