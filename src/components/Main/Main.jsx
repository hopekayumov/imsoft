import React from "react";
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

const Main = () => {
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Панел</Breadcrumb.Item>
        <Breadcrumb.Item>Справочник</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        Content
      </Content>
    </Layout>
  );
};

export default Main;
