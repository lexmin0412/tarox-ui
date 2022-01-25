/// <reference types="react" />
declare type NavigationHeaderProps = {
    title?: string;
    /**
     * 是否受控 默认false 如果为true则图标默认不展示
     */
    controlled?: boolean;
    /**
     * 返回按钮是否可见 当controlled为true时生效
     */
    backVisible?: boolean;
    /**
     * 首页按钮是否可见 当controlled为true时生效
     */
    homeVisible?: boolean;
    /**
     * 返回按钮点击事件 当controlled为true时生效
     */
    onBackClick?: () => void;
    /**
     * 首页按钮点击时间 当controlled为true时生效
     */
    onHomeClick?: () => void;
};
export declare const XNavigation: (props: NavigationHeaderProps) => JSX.Element;
export default XNavigation;
