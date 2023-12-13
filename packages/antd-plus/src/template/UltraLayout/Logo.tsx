import { type GlobalToken } from 'antd'
import { ComponentToken } from "antd/es/layout/style"
import { styled } from "@linaria/react"

const Logo = styled.div<{token: GlobalToken, width: number | string}>/*css*/ `
  height: ${(props) => (props.token as { Layout?: ComponentToken }).Layout?.headerHeight || 64}px;
  width: ${(props) => (typeof props.width === "number" ? props.width + "px" : props.width)};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  word-break: keep-all;
`

export default Logo
