import { type FC, type ReactNode } from "react";
import { Layout } from "antd";
import { Nav, type NavProps } from "../../organism/Nav";
import useStyles from "./useStyles";

type UltraLayoutProps = {
  logo?: ReactNode;
  navigatorItems: NavProps["items"];
  navigatorWidth?: number;
  layout?: "side" | "top" | "mix";
};

const Header = ({
  logo,
  layout,
  items,
  logoWidth,
}: {
  logo: ReactNode;
  layout: UltraLayoutProps["layout"];
  items: NavProps["items"];
  logoWidth: number;
}) => {
  const { styles, cx } = useStyles();

  return (
    <Layout.Header className={cx(styles.header, { "out-standard": layout !== "side" })}>
      {layout !== "side" ? (
        <div className={styles.logo} style={{ width: logoWidth }}>
          {logo}
        </div>
      ) : null}
      {layout !== "side" ? <Nav mode="horizontal" items={items} /> : null}
    </Layout.Header>
  );
};

const Sider = ({
  logo,
  layout,
  items,
  width,
}: {
  logo: ReactNode;
  layout: UltraLayoutProps["layout"];
  items: NavProps["items"];
  width: number;
}) => {
  const { styles } = useStyles();

  return (
    <Layout.Sider className={styles.sider} width={width}>
      {layout === "side" ? <div className={styles.logo}>{logo}</div> : null}
      <Nav items={items} />
    </Layout.Sider>
  );
};

const UltraLayout: FC<UltraLayoutProps> = ({
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

export type { UltraLayoutProps };
export default UltraLayout;
