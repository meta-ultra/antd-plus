import { ReactElement, type FC, type ReactNode } from 'react'
import { Layout, theme, GlobalToken } from 'antd'
import { ComponentToken } from "antd/es/layout/style"
import { css, cx } from "@linaria/core"
import { styled } from "@linaria/react"
import Logo from './Logo'

const TriggerWrapper = styled.div<{token: GlobalToken, size: number}>/*css*/ `
  position: relative;
  margin-left: 10px;
  top: ${(props) => {
    const headerHeight = (props.token as { Layout?: ComponentToken }).Layout?.headerHeight || 64;
    return (headerHeight - props.size) / 2;
  }}px;
`
const NavWrapper = styled.div/*css*/ `
  flex-shrink: 1;
`

const ToolbarWrapper = styled.div/*css*/ `
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const headerClassName = css/*css*/ `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`
const topmostClassName = css/*css*/ `
  z-index: 1;
`

type HeaderProps = {
  topmost?: boolean;
  logo?: ReactNode;
  logoWidth: number;
  trigger?: ReactElement;
  triggerSize: number;
  nav?: ReactElement;
  toolbar?: ReactElement;
}

const Header: FC<HeaderProps> = ({
  topmost,
  logo,
  logoWidth,
  trigger,
  triggerSize,
  nav,
  toolbar,
}) => {
  const { token } = theme.useToken();

  return (
    <Layout.Header className={cx(headerClassName, topmost ? topmostClassName : null)}>
      {logo ? (<Logo token={token} width={logoWidth}>{logo}</Logo>) : null}
      {trigger ? <TriggerWrapper token={token} size={triggerSize}>{trigger}</TriggerWrapper> : null}
      <NavWrapper>{nav}</NavWrapper>
      {toolbar ? <ToolbarWrapper>{toolbar}</ToolbarWrapper> : null}
    </Layout.Header>
  )
}

export default Header
