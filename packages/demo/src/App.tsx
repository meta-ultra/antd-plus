import { type FC } from 'react'
import { ConfigProvider } from 'antd'
import { UltraLayout, themeLight } from '@meta-ultra/antd-plus'

const App: FC = () => {
  return (
    <ConfigProvider theme={themeLight}>
      <UltraLayout
        layout="mixed"
        logo={<div>123</div>}
        nav={{
          items: [{key: "a", label: "hihi"}]
        }}
      />
    </ConfigProvider>
  )
}

export default App
