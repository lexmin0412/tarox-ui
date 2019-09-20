# taro-cui

## 初衷

本着不重复造轮子，但绝不怕造轮子的理念，`taro-cui` 组件库的开发宗旨是：只开发 `taro` 以及 `taro-ui` 组件库没有，或者难以使用的组件，对于 `taro` 和 `taro-ui` 中功能和体验都已经做到上佳的组件，我们不会重复做没有意义的事情，而对于 `taro` 和 `taro-ui` 本来没有，后来做的体验更好的组件，如果没有明确的提升目标或者优化的方向，我们也会停止开发并在相应的组件中予以标识，但会一直提供支持。

## Installation

```shell
yarn add taro-cui
```

为了使taro-cui的组件在h5环境中的px自动转换为rem，需要编辑 `Taro` 项目的 `config/index.js` 文件的 `h5` 对象， 加入 taro-cui, 如下：

```js
{
  h5: {
    esnextModules: ['taro-ui', 'taro-cui'],
  }
}
```

然后重新启动项目，就可以在项目中使用taro-cui中的组件了。

## Components

|组件|描述|状态|
|---|---|---|
|Timer|倒计时组件|stable|
|WImage|图片组件，弥补了taro Image组件难以处理图片路径错误的问题|
|Skeleton|骨架屏组件，灵感来源于[https://github.com/lentoo/taro-skeleton](https://github.com/lentoo/taro-skeleton), 目前还有待完善，谨慎使用|develop|
|Price|价格展示组件|
|NoData|缺省状态组件，含文字和描述，均可通过传入属性自定义|
|Modal|弹窗组件|
|BlockTitle|块标题组件|
|Curtain|幕帘组件|

## Contributors

- [cathe-zhang](https://github.com/cathe-zhang)
- [1415801689xing](https://github.com/1415801689xing)

## 开发计划

[点此前往](./TODO.md)

## 更新日志

[点此前往](./CHANGELOG.md)

