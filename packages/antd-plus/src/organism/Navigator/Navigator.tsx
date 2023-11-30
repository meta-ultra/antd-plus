import { type ReactNode, type FC, type Key } from "react";
import { Menu, type MenuProps } from "antd";
import useStyles from "./useStyles";

type NavigatorItemType = {
  key: Key;
  label: ReactNode;
  icon?: ReactNode;
  actionType?: "internal" | "external_blank";
  disabled?: boolean;
  children?: NavigatorItemType[];
  type?: "group" | "divider";
};

type NavigatorProps = Pick<MenuProps, "mode" | "onSelect"> & {
  items: NavigatorItemType[];
};

const Navigator: FC<NavigatorProps> = ({ mode = "inline", onSelect, items }) => {
  const { styles } = useStyles();

  return <Menu rootClassName={styles.root} mode={mode} onSelect={onSelect} items={items} />;
};

export type { NavigatorItemType, NavigatorProps };
export default Navigator;
