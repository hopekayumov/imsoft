import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;

const SiderDash = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100vh", borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="Cправочник">
          <Menu.Item key="1">
            <Link to="/clients">Клиенты</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/detal">Деталь</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/model">Модель</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SiderDash;
