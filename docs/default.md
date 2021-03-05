# Default

缺省组件。

## 用法

在页面中引入组件：

```js
import Taro from '@tarojs/taro'
import React from 'react'
import { XDefault } from 'taro-x-ui'
import customDefaultIcon from '~assets/default.png'

const XDefaultIndex: React.FC = () => {
  return (
    <XDefault
      text="暂无数据"
      icon={customDefaultIcon}
      height={Taro.pxTransform(500, 750)}
    />
  )
}

export default XDefaultIndex
```

在 样式文件中引入组件样式(仅按需引入时需要)：

```css
@import '~taro-x-ui/dist/style/components/default.scss';
```

## 参数

| 属性         | 说明       | 类型             | 是否必传 | 默认值      |
|--------------|------------|------------------|----------|-------------|
| icon      | 自定义icon   | string          | 否       | 默认图片     |
| text     | 自定义文字   | string          | 否       | `'暂无数据'`     |
| height        | 高度 | css style height           | 否       | `'auto'` |

## 扫码查看示例

| 小程序                                              | h5                                          |
|-----------------------------------------------------|---------------------------------------------|
| ![小程序](./_media/qrcode_pages_home_index.png) | ![h5](./_media/qrcode_demo_h5_default.png) |