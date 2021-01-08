/**
 * checkbox 复选框组件示例
 */

import Taro, {
  useAddToFavorites,
  useShareAppMessage,
  useShareTimeline
} from '@tarojs/taro'
import { View } from '@tarojs/components'
import React from "react";

import logo from './../../assets/logo.png'

const XCheckboxIndex: React.FC = () => {

  // 分享给朋友
  useShareAppMessage(() => {
    return {
      title: 'Taro X UI - Checkbox',
      path: '/pages/home/index?source=share',
      imageUrl: logo
    }
  })

  // 分享到朋友圈
  useShareTimeline(() => {
    return {
      title: 'Taro X UI - Checkbox',
      query: 'source=timeline',
      imageUrl: logo
    }
  })

  // 收藏
  useAddToFavorites(() => {
    return {
      title: 'Taro X UI - Checkbox',
      query: 'source=favorites',
      imageUrl: logo
    }
  })

  return (
    <View></View>
  );
};

export default XCheckboxIndex;
