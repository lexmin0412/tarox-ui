import React from "react";
import Taro, {
  useAddToFavorites,
  useShareAppMessage,
  useShareTimeline,
} from '@tarojs/taro'
import {View } from "@tarojs/components";
import {XButton} from 'taro-x-ui';
import {handleViewDocs} from './../../utils/viewdocs'
import './index.scss'
import logo from './../../assets/logo.png'

const ButtonIndex: React.FC = () => {

  const handleClick = () => {
    Taro.showToast({
      title: '你点击了按钮'
    })
  }

  // 分享给朋友
  useShareAppMessage(() => {
    return {
      title: 'Taro X UI - Button',
      path: '/pages/home/index?source=share',
      imageUrl: logo
    }
  })

  // 分享到朋友圈
  useShareTimeline(() => {
    return {
      title: 'Taro X UI - Button',
      query: 'source=timeline',
      imageUrl: logo
    }
  })

  // 收藏
  useAddToFavorites(() => {
    return {
      title: 'Taro X UI - Button',
      query: 'source=favorites',
      imageUrl: logo
    }
  })

  return (
    <View className='padding-fixed-b'>
      <View className="bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">按钮形状</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XButton inline
          size='mini'
        >
          行内
        </XButton>

        <XButton inline
          size='mini'
          round
        >
          圆角
        </XButton>
      </View>

      <View className="margin-top bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">按钮尺寸</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XButton
          size='mini'
          round
          inline
        >
          小
        </XButton>

        <XButton
          size='normal'
          round
          inline
        >
          默认
        </XButton>

        <XButton
          size='large'
          round
          inline
        >
          大
        </XButton>
      </View>

      <View className="margin-top bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">镂空按钮</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XButton inline hollow>默认</XButton>
      </View>

      <View className="margin-top bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">自定义颜色</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XButton inline hollow customColor='#ff4a4a'>#ff4a4a - 镂空</XButton>
        <XButton inline hollow customColor='#45aafa'>#45aafa - 镂空</XButton>
        <XButton inline hollow customColor='grey'>grey - 镂空</XButton>
      </View>

      <View className="margin-top bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">块状</View>
      </View>
      <View className="bg-white x-item padding-sm">
        <View className="margin-top-xs">
          <XButton hollow>块状 - 镂空</XButton>
        </View>
        <View className="margin-top-xs">
          <XButton>块状 - 不镂空</XButton>
        </View>
      </View>

      <View className="margin-top bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">loading</View>
      </View>
      <View className="bg-white x-item padding-sm">
        <View className="margin-top-xs">
          <XButton hollow loading>块状 - loading</XButton>
        </View>
      </View>

      <View className="margin-top bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">禁用</View>
      </View>
      <View className="bg-white x-item padding-sm">
        <View className="margin-top-xs">
          <XButton hollow disabled>禁用 - 镂空</XButton>
        </View>
        <View className="margin-top-xs">
          <XButton disabled>禁用 - 不镂空</XButton>
        </View>
      </View>

      <View className="margin-top bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">点击事件</View>
      </View>
      <View className="bg-white x-item padding-sm">
        <View className="margin-top-xs">
          <XButton
            onClick={handleClick}
          >点击事件</XButton>
        </View>
      </View>

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

export default ButtonIndex;
