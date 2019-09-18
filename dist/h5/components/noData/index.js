import Nerv from "nervjs";
import './index.scss';
import { Component } from "@tarojs/taro-h5";
import { View, Image, Text } from '@tarojs/components';
/**
 * price display组件
 */
class NoData extends Component {
  render() {
    const { noDataIcon, noDataText } = this.props;
    console.log('noDataText', noDataText);
    console.log('noDataIcon', noDataIcon);
    return <View className="noDataContainer">
				<View className="noDataContent">
					<Image className="noDataIcon" src={noDataIcon ? noDataIcon : 'https://ceshiapi.58wld.com/images/mc_icon_no_data.png'} />
					<Text className="noDataText"> {noDataText ? noDataText : '空空如也~'}</Text>
				</View>
			</View>;
  }
}
export default NoData;