import { cloneElement, type FC, type ReactElement } from 'react'
import { GlobalToken, Layout, theme } from 'antd'
import { ComponentToken } from "antd/es/layout/style"
import { Nav, type NavProps } from '../../organism/Nav'
import { styled } from "@linaria/react"
import Logo from './Logo';

const TriggerWrapper = styled.div<{token: GlobalToken, size: number}>/*css*/ `
  position: absolute;
  right: ${(props) => -props.size*1.2}px;
  top: ${(props) => {
    const headerHeight = (props.token as { Layout?: ComponentToken }).Layout?.headerHeight || 64;
    return (headerHeight - props.size) / 2;
  }}px;
`

type SiderProps = {
  expandedLogo?: ReactElement;
  collapsedLogo?: ReactElement;
  trigger?: ReactElement;
  triggerSize: number;
  collapsed?: boolean;
  width: number;
  items: NavProps["items"];
}

const Sider: FC<SiderProps> = ({
  expandedLogo,
  collapsedLogo,
  trigger,
  triggerSize,
  collapsed,
  width,
  items,
}) => {
  const { token } = theme.useToken();


  return (
    <Layout.Sider width={width} collapsible trigger={null} collapsed={collapsed}>
      {trigger ? (<TriggerWrapper token={token} size={triggerSize}>{trigger}</TriggerWrapper>
      ) : null}

      {collapsed
        ? (collapsedLogo ? <Logo token={token} width="100%">{collapsedLogo}</Logo> : null)
        : (expandedLogo ? <Logo token={token} width="100%">{expandedLogo}</Logo> : null)
      }
      <Nav items={items} />
    </Layout.Sider>
  )
}

export default Sider
