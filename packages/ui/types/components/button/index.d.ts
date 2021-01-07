import React from "react";
import { ButtonProps } from "@tarojs/components/types/Button";
import { CommonProps } from "../types/common";
import { CommonEvent } from "@tarojs/components/types/common";
interface IProps extends CommonProps, Pick<ButtonProps, "formType" | "openType" | "lang" | "sessionFrom" | "sendMessageTitle" | "sendMessagePath" | "sendMessageImg" | "showMessageCard" | "appParameter" | "onContact" | "onGetUserInfo" | "onGetPhoneNumber" | "onOpenSetting" | "onError" | "loading"> {
    /**
     * 自定义样式
     */
    customStyle?: React.CSSProperties;
    /**
     * 点击事件 非disabled状态点击时触发
     */
    onClick?: (event: CommonEvent) => void;
    /**
     * 是否为行内按钮 默认false
     */
    inline?: boolean;
    /**
     * 按钮尺寸 默认md
     */
    size?: 'mini' | 'normal' | 'large';
    /**
     * 是否圆角 默认false
     */
    round?: boolean;
    /**
     * 是否禁用 默认false
     */
    disabled?: boolean;
    /**
     * 是否镂空 默认false
     */
    hollow?: boolean;
    /**
     * 自定义按钮颜色
     */
    customColor?: string;
}
export declare const XButton: React.FC<IProps>;
export default XButton;
