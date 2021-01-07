// import Taro from '@tarojs/taro'
import React, {
  useState,
  useEffect
} from 'react'
import { View, Image } from '@tarojs/components'
import XButton from './../button/index'
import classnames from 'classnames'

import {CommonProps} from "../types/common";
// import {CommonEvent} from "@tarojs/components/types/common";

interface IProps extends CommonProps {
  /**
   * 是否展示弹窗
   */
  isOpen: boolean
  /**
   * 头标题
   */
  headerTitle?: string
  /**
   * 关闭
   */
  onClose?: () => void
  /**
   * 确认
   */
  onConfirm?: () => void
  /**
   * 取消
   */
  onCancel?: () => void
  /**
   * 点击遮罩关闭
   */
  clickMaskToClose?: boolean
  /**
   * 是否展示取消按钮
   */
  showCancel?: boolean
  /**
   * 强提示图片
   */
  remindIcon?: string
  /**
   * 强提示标题
   */
  remindTitle?: string
  /**
   * 取消按钮文字
   */
  cancelText?: string
  /**
   * 确认按钮文字
   */
  confirmText?: string
}

export const XModal: React.FC<IProps> = ({
  isOpen,
  onCancel,
  onConfirm,
  onClose,
  clickMaskToClose,
  headerTitle,
  showCancel = true,
  children,
  remindIcon,
  remindTitle,
  confirmText,
  cancelText
}) => {
  const prefixCls = 'x-modal'
  const [_isOpen, setOpen] = useState(isOpen);

  useEffect(() => {
    console.log('modal components useEffects', isOpen)
    setOpen(isOpen)
  }, [isOpen])

  const handleClose = () => {
    onClose && onClose()
  }

  /**
   * 取消按钮点击
   */
  const handleCancel = () => {
    onCancel && onCancel()
  }

  /**
   * 确认按钮点击
   */
  const handleConfirm = () => {
    onConfirm && onConfirm()
  }

  // 类名
  const modaClass = classnames('x-modal', {
    'show': _isOpen,
  })

  const mainClass = classnames(`${prefixCls}-main`, {
    ['padding-top-md']: !headerTitle
  })

  return (
    <View className={modaClass}>
      <View className={`${prefixCls}-mask`}
        onClick={clickMaskToClose ? handleClose : void 0}
      />
      <View className={mainClass}>

        {
          headerTitle &&
          <View className={`${prefixCls}-main-header`}>
            {headerTitle}
          </View>
        }

        {
          remindTitle ?
          <View className={`${prefixCls}-main-remind`}>
            {
              remindIcon &&
              <Image src={remindIcon}
                className={`${prefixCls}-main-remind-icon`}
              />
            }
            <View className={`${prefixCls}-main-remind-title`}>
              {remindTitle}
            </View>
            {
              children &&
              <View className={`${prefixCls}-main-remind-text`}>
                {children}
              </View>
            }
          </View>
            :
            <View className={`${prefixCls}-main-content`}>
              {children}
            </View>
        }

        <View className={`${prefixCls}-main-btns ${showCancel?'justify-between':'justify-center'}`}>
          {
            showCancel &&
            <XButton
              inline
              round
              hollow
              customColor='#c3c3c3'
              onClick={handleCancel}
            >
              {cancelText || '取消'}
            </XButton>
          }
          <XButton inline round onClick={handleConfirm}>
            {confirmText || '确认'}
          </XButton>
        </View>
      </View>
    </View>
  )
}

export default XModal