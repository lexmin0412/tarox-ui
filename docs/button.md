# Button

按钮组件。

### 用法

在页面中引入组件

```js
import React from 'react'
import { XButton } from 'taro-x-ui'

const ButtonIndex: React.FC = () => {
  return (
    <XButton color="red">默认</XButton>
  )
}

export default ImageIndex
```

在 样式文件中引入组件样式(仅按需引入时需要)：

```css
@import '~taro-x-ui/dist/style/components/button.scss';
```

### 参数

| 属性  | 说明     | 可选值   | 是否必传 | 默认值 |
|-------|----------|--------|----------|--------|
| color | 文字颜色 | string | 否       | #333   |
| customStyle | 自定义样式 | [object object] | 否       | 无  |
| inline | 是否行内按钮 | boolean | 否       | false  |
| size | 尺寸 | `mini`、`normal`、`large` | 否       | `normal` |
| round | 是否圆角 | boolean | 否 | false |
| disabled | 是否圆角 | boolean | 否 | false |
| hollow | 是否镂空 | boolean | 否 | false |
| customColor | 自定义颜色 | string | 否 | 无 |


## 扫码查看示例

| 小程序                                          | h5                                          |
|-------------------------------------------------|---------------------------------------------|
| ![小程序](./_media/qrcode_pages_button_index.png) | ![h5](./_media/qrcode_demo_h5_button.png) |