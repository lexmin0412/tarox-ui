/**
 * loadMore 加载更多
 */
import { View } from '@tarojs/components'
import React from "react";
import classNames from 'classnames'

import {CommonProps} from "../types/common";

interface IProps extends CommonProps {
  /**
   * 是否还有更多
   */
  hasMore: boolean;
  /**
   * 加载中文字
   */
  loadingText?: string
  /**
   * 加载完成文字
   */
  loadedText?: string
}

export const XLoadMore: React.FC<IProps> = ({
  prefixCls = 'x-load-more',
  hasMore,
  loadingText,
  loadedText
}) => {

  // 组装类名
  const propsClassNames = classNames(prefixCls, {

  })

  // 正在加载状态渲染
  const renderLoadingStatus = () => {
    return loadingText || '正在加载更多...'
  }

  // 加载完成状态渲染
  const renderLoadedStatus = () => {
    return loadedText || '—— 没有更多数据了 ——'
  }

  return (
    <View className={propsClassNames}>
      {hasMore ? renderLoadingStatus() : renderLoadedStatus()}
    </View>
  );
};

export default XLoadMore;
