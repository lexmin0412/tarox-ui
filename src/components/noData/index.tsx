
import './index.scss';
import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';

/**
 * 组件需要的Props定义
 * @param noDataIcon 缺省图片
 * @param noDataText 缺省文字
 */
interface IProps {
	/**
	 * noDataIcon 缺省图片
	 */
	noDataIcon?: any;
	/**
	 * noDataIcon 缺省文字
	 */
	noDataText?: string;
}

/**
 * price display组件
 */
class NoData extends Component<IProps, {}> {
	render() {
		const { noDataIcon, noDataText } = this.props;
		console.log('noDataText', noDataText);
		console.log('noDataIcon', noDataIcon);
		return (
			<View className='noDataContainer'>
				<View className='noDataContent'>
					<Image className='noDataIcon' src={noDataIcon ? noDataIcon : 'https://ceshiapi.58wld.com/images/mc_icon_no_data.png' }  />
					<Text className='noDataText'> {noDataText ? noDataText : '空空如也~'}</Text>
				</View>
			</View>
		);
	}
}

export default NoData;
