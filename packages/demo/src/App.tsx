import { ConfigProvider } from "antd";
import { WorkspaceLayout } from "@meta-ultra/antd-plus";

const light = {
  components: {
    Layout: {
      headerBg: "#fff",
      siderBg: "#fff",
    },
  },
};

const App = () => {
  const items = [
    { key: 1, label: "mxxxxxxxxxxx" },
    { key: 2, label: "m", children: [{ key: 3, label: "menu3" }] },
  ];

  return (
    <ConfigProvider theme={light}>
      <WorkspaceLayout navigatorItems={items} layout="side" />
    </ConfigProvider>
  );
};

export default App;
