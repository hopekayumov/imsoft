import React from "react";
import { Layout, Breadcrumb } from "antd";
import ContentDash from "../Content/Content";
import { useLocation } from "react-router-dom";

const Main = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const pathTo = path.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  }, []);

  return (
    <Layout style={{ padding: "0 24px 24px", height: "100%", width: "100%" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        {/* Nav strory */}
        <Breadcrumb.Item>Панел</Breadcrumb.Item>
        <Breadcrumb.Item>Справочник</Breadcrumb.Item>
        <Breadcrumb.Item>
          {pathTo.length > 0 ? pathTo[pathTo.length - 1] : "Справочник"}
        </Breadcrumb.Item>
      </Breadcrumb>
      {/* Content */}
      <ContentDash />
    </Layout>
  );
};

export default Main;
