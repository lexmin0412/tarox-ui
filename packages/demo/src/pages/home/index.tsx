import React from "react";
import { View, Text } from "@tarojs/components";
import Taro, {
  useAddToFavorites,
  useShareAppMessage,
  useShareTimeline,
  useDidShow,
  useRouter,
} from "@tarojs/taro";
import {XButton} from 'taro-x-ui'
import { handleViewDocs } from './../../utils/viewdocs'
import "./index.scss";
import logo from './../../assets/logo.png'

console.log('XButton', XButton)

const Index: React.FC = (props) => {

  console.log('props', props)
  const router = useRouter()

  useDidShow(()=>{
    console.log('into useDidShow, router: ', router)
  })

  // 分享给朋友
  useShareAppMessage(()=>{
    return{
      title: 'Taro X UI',
      path: '/pages/home/index?source=share',
      imageUrl: logo
    }
  })

  // 分享到朋友圈
  useShareTimeline(() => {
    return {
      title: 'Taro X UI',
      query: 'source=timeline',
      imageUrl: logo
    }
  })

  // 收藏
  useAddToFavorites(() => {
    return {
      title: 'Taro X UI',
      query: 'source=favorites',
      imageUrl: logo
    }
  })

  const componentsList = [
    {
      name: "按钮",
      path: "/pages/button/index"
    },
    {
      name: "模态框",
      path: "/pages/modal/index"
    },
    {
      name: "图片",
      path: "/pages/image/index"
    },
  ];

  return (
    <View className="padding-sm">

      {componentsList.map((comp) => (
        <View
          className="list-item bg-white margin-top-xs"
          key={comp.name}
          onClick={() => Taro.navigateTo({ url: comp.path })}
        >
          <View className="list-item-name">
            <Text className="icon-prefix-circle"></Text>
            {comp.name}
          </View>
          <View className="icon-next">
            {'>'}
          </View>
        </View>
      ))}

      <XButton
        customStyle={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          height: Taro.pxTransform(90)
        }}
        onClick={()=>handleViewDocs('all')}
      >
        查看文档
      </XButton>

    </View>
  );
};

export default Index;
