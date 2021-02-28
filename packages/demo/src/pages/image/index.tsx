import React from "react";
import Taro, {
  useAddToFavorites,
  useShareAppMessage,
  useShareTimeline,
} from '@tarojs/taro'
import {View, Text} from "@tarojs/components";
import {XButton ,XImage} from 'taro-x-ui';
import {pxTransform} from './../../utils/taroApi'
import {handleViewDocs} from './../../utils/viewdocs'
import './index.scss'
import logo from './../../assets/logo.png'
import defaultImg from './default.png'

const ImageIndex: React.FC = () => {

  // 分享给朋友
  useShareAppMessage(() => {
    return {
      title: 'Taro X UI - Image',
      path: '/pages/home/index?source=share',
      imageUrl: logo
    }
  })

  // 分享到朋友圈
  useShareTimeline(() => {
    return {
      title: 'Taro X UI - Image',
      query: 'source=timeline',
      imageUrl: logo
    }
  })

  // 收藏
  useAddToFavorites(() => {
    return {
      title: 'Taro X UI - Image',
      query: 'source=favorites',
      imageUrl: logo
    }
  })

  const handleClick = (e) => {
    console.log('e', e)
    Taro.showToast({
      title: '点击图片',
      icon: 'none'
    })
  }

  return (
    <View className='padding-fixed-b'>
      {/* <View className="bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text"></View>
      </View> */}
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <Text className='x-item-text'>默认</Text>
        <XImage
          src='https://wx.qlogo.cn/mmhead/Q3auHgzwzM7jf32rOaC2SdoSeSKRdrVbv4G0dGA5p7S0AwMQR8UEFg/0'
          className='test-image'
          mode='aspectFit'
        />
      </View>

      <View className="bg-white x-item padding-sm-x solid-border-b margin-top-sm">
        <View className="x-item-text">加载失败</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <Text className='x-item-text'>默认缺省图</Text>
        <XImage
          src='123'
          className='test-image'
          mode='aspectFit'
        />
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <Text className='x-item-text'>指定缺省图</Text>
        <XImage
          src='123'
          errImg={defaultImg}
          className='test-image'
          mode='aspectFit'
        />
      </View>

      <View className="bg-white x-item padding-sm-x solid-border-b margin-top-sm">
        <View className="x-item-text">自定义样式</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <Text className='x-item-text'>背景色</Text>
        <XImage
          src='123'
          className='test-image custom-bg-blue'
          mode='aspectFit'
        />
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <Text className='x-item-text'>圆角</Text>
        <XImage
          src='https://wx.qlogo.cn/mmhead/Q3auHgzwzM7jf32rOaC2SdoSeSKRdrVbv4G0dGA5p7S0AwMQR8UEFg/0'
          className='test-image round'
          mode='aspectFit'
        />
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <Text className='x-item-text'>宽高</Text>
        <XImage
          src='https://wx.qlogo.cn/mmhead/Q3auHgzwzM7jf32rOaC2SdoSeSKRdrVbv4G0dGA5p7S0AwMQR8UEFg/0'
          className='test-image custom-size'
          mode='aspectFit'
        />
      </View>

      {/* <View className="bg-white x-item padding-sm-x solid-border-b margin-top-sm">
        <View className="x-item-text">预览</View>
      </View> */}
      <View className="bg-white x-item padding-sm-x flex justify-between align-center margin-top-sm">
        <Text className='x-item-text'>点击图片预览</Text>
        <XImage
          src='https://wx.qlogo.cn/mmhead/Q3auHgzwzM7jf32rOaC2SdoSeSKRdrVbv4G0dGA5p7S0AwMQR8UEFg/0'
          className='test-image'
          mode='aspectFit'
          previewUrls={['https://wx.qlogo.cn/mmhead/Q3auHgzwzM7jf32rOaC2SdoSeSKRdrVbv4G0dGA5p7S0AwMQR8UEFg/0']}
        />
      </View>

      <View className="bg-white x-item padding-sm-x flex justify-between align-center margin-top-sm">
        <Text className='x-item-text'>自定义点击事件</Text>
        <XImage
          src='https://wx.qlogo.cn/mmhead/Q3auHgzwzM7jf32rOaC2SdoSeSKRdrVbv4G0dGA5p7S0AwMQR8UEFg/0'
          className='test-image'
          mode='aspectFit'
          onClick={handleClick}
        />
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
  )
}

export default ImageIndex