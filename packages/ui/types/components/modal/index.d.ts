import React from 'react';
import { CommonProps } from "../types/common";
interface IProps extends CommonProps {
    /**
     * 是否展示弹窗
     */
    isOpen: boolean;
    /**
     * 头标题
     */
    headerTitle?: string;
    /**
     * 关闭
     */
    onClose?: () => void;
    /**
     * 确认
     */
    onConfirm?: () => void;
    /**
     * 取消
     */
    onCancel?: () => void;
    /**
     * 点击遮罩关闭
     */
    clickMaskToClose?: boolean;
    /**
     * 是否展示取消按钮
     */
    showCancel?: boolean;
    /**
     * 强提示图片
     */
    remindIcon?: string;
    /**
     * 强提示标题
     */
    remindTitle?: string;
    /**
     * 取消按钮文字
     */
    cancelText?: string;
    /**
     * 确认按钮文字
     */
    confirmText?: string;
}
export declare const XModal: React.FC<IProps>;
export default XModal;
