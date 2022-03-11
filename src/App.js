import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";

// Components
import HeaderDash from "./components/Header/Header";
import SiderDash from "./components/Sider/Sider";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <HeaderDash /> {/* Header */}
      <Layout>
        <SiderDash /> {/* Sider */}
        <Main /> {/* Main */}
      </Layout>
    </Layout>
  );
};

export default App;
