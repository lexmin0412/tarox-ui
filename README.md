# taro-cui

## 初衷

本着不重复造轮子，但绝不怕造轮子的理念，`taro-cui` 组件库的开发宗旨是：只开发 `taro` 以及 `taro-ui` 组件库没有，或者难以使用的组件，对于 `taro` 和 `taro-ui` 中功能和体验都已经做到上佳的组件，我们不会重复做没有意义的事情，而对于 `taro` 和 `taro-ui` 本来没有，后来做的体验更好的组件，如果没有明确的提升目标或者优化的方向，我们也会停止开发并在相应的组件中予以标识，但会一直提供支持。

## 组件库

|组件|描述|状态|
|---|---|---|
|Timer|倒计时组件|stable|
|WImage|图片组件，弥补了taro Image组件难以处理图片路径错误的问题|
|Skeleton|骨架屏组件，灵感来源于[https://github.com/lentoo/taro-skeleton](https://github.com/lentoo/taro-skeleton), 目前还有待完善，谨慎使用|develop|
|Price|价格展示组件|
|NoData|缺省状态组件，含文字和描述，均可通过传入属性自定义|
|Modal|弹窗组件|

## 正在路上的组件

请查看 [TODO](./TODO.md)

## Contributors

- [cathe-zhang](https://github.com/cathe-zhang)
- [1415801689xing](https://github.com/1415801689xing)

## 更新日志

### v0.0.1

#### Features

- 新增Modal组件
- 新增 `NoData` 组件
- 新增 `Price` 组件
- 新增 `ProgressBar` 组件
- 新增 `Skeleton` 组件
- 新增 `WImage` 组件

#### Updates

- 优化 `Timer` 组件, 添加样式

#### chore

- 变更项目定位：从单一UI组件变为组件库
