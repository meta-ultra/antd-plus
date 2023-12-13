import { theme } from "antd"
import { isNil, at } from "lodash-es"

const useToken = (paths: string[]) => {
  const { token } = theme.useToken();
  const values = at(token as {[index: string]: any}, paths)
  const result: Record<string, any> = {}
  for (let i = 0; i < paths.length; ++i) {
    const path = paths[i]
    if (path) {
      result[path] = values[i]
    }
  }

  if ("Layout.headerHeight" in result) {
    result["Layout.headerHeight"] = isNil(result["Layout.headerHeight"]) ? 64 : result["Layout.headerHeight"]
  }

  return result
}

export {
  useToken
}
