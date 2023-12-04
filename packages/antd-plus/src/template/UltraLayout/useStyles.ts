import { createStyles } from "antd-style";
import { type ComponentToken } from "antd/es/layout/style"

const useStyles = createStyles(({ css, token }) => ({
  root: css/*css*/ `
    height: 100vh;
  `,
  logo: css/*css*/ `
    height: ${(token as { Layout?: ComponentToken }).Layout?.headerHeight || 64}px;
  `,
  header: css/*css*/ `
    display: flex;
    flex-direction: row;
    padding: 0;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

    &.out-standard {
      z-index: 1;
    }
  `,
  sider: css/*css*/ `
    box-shadow: 1px 0 5px rgba(0, 0, 0, 0.1);
  `,
}));

export default useStyles
