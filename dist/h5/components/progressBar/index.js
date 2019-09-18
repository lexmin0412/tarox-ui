import Nerv from "nervjs";
/* 进度条组件
 * @Author: cellerchan
 * @Date: 2019-03-06 16:15:10
 * @Last Modified by: cellerchan
 * @Last Modified time: 2019-09-18 21:07:41
 *
 * params
 * @currentIndex 当前进度索引  Number
 * @textArr 文字数组 String Array
 */
import { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './index.scss';
class ProgressBar extends Component {
  /**
   * render
   */
  render() {
    const { currentIndex, textArr } = this.props;
    return <View className="progress-bar">
				
				<View className="text-box">
					{textArr.map((item, index) => {
          return <View className="text-item" key={index} style={{
            color: index === currentIndex ? '#222' : '#999'
          }}>
								{item}
							</View>;
        })}
				</View>

				
				<View className="progress-box">
					{textArr.map((item, index) => {
          return <View className="progress-item" key={index}>
								<View className="progress-item">
									
									{index === currentIndex ? <View className="dot-big">
											<View className="dot-inner" />
										</View> : <View className="dot" style={{
                background: index >= currentIndex ? '#ddd' : '#EC4C39'
              }} />}
									
									{index !== textArr.length - 1 ? <View className="line" style={{
                background: index >= currentIndex ? '#ddd' : '#EC4C39'
              }} /> : null}
								</View>
							</View>;
        })}
				</View>
			</View>;
  }
}
export default ProgressBar;