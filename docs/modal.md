# Modal

模态框组件。

### 用法

在页面中引入组件

```js
import React, { useState } from "react";
import { XModal } from 'taro-x-ui'

const ModalIndex: React.FC = (props) => {

  const [isOpen1, setOpen1] = useState(false)

  return (
    <XModal
      isOpen={isOpen1}
      onClose={()=>setOpen1(false)}
      onConfirm={() => setOpen1(false)}
      clickMaskToClose
      showCancel={false}
    >
      我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。
    </XModal>
  )
}

export default ModalIndex
```

在 样式文件中引入组件样式(仅按需引入时需要)：

```css
@import '~taro-x-ui/dist/style/components/modal.scss';
```

### 参数

| 属性  | 说明     | 可选值   | 是否必传 | 默认值 |
|-------|----------|--------|----------|--------|
| isOpen | 是否开启弹窗 | boolean | 否       | false   |
| headerTitle | 头部标题 | string | 否       | 无   |
| onClose | 关闭回调 | Function | 否       | 无   |
| onConfirm | 确认回调 | Function | 否       | 无   |
| onCancel | 取消回调 | Function | 否       | 无   |
| clickMaskToClose | 是否可点击遮罩关闭 | boolean | 否 | false |
| showCancel | 是否展示取消按钮 | boolean | 否 | true |
| remindIcon | 强提示图片 | string | 否 | 无 |
| remindTitle | 强提示标题 | string | 否 | 无 |
| cancelText | 取消按钮文字 | string | 否 | '取消' |
| confirmText | 确认按钮文字 | string | 否 | '确认' |

### 扫码查看示例

![示例图片](./_media/qrcode_pages_home_index.png)