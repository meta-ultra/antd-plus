import { useState, type FC } from 'react'
import { Tooltip, Drawer, Divider } from 'antd'
import { PiGear } from "react-icons/pi";
import { useToken } from '../../utils/theme';
import LayoutSample from './LayoutSample/LayoutSample';
import { styled } from "@linaria/react"

const Wrapper = styled.div/*css*/ `
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

const LayoutSampleSection = styled.div/*css*/ `
  display: flex;
  justify-content: space-around;
  height: 200px;
`


type ThemePanelProps = {
  tooltip?: string
  title?: string
}

const ThemePanel: FC<ThemePanelProps> = ({
  tooltip = "主题面板",
  title = "主题配置",
}) => {
  const token = useToken(["Layout.headerHeight"])
  const headerHeight = token["Layout.headerHeight"]
  const size = headerHeight * 0.4;

  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip title={tooltip} placement='bottom'>
        <Wrapper onClick={() => {setOpen(true)}}>
          <PiGear size={size}/>
        </Wrapper>
      </Tooltip>
      <Drawer title={title} open={open} closable={false} onClose={() => setOpen(false)}>
        <Divider>布局模式</Divider>
        <LayoutSampleSection>
          <LayoutSample style={{width: "40%"}} />
          <LayoutSample style={{width: "40%"}} />
        </LayoutSampleSection>
      </Drawer>
    </>
  )
}

export default ThemePanel
