/**
 * default 缺省
 */

import Taro, {
  useAddToFavorites,
  useShareAppMessage,
  useShareTimeline
} from '@tarojs/taro'
import { View } from '@tarojs/components'
import React from "react";
import { XButton, XDefault } from 'taro-x-ui'
import {handleViewDocs} from './../../utils/viewdocs'
import {pxTransform} from './../../utils/taroApi'

import logo from './../../assets/logo.png'

import './index.scss'

const XDefaultIndex: React.FC = () => {

  // 分享给朋友
  useShareAppMessage(() => {
    return {
      title: 'Taro X UI - Default',
      path: '/pages/home/index?source=share',
      imageUrl: logo
    }
  })

  // 分享到朋友圈
  useShareTimeline(() => {
    return {
      title: 'Taro X UI - Default',
      query: 'source=timeline',
      imageUrl: logo
    }
  })

  // 收藏
  useAddToFavorites(() => {
    return {
      title: 'Taro X UI - Default',
      query: 'source=favorites',
      imageUrl: logo
    }
  })

  return (
    <View className='default-index padding-fixed-b'>

      <View className="bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">默认</View>
      </View>
      <View className="bg-white x-item padding-sm-x">
        <XDefault />
      </View>

      <View className="margin-top bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">自定义icon</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XDefault icon={logo} />
      </View>

      <View className="margin-top bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">自定义文字</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XDefault text="您的页面不见啦" />
      </View>

      <View className="margin-top bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">自定义容器高度</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XDefault height={pxTransform(500)} />
      </View>

      <XButton
        customStyle={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          height: pxTransform(90)
        }}
        onClick={() => handleViewDocs('image')}
      >
        查看文档
      </XButton>
    </View>
  );
};

export default XDefaultIndex;
