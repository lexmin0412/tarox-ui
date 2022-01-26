import Taro from '@tarojs/taro';
/**
 * 获取导航栏相关信息
 */
export const useNavigationBarInfo = (presets = {}) => {
    const menuButtonInfo = presets.menuButtonInfo || Taro.getMenuButtonBoundingClientRect();
    const systemInfo = presets.systemInfo || Taro.getSystemInfoSync();
    const { statusBarHeight } = systemInfo;
    let navigationContentHeight = 40;
    navigationContentHeight =
        (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 +
            menuButtonInfo.height;
    return {
        navigationBarHeight: statusBarHeight + navigationContentHeight,
        navigationContentHeight,
        menuButtonHeight: menuButtonInfo.height,
        navigationPaddding: systemInfo.windowWidth - menuButtonInfo.right,
        statusBarHeight: systemInfo.statusBarHeight,
        menuButtonWidth: menuButtonInfo.width,
    };
};
//# sourceMappingURL=hooks.js.map