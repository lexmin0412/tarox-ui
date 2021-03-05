# Checkbox

复选框组件。

## 用法

在页面中引入组件：

```js
import React from 'react'
import { XCheckbox } from 'taro-x-ui'

const XCheckboxIndex: React.FC = () => {

  const [checked1, setChecked1] = useState(false)
  
  return (
    <XCheckbox
      checked={checked1}
      onChange={() => setChecked1(!checked1)}
    />
  )
}

export default XCheckboxIndex
```

在 样式文件中引入组件样式(仅按需引入时需要)：

```css
@import '~taro-x-ui/dist/style/components/checkbox.scss';
```

## 属性

| 属性         | 说明       | 类型             | 是否必传 | 默认值    |
|--------------|------------|------------------|----------|-----------|
| checked      | 是否选中   | boolean          | 是       | `false`   |
| disabled     | 是否禁用   | boolean          | 否       | `false`   |
| color        | 未选中颜色 | string           | 否       | `'#c3c3c3'` |
| checkedColor | 选中颜色   | string           | 否       | `'#FF0036'`  |
| customStyle  | 自定义样式 | JSX Style Object | 否       | 无        |
| onChange     | 切换事件   | Function         | 否       | 无        |

## 扫码查看示例

| 小程序                                          | h5                                       |
|-------------------------------------------------|------------------------------------------|
| ![小程序](./_media/qrcode_pages_checkbox_index.png) | ![h5](./_media/qrcode_demo_h5_checkbox.png) |