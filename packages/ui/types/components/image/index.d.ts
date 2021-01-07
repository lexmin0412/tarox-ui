import React from 'react';
import { ImageProps } from "@tarojs/components/types/Image";
import { CommonProps } from "../types/common";
import { CommonEvent } from "@tarojs/components/types/common";
interface IProps extends CommonProps, ImageProps {
    /**
     * 缺省图片
     */
    errImg?: string;
    /**
     * 预览图片列表
     */
    previewUrls?: Array<string>;
    /**
     * 点击事件
     */
    onClick?: (event: CommonEvent) => void;
}
export declare const XImage: React.FC<IProps>;
export {};
