import Taro from '@tarojs/taro'
import React from "react";
import { Button } from "@tarojs/components";
import { ButtonProps } from "@tarojs/components/types/Button";
import classNames from 'classnames'

import {CommonProps} from "../types/common";
import {CommonEvent} from "@tarojs/components/types/common";

interface IProps
  extends CommonProps,
    Pick<
      ButtonProps,
      | "formType"
      | "openType"
      | "lang"
      | "sessionFrom"
      | "sendMessageTitle"
      | "sendMessagePath"
      | "sendMessageImg"
      | "showMessageCard"
      | "appParameter"
      | "onContact"
      | "onGetUserInfo"
      | "onGetPhoneNumber"
      | "onOpenSetting"
      | "onError"
      | "loading"
    > {
  /**
   * 自定义样式
   */
  customStyle?: React.CSSProperties
  /**
   * 点击事件 非disabled状态点击时触发
   */
  onClick?: (event: CommonEvent) => void;
  /**
   * 是否为行内按钮 默认false
   */
  inline?: boolean
  /**
   * 按钮尺寸 默认md
   */
  size?: 'mini' | 'normal' | 'large'
  /**
   * 是否圆角 默认false
   */
  round?: boolean
  /**
   * 是否禁用 默认false
   */
  disabled?: boolean
  /**
   * 是否镂空 默认false
   */
  hollow?: boolean
  /**
   * 自定义按钮颜色
   */
  customColor?: string
}

export const XButton: React.FC<IProps> = ({
  children,
  openType,
  loading = false,
  customStyle = {},
  onClick,
  inline = false,
  size = 'normal',
  disabled = false,
  round = false,
  hollow = false,
  customColor
}) => {
  const prefixCls = 'x-button'

  // 剩余属性
  const restProps = Taro.getEnv() === Taro.ENV_TYPE.WEB ? {} : {
    openType,
    loading
  }

  // 组装类名
  const propsClassNames = classNames(prefixCls, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-flex`]: inline,
    [`${prefixCls}-round`]: round,
    [`${prefixCls}-hollow`]: hollow,
    [`${prefixCls}-disabled`]: disabled
  })


  /**
   * 计算样式
   */
  const computedStyle = () => {
    if (customColor) {
      return {
        color: hollow ? customColor : '#fff',
        backgroundColor: hollow ? '#fff' : customColor,
        border: hollow ? `1px solid ${customColor}` : 0
      }
    } else {
      return {
        color: hollow ? '#FF0036' : '#fff',
        backgroundColor: hollow ? '#fff' : '#FF0036',
        border: hollow ? `1px solid #FF0036` : 0
      }
    }
  }

  // 点击事件
  const handleClick = (event: CommonEvent) => {
    // 非禁用状态下触发
    !disabled && onClick && onClick(event)
  }

  return (
    <Button style={{
        ...computedStyle(),
        ...customStyle
      }}
      className={propsClassNames}
      {...restProps}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default XButton;
