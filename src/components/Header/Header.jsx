import React from "react";
import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";

const HeaderDash = () => {
  return (
    <Header className="header">
      <div className="logo">IMSOFT</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">Клиенты</Menu.Item>
        <Menu.Item key="2">Деталь</Menu.Item>
        <Menu.Item key="3">Модель</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderDash;
