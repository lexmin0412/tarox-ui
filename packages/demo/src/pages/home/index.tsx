import React from "react";
import { View, Text } from "@tarojs/components";
import Taro, {
  useAddToFavorites,
  useShareAppMessage,
  useShareTimeline,
  useDidShow,
  useRouter,
} from "@tarojs/taro";
import "./index.scss";
import logo from './../../assets/logo.png'

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
  ];

  return (
    <View className="padding-sm">

      {componentsList.map((comp) => (
        <View
          className="list-item bg-white"
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
    </View>
  );
};

export default Index;
