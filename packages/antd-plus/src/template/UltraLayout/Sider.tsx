import { type FC, type ReactNode } from 'react'
import { type GlobalToken, Layout, theme } from 'antd'
import { ComponentToken } from "antd/es/layout/style"
import { Nav, type NavProps } from '../../organism/Nav'
import { styled } from "@linaria/react"

const Logo = styled.div<{token: GlobalToken}>/*css*/ `
  height: ${(props) => (props.token as { Layout?: ComponentToken }).Layout?.headerHeight || 64}px;
`

type SiderProps = {
  logo?: ReactNode;
  width: number
  items: NavProps["items"]
}

const Sider: FC<SiderProps> = ({
  logo,
  width,
  items,
}) => {
  const { token } = theme.useToken();

  return (
    <Layout.Sider width={width}>
      {logo ? <Logo token={token}>{logo}</Logo> : null}
      <Nav items={items} />
    </Layout.Sider>
  )
}

export default Sider
