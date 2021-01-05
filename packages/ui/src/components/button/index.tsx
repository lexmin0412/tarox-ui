import React from "react";
import { Button } from "@tarojs/components";
import { ButtonProps } from "@tarojs/components/types/Button";
import { CommonProps } from "../types/common";

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
    > {
  color: string
}

export const XButton: React.FC<IProps> = ({
  color,
  children
}) => {
  return (
    <Button style={{color}}
      className='x-button'
    >
      {children}
    </Button>
  );
};

export default XButton;
