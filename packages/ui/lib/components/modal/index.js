// import Taro from '@tarojs/taro'
import React, { useState, useEffect } from 'react';
import { View, Image } from '@tarojs/components';
import XButton from './../button/index';
import classnames from 'classnames';
export const XModal = ({ isOpen, onCancel, onConfirm, onClose, clickMaskToClose, headerTitle, showCancel = true, children, remindIcon, remindTitle, confirmText, cancelText }) => {
    const prefixCls = 'x-modal';
    const [_isOpen, setOpen] = useState(isOpen);
    useEffect(() => {
        console.log('modal components useEffects', isOpen);
        setOpen(isOpen);
    }, [isOpen]);
    const handleClose = () => {
        onClose && onClose();
    };
    /**
     * 取消按钮点击
     */
    const handleCancel = () => {
        onCancel && onCancel();
    };
    /**
     * 确认按钮点击
     */
    const handleConfirm = () => {
        onConfirm && onConfirm();
    };
    // 类名
    const modaClass = classnames('x-modal', {
        'show': _isOpen,
    });
    const mainClass = classnames(`${prefixCls}-main`, {
        ['padding-top-md']: !headerTitle
    });
    return (React.createElement(View, { className: modaClass },
        React.createElement(View, { className: `${prefixCls}-mask`, onClick: clickMaskToClose ? handleClose : void 0 }),
        React.createElement(View, { className: mainClass },
            headerTitle &&
                React.createElement(View, { className: `${prefixCls}-main-header` }, headerTitle),
            remindTitle ?
                React.createElement(View, { className: `${prefixCls}-main-remind` },
                    remindIcon &&
                        React.createElement(Image, { src: remindIcon, className: `${prefixCls}-main-remind-icon` }),
                    React.createElement(View, { className: `${prefixCls}-main-remind-title` }, remindTitle),
                    children &&
                        React.createElement(View, { className: `${prefixCls}-main-remind-text` }, children))
                :
                    React.createElement(View, { className: `${prefixCls}-main-content` }, children),
            React.createElement(View, { className: `${prefixCls}-main-btns ${showCancel ? 'justify-between' : 'justify-center'}` },
                showCancel &&
                    React.createElement(XButton, { inline: true, round: true, hollow: true, customColor: '#c3c3c3', onClick: handleCancel }, cancelText || '取消'),
                React.createElement(XButton, { inline: true, round: true, onClick: handleConfirm }, confirmText || '确认')))));
};
export default XModal;
//# sourceMappingURL=index.js.map