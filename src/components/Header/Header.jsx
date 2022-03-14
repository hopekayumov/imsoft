import React from "react";
import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";

const HeaderDash = () => {
  return (
    <Header
      className="header"
      style={{ position: "sticky", top: "0", zIndex: "99" }}
    >
      <div className="logo">DOGTAS</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">
          <Link to="/clients">Клиенты</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/detal">Деталь</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/model">Модель</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderDash;
