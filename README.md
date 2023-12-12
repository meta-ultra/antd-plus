# Welcome to `@meta-ultra/ antd-plus`

An UI library on top of Ant Design 5.x and linaria for building better UX in a more efficient way.

## 🎠 Themes and Modes

Ant Design has provided an mature theme editor <https://ant.design/theme-editor> to help us customize our own theme freely.

### 🌈  Built-in Themes

- vben1
  - menu background color: ![#001529](https://placehold.it/15/001529/001529) `#001529`
  - menu item background color: ![#0c2135](https://placehold.it/15/0c2135/0c2135) `#0c2135`
  - menu item text color: ![#ffffffb3](https://placehold.it/15/ffffffb3/ffffff) `#ffffffb3`
  - menu item text color in hover state: ![#ffffff](https://placehold.it/15/ffffff/ffffff) `#ffffff`
  - selected menu item background color: ![#0960bd](https://placehold.it/15/0960bd/0960bd) `#0960bd`
  - selected menu item text color: ![#ffffff](https://placehold.it/15/ffffffb3/ffffff) `#ffffff`
- vben2
  - menu background color: ![#273352](https://placehold.it/15/273352/273352) `#273352`
  - menu item background color: ![#333f5e](https://placehold.it/15/333f5e/333f5e) `#333f5e`
  - menu item text color: ![#ffffffb3](https://placehold.it/15/ffffffb3/ffffff) `#ffffffb3`
  - menu item text color in hover state: ![#ffffff](https://placehold.it/15/ffffff/ffffff) `#ffffff`
  - selected menu item background color: ![#0960bd](https://placehold.it/15/0960bd/0960bd) `#0960bd`
  - selected menu item text color: ![#ffffff](https://placehold.it/15/ffffffb3/ffffff) `#ffffff`
- vben3
  - menu background color: ![#344058](https://placehold.it/15/344058/344058) `#344058`
  - menu item background color: ![#404c64](https://placehold.it/15/404c64/404c64) `#404c64`
  - menu item text color: ![#ffffffb3](https://placehold.it/15/ffffffb3/ffffff) `#ffffffb3`
  - menu item text color in hover state: ![#ffffff](https://placehold.it/15/ffffff/ffffff) `#ffffff`
  - selected menu item background color: ![#0960bd](https://placehold.it/15/0960bd/0960bd) `#0960bd`
  - selected menu item text color: ![#ffffff](https://placehold.it/15/ffffffb3/ffffff) `#ffffff`
- orange
  - primary color: ![#ff961e](https://placehold.it/15/ff961e/ff961e) `#ff961e`
  - menu background color: ![#ffffff](https://placehold.it/15/ffffff/ffffff) `#ffffff`
  - menu item background color: ![#ffffff](https://placehold.it/15/ffffff/ffffff) `#ffffff`
  - menu item text color: ![#00000](https://placehold.it/15/00000/00000) `#00000`
  - menu item text color in hover state: ![#ff961e](https://placehold.it/15/ff961e/ff961e) `#ff961e`
  - selected menu item background color: ![#ff961e](https://placehold.it/15/ff961e/ff961e) `#ff961e`
  - selected menu item text color: ![#ffffff](https://placehold.it/15/ffffff/ffffff) `#ffffff`
- soybean1
  - primary color: ![#1890ff](https://placehold.it/15/1890ff/1890ff) `#1890ff`
  - menu background color: ![#ffffff](https://placehold.it/15/ffffff/ffffff) `#ffffff`
  - menu item background color: ![#ffffff](https://placehold.it/15/ffffff/ffffff) `#ffffff`
  - selected menu item background color: ![#1890ff](https://placehold.it/15/1890ff/1890ff) `#1890ff`, opacity: 0.1
- other primary color of soybean
  - ![#409EFF](https://placehold.it/15/409EFF/409EFF) `#409EFF`

### 🕶️ Built-in light and dark modes

Besides light and dark modes, an out-of-box gray mode is supported by attaching class name below to html tag.

```css
.html-gray {
  filter: grayscale(100%);
}
```

## 🌵 Caveats

- Since `linaria` is a compile time CSS-in-JS library, which is not allowed for dynamic class name, while that is supported by runtime CSS-in-JS library such as antd-styles shown below:
  
  ```js
  const useStyles = createStyles(({css, prefixCls}) => ({
    root: css/*css*/`
      &.${prefixCls}-menu-root {
        border-inline-end: 0 none !important;
      }
    `
  }))
  ```

  If you really need to rename the prefix of antd class names, there're two ways to achieve that:
  1. Put the `@meta-ultra/antd-plus` components within a `ConfigProvider` whose `prefixCls` is `ant`;
  2. Bundle your own `@meta-ultra/antd-plus` with a customized `prefixCls`.

*Good to know*
> we can access the `prefixCls` set at ancestor `ConfigProvider` via `ConfigProvider.ConfigContext._currentValue.getPrefixCls()` or `ConfigProvider.ConfigContext._currentValue2.getPrefixCls()`.

## 🧾 References

- vben: <https://vben.vvbin.cn/>
- soybean: <https://soybean.pro/#/dashboard/analysis>
- Pure Admin: <https://yiming_chang.gitee.io/vue-pure-admin/#/login>
- Ant Design Pro: <https://preview.pro.ant.design/>
