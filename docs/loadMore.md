# LoadMore

加载更多组件。

## 用法

在页面中引入组件：

```js
import React, { useState } from 'react'
import { XLoadMore } from 'taro-x-ui'

const XLoadMoreIndex: React.FC = () => {

  const [loadingStatus, setLoadinigStatus] = useState(true)

  setTimeout(() => {
    setLoadinigStatus(false)
  }, 2000);
  
  return (
    <XLoadMore 
      hasMore={loadingStatus} 
      loadingText='加载中...' 
      loadedText='加载完成' 
    />
  )
}

export default XCheckboxIndex
```

在 样式文件中引入组件样式(仅按需引入时需要)：

```css
@import '~taro-x-ui/dist/style/components/loadMore.scss';
```

## 参数

| 属性        | 说明             | 类型    | 是否必传 | 默认值  |
|-------------|------------------|---------|----------|---------|
| hasMore     | 是否还有更多数据 | boolean | 是       | `false` |
| loadingText | 加载中文字       | string  | 否       | 无      |
| loadedText  | 加载完成文字     | string  | 否       | 无      |

## 扫码查看示例

| 小程序                                          | h5                                          |
|-------------------------------------------------|---------------------------------------------|
| ![小程序](./_media/qrcode_pages_home_index.png) | ![h5](./_media/qrcode_demo_h5_loadMore.png) |
