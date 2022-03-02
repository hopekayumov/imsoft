import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

const SiderDash = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="Cправочник">
          <Menu.Item key="1">Клиенты</Menu.Item>
          <Menu.Item key="2">Деталь</Menu.Item>
          <Menu.Item key="3">Модель</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SiderDash;
