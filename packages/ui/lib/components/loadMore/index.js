/**
 * loadMore 加载更多
 */
import { View } from '@tarojs/components';
import React from "react";
import classNames from 'classnames';
export const XLoadMore = ({ prefixCls = 'x-load-more', hasMore, loadingText, loadedText }) => {
    // 组装类名
    const propsClassNames = classNames(prefixCls, {});
    // 正在加载状态渲染
    const renderLoadingStatus = () => {
        return loadingText || '正在加载更多...';
    };
    // 加载完成状态渲染
    const renderLoadedStatus = () => {
        return loadedText || '—— 没有更多数据了 ——';
    };
    return (React.createElement(View, { className: propsClassNames }, hasMore ? renderLoadingStatus() : renderLoadedStatus()));
};
export default XLoadMore;
//# sourceMappingURL=index.js.map