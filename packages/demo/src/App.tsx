import { UltraLayout } from "@meta-ultra/antd-plus";
import { ConfigProvider, theme } from "antd";

const light = {
  components: {
    Layout: {
      headerBg: "#fff",
      siderBg: "#fff",
    },
  },
};

const A = () => {
  const f = ConfigProvider.useConfig();
  const a = theme.useToken();
  console.log(ConfigProvider.ConfigContext._currentValue.getPrefixCls());

  return null;
};

const App = () => {
  const items = [
    { key: 1, label: "mxxxxxxxxxxx" },
    { key: 2, label: "m", children: [{ key: 3, label: "menu3" }] },
  ];

  return (
    <ConfigProvider theme={light} prefixCls="sdsoign">
      <UltraLayout navigatorItems={items} layout="side" />
    </ConfigProvider>
  );
};

export default App;
