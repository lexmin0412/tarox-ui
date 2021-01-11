/**
 * checkbox 复选框组件
 */
import React from "react";
import { CommonProps } from "../types/common";
import { CommonEvent } from "@tarojs/components/types/common";
interface IProps extends CommonProps {
    /**
     * 是否选中
     */
    checked: boolean;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 复选框值改变事件
     */
    onChange?: (event: CommonEvent) => void;
    /**
     * 默认颜色
     */
    color?: string;
    /**
     * 选中颜色
     */
    checkedColor?: string;
    /**
     * 自定义样式
     */
    customStyle?: React.CSSProperties;
}
export declare const XCheckbox: React.FC<IProps>;
export default XCheckbox;
