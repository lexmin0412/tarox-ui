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

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.scss';

/**
 * IProps
 */
interface IProps {
	// list: any[];
}

class ProgressBar extends Component<IProps, {}> {
	/**
	 * render
	 */
	render() {
		const { currentIndex, textArr } = this.props;
		return (
			<View className='progress-bar'>
				{/* 文字 */}
				<View className='text-box'>
					{textArr.map((item, index) => {
						return (
							<View
								className='text-item'
								key={index}
								style={{
									color: index === currentIndex ? '#222' : '#999'
								}}
							>
								{item}
							</View>
						);
					})}
				</View>

				{/* 进度条 */}
				<View className='progress-box'>
					{textArr.map((item, index) => {
						return (
							<View className='progress-item' key={index}>
								<View className='progress-item'>
									{/* 当前所在索引显示大圆 否则显示小圆 */}
									{index === currentIndex ? (
										<View className='dot-big'>
											<View className='dot-inner' />
										</View>
									) : (
										<View
											className='dot'
											style={{
												background: index >= currentIndex ? '#ddd' : '#EC4C39'
											}}
										/>
									)}
									{/* 除最后一条之外显示连接线 */}
									{index !== textArr.length - 1 ? (
										<View
											className='line'
											style={{
												background: index >= currentIndex ? '#ddd' : '#EC4C39'
											}}
										/>
									) : null}
								</View>
							</View>
						);
					})}
				</View>
			</View>
		);
	}
}

export default ProgressBar;
