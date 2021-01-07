import Taro from '@tarojs/taro';
import React from "react";
import { Button } from "@tarojs/components";
import classNames from 'classnames';
export const XButton = ({ children, openType, loading = false, customStyle = {}, onClick, inline = false, size = 'normal', disabled = false, round = false, hollow = false, customColor }) => {
    const prefixCls = 'x-button';
    // 剩余属性
    const restProps = Taro.getEnv() === Taro.ENV_TYPE.WEB ? {} : {
        openType,
        loading
    };
    // 组装类名
    const propsClassNames = classNames(prefixCls, {
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-flex`]: inline,
        [`${prefixCls}-round`]: round,
        [`${prefixCls}-hollow`]: hollow,
        [`${prefixCls}-disabled`]: disabled
    });
    /**
     * 计算样式
     */
    const computedStyle = () => {
        if (customColor) {
            return {
                color: hollow ? customColor : '#fff',
                backgroundColor: hollow ? '#fff' : customColor,
                border: hollow ? `1px solid ${customColor}` : 0
            };
        }
        else {
            return {
                color: hollow ? '#f32525' : '#fff',
                backgroundColor: hollow ? '#fff' : '#f32525',
                border: hollow ? `1px solid #f32525` : 0
            };
        }
    };
    // 点击事件
    const handleClick = (event) => {
        // 非禁用状态下触发
        !disabled && onClick && onClick(event);
    };
    return (React.createElement(Button, Object.assign({ style: Object.assign(Object.assign({}, computedStyle()), customStyle), className: propsClassNames }, restProps, { onClick: handleClick }), children));
};
export default XButton;
//# sourceMappingURL=index.js.map