import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './curtain.scss'

/**
 * props属性
 */
interface IProps {
  /**
   * 幕帘是否展示
   */
  visible: boolean;
  /**
   * 幕帘内容背景样式
   */
  bgStyle?: any;
}

/**
 * 组件内部属性
 */
interface IState {

}

export default class Curtain extends Component<IProps, IState> {

  render () {
    const { children, visible, bgStyle } = this.props
    /**
     * 合并背景样式
     */
    const bgStyleObj = bgStyle || {background: '#fff'}
    return (
      visible &&
      <View className='curtain-modal'>
        <View className='inner'
          style={bgStyleObj}
        >
          {children}
        </View>
      </View>
    )
  }
}
