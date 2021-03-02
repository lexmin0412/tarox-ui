# Image

图片功能增强组件。

## 用法

在页面中引入组件：

```js
import React from 'react'
import { XImage } from 'taro-x-ui'

const ImageIndex: React.FC = () => {
  return (
    <XImage
      src='https://wx.qlogo.cn/mmhead/Q3auHgzwzM7jf32rOaC2SdoSeSKRdrVbv4G0dGA5p7S0AwMQR8UEFg/0'
    />
  )
}

export default ImageIndex
```

在 样式文件中引入组件样式(仅按需引入时需要)：

```css
@import '~taro-x-ui/dist/style/components/image.scss';
```

## 参数

| 属性        | 说明         | 类型          | 是否必传 | 默认值        |
|-------------|--------------|---------------|----------|---------------|
| src         | 图片路径     | string        | 是       | 无            |
| mode        | 图片展示模式 | string        | 无       | `'aspectFit'` |
| errImg      | 指定错误图片 | string        | 否       | 无            |
| previewUrls | 预览图片列表 | Array<string> | 否       | 无            |
| onClick     | 点击事件     | Function      | 否       | 无            |

## 扫码查看示例

| 小程序                                          | h5                                       |
|-------------------------------------------------|------------------------------------------|
| ![小程序](./_media/qrcode_pages_image_index.png) | ![h5](./_media/qrcode_demo_h5_image.png) |
