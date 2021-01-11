/**
 * checkbox 复选框组件示例
 */

import Taro, {
  useAddToFavorites,
  useShareAppMessage,
  useShareTimeline
} from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import React, {
  useState
} from "react";
import { XButton, XCheckbox } from 'taro-x-ui'
import { handleViewDocs } from './../../utils/viewdocs'

import logo from './../../assets/logo.png'
import './index.scss'

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

  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  const [checked5, setChecked5] = useState(false)

  return (
    <View className='checkbox-index'>

      <View className="bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">基础用法</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <Text>默认样式</Text>
        <XCheckbox
          checked={checked1}
          onChange={() => setChecked1(!checked1)}
        />
      </View>

      <View className="bg-white x-item padding-sm-x solid-border-b margin-top-sm">
        <View className="x-item-text">自定义样式</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <Text>自定义默认颜色</Text>
        <XCheckbox
          checked={checked2}
          onChange={()=>setChecked2(!checked2)}
          color='#ff0036'
        />
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <Text>自定义选中颜色</Text>
        <XCheckbox
          checked={checked3}
          onChange={() => setChecked3(!checked3)}
          checkedColor='#FFC300'
        />
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <Text>自定义字体大小</Text>
        <XCheckbox
          checked={checked4}
          onChange={() => setChecked4(!checked4)}
          customStyle={{
            fontSize: Taro.pxTransform(60)
          }}
        />
      </View>

      <View className="bg-white x-item padding-sm-x solid-border-b margin-top-sm">
        <View className="x-item-text">事件</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <Text>监听选中/取消选中</Text>
        <XCheckbox
          checked={checked5}
          onChange={()=>{
            setChecked5(!checked5)
            Taro.showToast({title: checked5 ? '取消选中' : '选中', icon: 'none'})
          }}
        />
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

export default XCheckboxIndex;
