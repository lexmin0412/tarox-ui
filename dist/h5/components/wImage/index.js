import Nerv from "nervjs";
/* 图片展示组件 弥补原生Image组件无法处理错误图片的问题
 * @Author: cellerchan
 * @Date: 2019-06-13 19:04:49
 * @Last Modified by: cellerchan
 * @Last Modified time: 2019-09-18 20:50:27
 */
import { Component } from "@tarojs/taro-h5";
import { Image } from "@tarojs/components";
const config = {
  host: {
    url: 'https://ceshiapi.58wld.com'
  }
};
/**
 * 分割线
 */
/**
 * api同taro Image 增加type和key属性 用于处理图片路径错误
 * @type 图片类型 String store-店铺 person-用户 goods-商品 tikcet-优惠券
 * @key 图片key值，需要保证页面唯一
 * @src 图片路径 同Image src
 * @className 类名
 */
const iconEnum = {
  'store': `${config.host.url}/images/common/headimg.jpg`,
  'person': `${config.host.url}/images/common/person_zhanweitu@2x.png`,
  'goods': `${config.host.url}/images/common/icon_default.png`
};
export default class BackTop extends Component {
  constructor() {
    super(...arguments);
    this.state = {};
    // 错误事件监听 设置唯一state
  }
  render() {
    const { src, key } = this.props;
    return <Image {...this.props} mode="aspectFill" src={this.state[`imgError${key}`] || src} onError={this.handleError.bind(this, key)} />;
  }
  handleError = key => {
    const { type } = this.props;
    this.setState({
      [`imgError${key}`]: iconEnum[type]
    });
  };
}