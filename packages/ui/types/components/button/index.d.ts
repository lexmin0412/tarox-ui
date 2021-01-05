import React from "react";
import { ButtonProps } from "@tarojs/components/types/Button";
import { CommonProps } from "../types/common";
interface IProps extends CommonProps, Pick<ButtonProps, "formType" | "openType" | "lang" | "sessionFrom" | "sendMessageTitle" | "sendMessagePath" | "sendMessageImg" | "showMessageCard" | "appParameter" | "onContact" | "onGetUserInfo" | "onGetPhoneNumber" | "onOpenSetting" | "onError"> {
    color: string;
}
export declare const XButton: React.FC<IProps>;
export default XButton;
