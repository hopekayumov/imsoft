import React from "react";
import { Table, Image, Typography, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteModel } from "../../../slices/modelSlice";

const ModelTable = () => {
  const { models } = useSelector((state) => state.models);
  const dispatch = useDispatch();
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
      render: (image) => <Image src={image} alt="model" width={100} />,
    },
    {
      title: "Действия",
      key: "action",
      render: (text, record) => {
        return (
          <Button
            danger
            onClick={() =>
              dispatch(
                deleteModel({
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
  return (
    <>
      <Table
        columns={columns}
        dataSource={models}
        rowKey="id"
        pagination={{
          position: ["bottomCenter"],
          pageSize: 2,
          hideOnSinglePage: true,
        }}
      />
    </>
  );
};

export default ModelTable;
