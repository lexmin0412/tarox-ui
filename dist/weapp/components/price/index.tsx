import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';
import { ReactText } from 'react';

/**
 * 组件需要的Props定义
 * @param size 字体大小
 * @param price 价格字符串
 * @param color 文字颜色
 */
interface IProps {
	size: string;
	price: ReactText;
	color: string;
}

/**
 * price display组件
 */
class Price extends Component<IProps, {}> {
	constructor(props) {
		super(props);
	}

	config = {
		navigationBarTitleText: ''
	};

	render() {
		const formatedPrice = Number(this.props.price).toFixed(2).toString();
		const index = formatedPrice.indexOf('.');
		const integerPart = formatedPrice.slice(0, index);
		const decimalPart = formatedPrice.slice(index + 1);
		return (
			<View
				className={`number ${this.props.size}`}
				style={`color: ${this.props.color}`}
			>
				<View className='bill-icon'>￥</View>
				<View className='integer-part'>{integerPart}.</View>
				<View className='decimal-part'>{decimalPart}</View>
			</View>
		);
	}
}

export default Price;
