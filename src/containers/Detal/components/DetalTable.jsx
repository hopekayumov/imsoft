import React from "react";
import { Table, Image, Typography, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteDetal } from "../../../slices/detalSlice";
import QRCode from "react-qr-code";

const ModelTable = () => {
  const { detals } = useSelector((state) => state.detals);
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
      title: "Штрих-код",
      dataIndex: "barcode",
      key: "barcode",
      render: (text, record) => {
        return <QRCode size={90} value={text} />;
      },
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
            style={{
              borderRadius: "7px",
            }}
            danger
            onClick={() =>
              dispatch(
                deleteDetal({
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
        bordered
        columns={columns}
        dataSource={detals}
        rowKey="id"
        pagination={{
          position: ["bottomCenter"],
          pageSize: 2,
        }}
      />
    </>
  );
};

export default ModelTable;
