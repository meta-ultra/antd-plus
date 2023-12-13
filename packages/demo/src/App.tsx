import { useMemo, type FC } from 'react'
import { ConfigProvider } from 'antd'
import { merge } from "lodash-es"
import { GiVillage } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { UltraLayout, Avatar, ThemePanel, themeLight, themeCompact } from '@meta-ultra/antd-plus'

const App: FC = () => {
  const logo = useMemo(() => ({
    expandedLogo: (<div><GiVillage size={32} style={{ position: "relative", top: 4, marginRight: 5 }} /><h1 style={{margin: 0, display: "inline-block", fontSize: 28}}>数字乡村</h1></div>),
    collapsedLogo: <GiVillage size={32}/>
  }), [])
  const header = useMemo(() => ({
    toolbar: (<>
        <ThemePanel/>
        <Avatar
          name="Admin"
          onItemClick={(key) => console.log(key)}
          items={[
            {key: "user", label: "用户中心", icon: <FaRegUserCircle/>},
          ]}
        />
      </>)
  }), [])

  return (
    <ConfigProvider theme={merge(themeLight, themeCompact)}>
      <UltraLayout
        layout="left"
        logo={logo}
        header={header}
        nav={{
          items: [
            {icon: <div>1</div>, key: "a", label: "hihi"},
            {icon: <div>2</div>, key: "b", label: "bbbb", children: [
              {icon: <div>3</div>, key: "c", label: "ccc"},
            ]},
          ]
        }}
      />
    </ConfigProvider>
  )
}

export default App
