import Taro from '@tarojs/taro'
import React, {
  useState,
} from 'react'
import {Image} from '@tarojs/components'
import {ImageProps} from "@tarojs/components/types/Image";
import classnames from 'classnames'

import {CommonProps} from "../types/common";
import {CommonEvent} from "@tarojs/components/types/common";

interface IProps extends CommonProps, ImageProps {
  /**
   * 缺省图片
   */
  errImg?: string
  /**
   * 预览图片列表
   */
  previewUrls?: Array<string>
  /**
   * 点击事件
   */
  onClick?: (event: CommonEvent) => void
}

export const XImage: React.FC<IProps> = ({
  src,
  errImg,
  className,
  mode = 'aspectFit',
  previewUrls,
  onClick
}) => {

  const prefixCls = 'x-image'
  const componentClassNames = classnames(className, prefixCls)

  const [imgUrl, setImgUrl] = useState(src)

  const handleError = (event: CommonEvent) => {
    console.log('handleError', event)
    setImgUrl(errImg || 'https://img20.360buyimg.com/ling/jfs/t1/20876/36/12835/3043/5c9c2929Ed18cfb11/15b1c03ec830ab8e.png')
  }

  // 剩余属性
  const restProps = {
    mode
  }

  /**
   * 点击事件
   */
  const handleClick = (event: CommonEvent) => {
    if (previewUrls) {
      Taro.previewImage({
        current: previewUrls[0],
        urls: previewUrls
      })
    } else {
      void 0
    }
    onClick && onClick(event)
  }

  return (
    <Image src={imgUrl}
      onError={handleError}
      {...restProps}
      onClick={handleClick}
      className={componentClassNames}
    />
  )
}