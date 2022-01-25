/**
 * navigation 导航栏
 */

import Taro, {
  useAddToFavorites,
  useShareAppMessage,
  useShareTimeline
} from '@tarojs/taro'
import { View } from '@tarojs/components'
import React from "react";
import { XButton, XNavigation } from 'taro-x-ui'
import { handleViewDocs } from './../../utils/viewdocs'
import { pxTransform } from './../../utils/taroApi'

import logo from './../../assets/logo.png'
import './index.scss'

const XNavigationIndex: React.FC = () => {

  // 分享给朋友
  useShareAppMessage(() => {
    return {
      title: 'Taro X UI - Navigation',
      path: '/pages/home/index?source=share',
      imageUrl: logo
    }
  })

  // 分享到朋友圈
  useShareTimeline(() => {
    return {
      title: 'Taro X UI - Navigation',
      query: 'source=timeline',
      imageUrl: logo
    }
  })

  // 收藏
  useAddToFavorites(() => {
    return {
      title: 'Taro X UI - Navigation',
      query: 'source=favorites',
      imageUrl: logo
    }
  })

  return (
    <View>
      <XNavigation title="导航123" />
      <XNavigation title="受控-自定义点击" controlled
        onBackClick={() => Taro.showToast({title: 'clicked back'})}
        onHomeClick={() => Taro.showToast({title: 'clicked home'})}
      />
      <XNavigation title="受控-隐藏返回" controlled
        backVisible={false}
        onHomeClick={() => Taro.showToast({title: 'clicked home'})}
      />
      <XNavigation title="受控-隐藏首页" controlled
        homeVisible={false}
        onBackClick={() => Taro.showToast({title: 'clicked back'})}
      />
      <XButton
        customStyle={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          height: pxTransform(90)
        }}
        onClick={() => handleViewDocs('modal')}
      >
        查看文档
      </XButton>
    </View>
  );
};

export default XNavigationIndex;
