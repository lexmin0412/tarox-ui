import Nerv from "nervjs";
import { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './index.scss';
/**
 * price display组件
 */
class Price extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const formatedPrice = Number(this.props.price).toFixed(2).toString();
    const index = formatedPrice.indexOf('.');
    const integerPart = formatedPrice.slice(0, index);
    const decimalPart = formatedPrice.slice(index + 1);
    return <View className={`number ${this.props.size}`} style={`color: ${this.props.color}`}>
				<View className="bill-icon">￥</View>
				<View className="integer-part">{integerPart}.</View>
				<View className="decimal-part">{decimalPart}</View>
			</View>;
  }
  config = {
    navigationBarTitleText: ''
  };
}
export default Price;