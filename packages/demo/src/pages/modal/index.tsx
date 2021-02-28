import React, {
  useState
} from "react";
import {View, Text} from "@tarojs/components";
import Taro, {
  useAddToFavorites,
  useShareAppMessage,
  useShareTimeline,
  useDidShow,
  useRouter,
} from "@tarojs/taro";
import {XButton, XModal} from 'taro-x-ui'

import {pxTransform} from './../../utils/taroApi'
import {handleViewDocs} from './../../utils/viewdocs'
import "./index.scss";
import logo from './../../assets/logo.png'

const ModalIndex: React.FC = (props) => {


  // 分享给朋友
  useShareAppMessage(() => {
    return {
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

  const [isOpen1, setOpen1] = useState(false)
  const [isOpen2, setOpen2] = useState(false)
  const [isOpen3, setOpen3] = useState(false)
  const [isOpen4, setOpen4] = useState(false)
  const [isOpen5, setOpen5] = useState(false)
  const [isOpen6, setOpen6] = useState(false)
  const [isOpen7, setOpen7] = useState(false)

  return (
    <View className="modal-index-page padding-fixed-b">

      <View className="bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">纯文字提示 - 单按钮</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XButton
          onClick={() => setOpen1(true)}
        >
          开启
        </XButton>
        <XModal
          isOpen={isOpen1}
          onClose={()=>setOpen1(false)}
          onConfirm={() => setOpen1(false)}
          clickMaskToClose
          showCancel={false}
        >
          我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。
        </XModal>
      </View>

      <View className="bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">双按钮</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XButton
          onClick={() => setOpen2(true)}
        >
          开启
        </XButton>
        <XModal isOpen={isOpen2}
          onClose={() => setOpen2(false)}
          onConfirm={() => setOpen2(false)}
          onCancel={() => setOpen2(false)}
          clickMaskToClose
          headerTitle='头部标题'
          showCancel
        >
          我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。
        </XModal>
      </View>

      <View className="bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">自定义按钮文字</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XButton
          onClick={() => setOpen6(true)}
        >
          开启
        </XButton>
        <XModal isOpen={isOpen6}
          onClose={() => setOpen6(false)}
          onConfirm={() => setOpen6(false)}
          onCancel={() => setOpen6(false)}
          clickMaskToClose
          headerTitle='头部标题'
          showCancel
          cancelText='自定义1'
          confirmText='自定义2'
        >
          我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。
        </XModal>
      </View>

      <View className="bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">长内容</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XButton
          onClick={() => setOpen3(true)}
        >
          开启
        </XButton>
        <XModal isOpen={isOpen3}
          onClose={() => setOpen3(false)}
          onConfirm={() => setOpen3(false)}
          onCancel={() => setOpen3(false)}
          clickMaskToClose
          headerTitle='头部标题'
          showCancel={false}
        >
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
        </XModal>
      </View>

      <View className="bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">强提示 - 带icon</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XButton
          onClick={()=>setOpen4(true)}
        >
          开启
        </XButton>
        <XModal isOpen={isOpen4}
          onClose={()=>setOpen4(false)}
          onConfirm={() => setOpen4(false)}
          onCancel={() => setOpen4(false)}
          clickMaskToClose
          remindIcon={logo}
          remindTitle='Taro X UI'
          showCancel={false}
        >
        </XModal>
      </View>

      <View className="bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">强提示 - 带icon - 长内容</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XButton
          onClick={() => setOpen5(true)}
        >
          开启
        </XButton>
        <XModal isOpen={isOpen5}
          onClose={() => setOpen5(false)}
          onConfirm={() => setOpen5(false)}
          onCancel={() => setOpen5(false)}
          clickMaskToClose
          remindIcon={logo}
          remindTitle='Taro X UI'
          showCancel={false}
        >
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
          <View>我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。</View>
        </XModal>
      </View>

      <View className="bg-white x-item padding-sm-x solid-border-b">
        <View className="x-item-text">事件监听</View>
      </View>
      <View className="bg-white x-item padding-sm-x flex justify-between align-center">
        <XButton
          onClick={() => setOpen7(true)}
        >
          开启
        </XButton>
        <XModal isOpen={isOpen7}
          onClose={() => {
            setOpen7(false);
            Taro.showToast({title: '你点击了遮罩关闭', icon: 'none'})
          }}
          onConfirm={() => {
            setOpen7(false);
            Taro.showToast({title: '你点击了确认按钮', icon: 'none'})
          }}
          onCancel={() => {
            setOpen7(false);
            Taro.showToast({title: '你点击了取消按钮', icon: 'none'})
          }}
          clickMaskToClose
          headerTitle='头部标题'
          showCancel
        >
          我是一个基于 Taro3 + React 的基于 Taro3 + React 构建的组件库的演示小程序。
        </XModal>
      </View>

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
  )
}

export default ModalIndex