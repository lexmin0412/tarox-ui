import Taro from '@tarojs/taro';
interface UseNavigationBarInfoPresets {
    menuButtonInfo: Taro.getMenuButtonBoundingClientRect.Rect;
    systemInfo: Taro.getSystemInfoSync.Result;
}
interface INavigationBarInfo {
    navigationBarHeight: number;
    navigationContentHeight: number;
    menuButtonHeight: number;
    navigationPaddding: number;
    menuButtonWidth: number;
    statusBarHeight: number;
}
/**
 * 获取导航栏相关信息
 */
export declare const useNavigationBarInfo: (presets?: UseNavigationBarInfoPresets) => INavigationBarInfo;
export {};
