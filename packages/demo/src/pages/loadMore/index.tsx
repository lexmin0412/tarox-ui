/**
 * loadMore 加载更多组件
 */

import Taro, {
  useAddToFavorites,
  useShareAppMessage,
  useShareTimeline
} from '@tarojs/taro'
import {View } from '@tarojs/components'
import React, {useState} from "react";
import {XButton, XLoadMore } from 'taro-x-ui'
import { handleViewDocs } from './../../utils/viewdocs'
import {pxTransform } from './../../utils/taroApi'

import './index.scss'

import logo from './../../assets/logo.png'

const XLoadMoreIndex: React.FC = () => {

  // 分享给朋友
  useShareAppMessage(() => {
    return {
      title: 'Taro X UI - LoadMore',
      path: '/pages/home/index?source=share',
      imageUrl: logo
    }
  })

  // 分享到朋友圈
  useShareTimeline(() => {
    return {
      title: 'Taro X UI - LoadMore',
      query: 'source=timeline',
      imageUrl: logo
    }
  })

  // 收藏
  useAddToFavorites(() => {
    return {
      title: 'Taro X UI - LoadMore',
      query: 'source=favorites',
      imageUrl: logo
    }
  })

  const [loadingStatus, setLoadinigStatus] = useState(true)

  setTimeout(() => {
    setLoadinigStatus(false)
  }, 2000);

  return (
    <View className='load-more-index'>
      <View className="bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">默认 - 加载中</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XLoadMore hasMore={true} loadingText='' />
      </View>

      <View className="margin-top bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">默认 - 加载完成</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XLoadMore hasMore={false} loadingText='' />
      </View>

      <View className="margin-top bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">自定义文字 - 加载中</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XLoadMore hasMore={true} loadingText='loading text ...' />
      </View>

      <View className="margin-top bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">自定义文字 - 加载完成</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XLoadMore hasMore={false} loadedText='load finished.' />
      </View>

      <View className="margin-top bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">异步状态</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XLoadMore hasMore={loadingStatus} loadingText='加载中...' loadedText='加载完成' />
      </View>

      <XButton
        customStyle={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          height: pxTransform(90)
        }}
        onClick={() => handleViewDocs('loadMore')}
      >
        查看文档
      </XButton>
    </View>
  );
};

export default XLoadMoreIndex;
