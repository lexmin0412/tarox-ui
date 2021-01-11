/**
 * about 关于
 */

import Taro, {
  useAddToFavorites,
  useShareAppMessage,
  useShareTimeline
} from '@tarojs/taro'
import { View } from '@tarojs/components'
import React from "react";
import { XButton, XCheckbox } from 'taro-x-ui'
import { handleViewDocs } from './../../utils/viewdocs'

import logo from './../../assets/logo.png'

const XAboutIndex: React.FC = () => {

  // 分享给朋友
  useShareAppMessage(() => {
    return {
      title: 'Taro X UI - About',
      path: '/pages/home/index?source=share',
      imageUrl: logo
    }
  })

  // 分享到朋友圈
  useShareTimeline(() => {
    return {
      title: 'Taro X UI - About',
      query: 'source=timeline',
      imageUrl: logo
    }
  })

  // 收藏
  useAddToFavorites(() => {
    return {
      title: 'Taro X UI - About',
      query: 'source=favorites',
      imageUrl: logo
    }
  })

  return (
    <View>
      我是一个基于 Taro3 + React 的多端组件库。

      <XButton
        customStyle={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          height: Taro.pxTransform(90)
        }}
        onClick={() => handleViewDocs('button')}
      >
        查看文档
      </XButton>
    </View>
  );
};

export default XAboutIndex;
