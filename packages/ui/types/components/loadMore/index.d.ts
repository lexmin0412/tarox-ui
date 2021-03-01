import React from "react";
import { CommonProps } from "../types/common";
interface IProps extends CommonProps {
    /**
     * 是否还有更多
     */
    hasMore: boolean;
    /**
     * 加载中文字
     */
    loadingText?: string;
    /**
     * 加载完成文字
     */
    loadedText?: string;
}
export declare const XLoadMore: React.FC<IProps>;
export default XLoadMore;
