import React from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes";

const { Content } = Layout;

const ContentDash = () => {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      {/* Routes */}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component()} />
        ))}
      </Routes>
    </Content>
  );
};

export default ContentDash;
