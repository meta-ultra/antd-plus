import { type FC, type ReactNode } from "react";
import { Layout } from "antd";
import { type NavProps } from "../../organism/Nav";
import Header from "./Header";
import Sider from "./Sider";
import { css } from "@linaria/core"

const rootClassName = css/*css*/ `
  height: 100vh;
`

// import useStyles from "./useStyles";


// const Header = ({
//   logo,
//   layout,
//   items,
//   logoWidth,
// }: {
//   logo: ReactNode;
//   layout: UltraLayoutProps["layout"];
//   items: NavProps["items"];
//   logoWidth: number;
// }) => {
//   const { styles, cx } = useStyles();

//   return (
//     <Layout.Header className={cx(styles.header, { "out-standard": layout !== "side" })}>
//       {layout !== "side" ? (
//         <div className={styles.logo} style={{ width: logoWidth }}>
//           {logo}
//         </div>
//       ) : null}
//       {layout !== "side" ? <Nav mode="horizontal" items={items} /> : null}
//     </Layout.Header>
//   );
// };

// const Sider = ({
//   logo,
//   layout,
//   items,
//   width,
// }: {
//   logo: ReactNode;
//   layout: UltraLayoutProps["layout"];
//   items: NavProps["items"];
//   width: number;
// }) => {
//   const { styles } = useStyles();

//   return (
//     <Layout.Sider className={styles.sider} width={width}>
//       {layout === "side" ? <div className={styles.logo}>{logo}</div> : null}
//       <Nav items={items} />
//     </Layout.Sider>
//   );
// };

type UltraLayoutProps = {
  logo?: {
    collapsedLogo?: ReactNode;
    expandedLogo?: ReactNode;
  };
  layout?: "left" | "top" | "mixed";
  nav: {
    width?: number;
    items: NavProps["items"];
  },
};

const UltraLayout: FC<UltraLayoutProps> = ({
  logo,
  nav,
  layout = "left",
}) => {
  nav.width = (nav.width || process.env.navWidth) as number

  const header = (
    <Header logo={layout === "left" ? null : logo} outstand={layout !== "left"} />
  );
  const sider = <Sider logo={layout === "left" ? logo : null} items={nav.items} width={nav.width} />

  return (
    <Layout rootClassName={rootClassName}>
      {layout === "left" ? sider : header}
      <Layout>
         {layout === "left" ? header : layout === "top" ? null : sider}
         <Layout.Content></Layout.Content>
      </Layout>
    </Layout>
  )
  // const { styles } = useStyles();


  // const sider = <Sider logo={logo} layout={layout} items={navigatorItems} width={navigatorWidth} />;

  // return (
  //   <Layout rootClassName={styles.root}>
  //     {layout === "side" ? sider : header}
  //     <Layout>
  //       {layout === "side" ? header : layout === "top" ? null : sider}
  //       <Layout.Content></Layout.Content>
  //     </Layout>
  //   </Layout>
  // );
};


export type { UltraLayoutProps };
export default UltraLayout;
