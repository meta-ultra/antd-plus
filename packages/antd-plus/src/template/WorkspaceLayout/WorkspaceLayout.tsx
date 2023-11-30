import { type FC, type ReactNode } from "react";
import { Layout } from "antd";
import { Navigator, type NavigatorProps } from "../../organism/Navigator";
import useStyles from "./useStyles";

type WorkspaceLayoutProps = {
  logo?: ReactNode;
  navigatorItems: NavigatorProps["items"];
  navigatorWidth?: number;
  layout?: "side" | "top" | "mix";
};

const Header = ({ logo, layout, items, logoWidth }) => {
  const { styles, cx } = useStyles();

  return (
    <Layout.Header className={cx(styles.header, { "out-standard": layout !== "side" })}>
      {layout !== "side" ? (
        <div className={styles.logo} style={{ width: logoWidth }}>
          {logo}
        </div>
      ) : null}
      {layout !== "side" ? <Navigator mode="horizontal" items={items} /> : null}
    </Layout.Header>
  );
};

const Sider = ({ logo, layout, items, width }) => {
  const { styles, cx } = useStyles();

  return (
    <Layout.Sider className={styles.sider} width={width}>
      {layout === "side" ? <div className={styles.logo}>{logo}</div> : null}
      <Navigator items={items} />
    </Layout.Sider>
  );
};

const WorkspaceLayout: FC<WorkspaceLayoutProps> = ({
  logo,
  navigatorItems,
  navigatorWidth = 200,
  layout = "side",
}) => {
  const { styles } = useStyles();

  const header = (
    <Header logo={logo} layout={layout} items={navigatorItems} logoWidth={navigatorWidth} />
  );
  const sider = <Sider logo={logo} layout={layout} items={navigatorItems} width={navigatorWidth} />;

  return (
    <Layout rootClassName={styles.root}>
      {layout === "side" ? sider : header}
      <Layout>
        {layout === "side" ? header : layout === "top" ? null : sider}
        <Layout.Content></Layout.Content>
      </Layout>
    </Layout>
  );
};

export type { WorkspaceLayoutProps };
export default WorkspaceLayout;
