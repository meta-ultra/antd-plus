import { type ReactNode, type FC, type Key } from "react";
import { Menu, type MenuProps } from "antd";
import { css } from "@linaria/core";

const rootClassName = css/*css*/ `
  user-select: none;

  &.antd-menu-root {
    border-inline-end: 0 none !important;
  }
  &.antd-menu-horizontal {
    border-bottom: 0 none !important;
  }
`;

type NavItemType = {
  key: Key;
  label: ReactNode;
  icon?: ReactNode;
  actionType?: "internal" | "external_blank";
  disabled?: boolean;
  children?: NavItemType[];
  type?: "group" | "divider";
};

type NavProps = Pick<MenuProps, "mode" | "onSelect"> & {
  items: NavItemType[];
};

const Nav: FC<NavProps> = ({ mode = "inline", onSelect, items }) => {
  return <Menu rootClassName={rootClassName} mode={mode} onSelect={onSelect} items={items} />;
};

export type { NavItemType, NavProps };
export default Nav;
