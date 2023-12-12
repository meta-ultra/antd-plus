import { type FC, type ReactNode } from 'react'
import { type GlobalToken, Layout, theme } from 'antd'
import { ComponentToken } from "antd/es/layout/style"
import { css, cx } from "@linaria/core"
import { styled } from "@linaria/react"

const headerClassName = css/*css*/ `
  display: flex;
  flex-direction: row;
  padding: 0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`
const outstandClassName = css/*css*/ `
  z-index: 1;
`

const Logo = styled.div<{token: GlobalToken}>/*css*/ `
  height: ${(props) => (props.token as { Layout?: ComponentToken }).Layout?.headerHeight || 64}px;
`

type HeaderProps = {
  outstand?: boolean;
  logo?: ReactNode;
  children?: ReactNode;
}

const Header: FC<HeaderProps> = ({
  outstand,
  logo,
  children,
}) => {
  const { token } = theme.useToken();

  return (
    <Layout.Header className={cx(headerClassName, outstand ? outstandClassName : null)}>
      {logo ? (<Logo token={token}>{logo}</Logo>) : null}
      {children}
    </Layout.Header>
  )
}

export default Header
