import { createStyles } from "antd-style";

const useStyles = createStyles(({ css, prefixCls }) => {
  return {
    root: css/*css*/ `
      user-select: none;

      &.${prefixCls}-menu-root {
        border-inline-end: 0 none !important;
      }
      &.${prefixCls}-menu-horizontal {
        border-bottom: 0 none !important;
      }
    `,
  };
});

export default useStyles
