/**
 * checkbox 复选框组件
 */
import { View, Block } from '@tarojs/components';
import React from "react";
import classNames from 'classnames';
export const XCheckbox = ({ prefixCls = 'x-checkbox', className, checked = false, onChange, disabled, color, checkedColor, customStyle }) => {
    // 组装类名
    const propsClassNames = classNames(prefixCls, className, 'iconfont', {
        [`${prefixCls}-checked`]: checked,
        [`${prefixCls}-disabled`]: disabled
    });
    // 组装行内样式
    const customDefaultColor = !checked ? {
        color
    } : {};
    const customCheckedColor = checked ? {
        color: checkedColor
    } : {};
    const customeStyle = Object.assign(Object.assign(Object.assign({}, customDefaultColor), customCheckedColor), customStyle);
    // 点击事件
    const handleClick = (event) => {
        onChange && onChange(event);
    };
    return (React.createElement(View, { className: propsClassNames, onClick: !disabled ? handleClick : void 0, style: customeStyle }, checked ?
        React.createElement(Block, null, "\uE609")
        :
            React.createElement(Block, null, "\uE605")));
};
export default XCheckbox;
//# sourceMappingURL=index.js.map