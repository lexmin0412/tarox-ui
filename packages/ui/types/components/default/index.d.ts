import React from "react";
import { CommonProps } from "../types/common";
interface IProps extends CommonProps {
    /**
     * 自定义缺省图片
     */
    icon?: string;
    /**
     * 自定义缺省文字
     */
    text?: string;
    /**
     * 指定缺省容器高度，合法的css style height值
     */
    height?: string;
}
export declare const XDefault: React.FC<IProps>;
export default XDefault;
