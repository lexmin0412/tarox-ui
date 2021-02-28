import Taro from '@tarojs/taro'

/**
 * 查看文档 复制链接到本地
 * @param value 设计图px值，宽度750px为基准
 */
export const pxTransform = (value) => {
  return Taro.pxTransform(value, 750)
}