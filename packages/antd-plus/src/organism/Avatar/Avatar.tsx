import { type Key, type FC, type ReactElement, cloneElement, useMemo } from 'react'
import { Dropdown, MenuProps } from "antd"
import { FaUserCircle } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { useToken } from '../../utils/theme';
import { styled } from '@linaria/react';

const DropdownLink = styled.a<{token: {colorText: string}}>/*css*/ `
  color: ${(props) => props.token.colorText};
  display: flex;
  height: 100%;
  gap: 4px;
  align-items: center;
  padding: 0 10px;

  &:hover {
    color: ${(props) => props.token.colorText};
    background: rgba(0, 0, 0, 0.1);
  }
`

type AvatarProps = {
  avatar?: ReactElement;
  name?: string;
  onItemClick: (key: Key) => void;
  items?: MenuProps["items"];
}

const Avatar:FC<AvatarProps> = ({
  avatar = <FaUserCircle />,
  name,
  onItemClick,
  items,
}) => {
  const token = useToken(["Layout.headerHeight", "colorText"]) as {
    "Layout.headerHeight": number;
    "colorText": string;
  };

  const headerHeight = token["Layout.headerHeight"];
  const size = headerHeight * 0.5;
  const logoStyle = useMemo(() => ({
    fontSize: size,
    width: size,
    height: size,
    borderRadius: "50%",
  }), [size])
  const nameStyle = useMemo(() => ({
    fontSize: size * 0.8,
    fontWeight: "bold",
  }), [size])

  let dropdownItems: MenuProps["items"] = []
  let exitItem = undefined;
  if (items && items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      if (item) {
        if (item.key === "process.env.prefix:exit") {
          exitItem = item
        }
        else {
          dropdownItems.push(item)
        }
      }
    }
  }

  if (dropdownItems.length > 0) {
    dropdownItems.push({type: "divider"})
  }
  dropdownItems.push({
    key: "process.env.prefix:exit",
    icon: <ImExit/>,
    label: "退出系统",
    ...exitItem,
  } as {key: Key})

  return (
      <Dropdown menu={{ items: dropdownItems, onClick: ({key}) => onItemClick(key) }}>
        <DropdownLink token={token} onClick={(e) => e.preventDefault()}>
          {cloneElement(avatar, {style: logoStyle, size})}{name ? <span style={nameStyle}>{name}</span> : undefined}
        </DropdownLink>
      </Dropdown>
  )
}

export default Avatar
