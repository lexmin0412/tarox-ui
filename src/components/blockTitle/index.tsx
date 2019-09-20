/*
 * @Author: cellerchan
 * @Date: 2018-05-08 14:13:47
 * @Last Modified by: cellerchan
 * @Last Modified time: 2019-09-19 23:56:37
 */

import Taro, { Component } from '@tarojs/taro'
import './index.scss'

interface IProps {
  title: string;
}

/* 块标题组件
 * @title 块标题 String
 */
export default class BlockTitile extends Component<IProps, {}> {

  render() {
    let { title } = this.props
    return (
      <div className='com-block-title'>
        <i/>
        <div className='text'>
          {title}
        </div>
      </div>
    )
  }
}
