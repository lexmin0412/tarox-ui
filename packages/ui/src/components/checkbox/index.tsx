/**
 * checkbox 复选框组件
 */

import { View, Block } from '@tarojs/components'
import React from "react";
import classNames from 'classnames'

import {CommonProps} from "../types/common";
import {CommonEvent} from "@tarojs/components/types/common";

interface IProps extends CommonProps {
  /**
   * 是否选中
   */
  checked: boolean
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 复选框值改变事件
   */
  onChange?: (event: CommonEvent) => void
  /**
   * 默认颜色
   */
  color?: string
  /**
   * 选中颜色
   */
  checkedColor?: string
  /**
   * 自定义样式
   */
  customStyle?: React.CSSProperties
}

export const XCheckbox: React.FC<IProps> = ({
  prefixCls = 'x-checkbox',
  className,
  checked = false,
  onChange,
  disabled,
  color,
  checkedColor,
  customStyle
}) => {

  // 组装类名
  const propsClassNames = classNames(prefixCls, className, 'iconfont', {
    [`${prefixCls}-checked`]: checked,
    [`${prefixCls}-disabled`]: disabled
  })

  // 组装行内样式
  const customDefaultColor = !checked ? {
    color
  } : {}
  const customCheckedColor = checked ? {
    color: checkedColor
  } : {}
  const customeStyle = {
    ...customDefaultColor,
    ...customCheckedColor,
    ...customStyle
  }

  // 点击事件
  const handleClick = (event: CommonEvent) => {
    onChange && onChange(event)
  }

  return (
    <View className={propsClassNames}
      onClick={!disabled ? handleClick : void 0}
      style={customeStyle}
    >
      {
        checked ?
        <Block>&#xe609;</Block>
        :
        <Block>&#xe605;</Block>
      }
    </View>
  );
};

export default XCheckbox;
