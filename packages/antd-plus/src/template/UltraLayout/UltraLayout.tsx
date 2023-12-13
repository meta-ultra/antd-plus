import { useState, cloneElement, type FC, type ReactElement } from "react";
import { Layout, GlobalToken, theme } from "antd";
import { AiOutlineMenuFold, AiOutlineMenuUnfold  } from "react-icons/ai";
import useEvent from "react-use-event-hook";
import { Nav, type NavProps } from "../../organism/Nav";
import Header from "./Header";
import Sider from "./Sider";
import { css } from "@linaria/core"
import { styled } from "@linaria/react"

const rootClassName = css/*css*/ `
  height: 100vh;
`

const Trigger = styled.div<{token: GlobalToken, size: number}>/*css*/ `
  cursor: pointer;
`

type UltraLayoutProps = {
  logo?: {
    collapsedLogo?: ReactElement;
    expandedLogo?: ReactElement;
  };
  layout?: "left" | "top" | "mixed";
  trigger?: {
    visible?: boolean;
    size?: number;
    unfoldIcon?: ReactElement;
    foldIcon?: ReactElement;
  };
  header?: {
    toolbar?: ReactElement;
  };
  nav: {
    width?: number;
    items: NavProps["items"];
  },
};

const UltraLayout: FC<UltraLayoutProps> = ({
  logo,
  layout = "left",
  trigger,
  header,
  nav,
}) => {
  const collapsedLogo = logo && logo.collapsedLogo
  const expandedLogo = logo && logo.expandedLogo
  const triggerSize = trigger && trigger.size || 28;
  const triggerUnfoldIcon = trigger && trigger.unfoldIcon || <AiOutlineMenuUnfold />;
  const triggerFoldIcon = trigger && trigger.foldIcon || <AiOutlineMenuFold />;
  nav.width = (nav.width || process.env.navWidth) as number

  const { token } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false)
  const onTriggerClick = useEvent(() => {
    setCollapsed(!collapsed)
  })

  const elTrigger = <Trigger token={token} size={triggerSize} onClick={onTriggerClick}>
    {
      cloneElement(collapsed ? triggerUnfoldIcon : triggerFoldIcon, {size: triggerSize, style: {fontSize: triggerSize}})
    }
  </Trigger>

  const elHeader = (
    <Header
      logo={layout === "left" ? null : expandedLogo}
      logoWidth={nav.width}
      topmost={layout !== "left"}
      trigger={layout === "mixed" ? elTrigger : undefined}
      triggerSize={triggerSize}
      nav={layout === "left" ? undefined : <Nav items={nav.items} mode="horizontal" />}
      toolbar={header && header.toolbar}
    >
    </Header>
  );
  const sider = (<Sider
    expandedLogo={layout === "left" ? expandedLogo : undefined}
    collapsedLogo={layout === "left" ? collapsedLogo : undefined}
    trigger={layout === "left" ? elTrigger : undefined}
    triggerSize={triggerSize}
    collapsed={collapsed}
    items={nav.items}
    width={nav.width}
  />)

  return (
    <Layout rootClassName={rootClassName}>
      {layout === "left" ? sider : elHeader}
      <Layout>
         {layout === "left" ? elHeader : layout === "top" ? null : sider}
         <Layout.Content>123</Layout.Content>
      </Layout>
    </Layout>
  )
};

export type { UltraLayoutProps };
export default UltraLayout;
