# tarox-ui

## 初衷

本着不重复造轮子，但绝不怕造轮子的理念，`tarox-ui` 组件库的开发宗旨是：只开发 `taro` 以及 `taro-ui` 组件库没有，或者难以使用的组件，对于 `taro` 和 `taro-ui` 中功能和体验都已经做到上佳的组件，我们不会重复做没有意义的事情，而对于 `taro` 和 `taro-ui` 本来没有，后来做的体验更好的组件，如果没有明确的提升目标或者优化的方向，我们也会停止开发并在相应的组件中予以标识，但会一直提供支持。

## 组件库开发

1. 在 src/components 下新增一个组件
2. 在 pages/index 中引入组件
3. 运行 `yarn dev:mp`（小程序） 或 `yarn dev:h5`（h5）预览组件在对应平台的展示效果
4. 运行 `yarn build` 构建组件库
5. 执行 `yarn/npm publish` 发布组件库

## Installation

```shell
yarn add tarox-ui
```

为了使 taro-cui 的组件在 h5 环境中的 px 自动转换为 rem，需要编辑 `Taro` 项目的 `config/index.js` 文件的 `h5` 对象， 加入 tarox-ui, 如下：

```js
{
  h5: {
    esnextModules: ['taro-ui', 'tarox-ui'],
  }
}
```

然后重新启动项目，就可以在项目中使用 tarox-ui 中的组件了。

## Components

| 组件       | 描述                                                                                                                               | 状态    |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Timer      | 倒计时组件                                                                                                                         | stable  |
| WImage     | 图片组件，弥补了 taro Image 组件难以处理图片路径错误的问题                                                                         |
| Skeleton   | 骨架屏组件，灵感来源于[https://github.com/lentoo/taro-skeleton](https://github.com/lentoo/taro-skeleton), 目前还有待完善，谨慎使用 | develop |
| Price      | 价格展示组件                                                                                                                       |
| NoData     | 缺省状态组件，含文字和描述，均可通过传入属性自定义                                                                                 |
| Modal      | 弹窗组件                                                                                                                           |
| BlockTitle | 块标题组件                                                                                                                         |
| Curtain    | 幕帘组件                                                                                                                           |

## Contributors

- [lexmin0412](https://github.com/lexmin0412)

## 开发计划

[点此前往](./TODO.md)

## 更新日志

[点此前往](./CHANGELOG.md)
