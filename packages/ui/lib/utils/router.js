import Taro, { getCurrentPages } from '@tarojs/taro';
const wtils = require('wtils');
class Route {
    /**
     * 返回上一页面
     */
    navigateBack() {
        const curPages = getCurrentPages();
        if (curPages.length <= 1) {
            console.error('已无上层页面，无法返回');
            return;
        }
        Taro.navigateBack();
    }
    /**
     * 页面push
     */
    navigateTo(params) {
        this.jump({
            type: 'navigateTo',
            config: params,
        });
    }
    /**
     * 重定向
     */
    redirectTo(params) {
        this.jump({
            type: 'redirectTo',
            config: params,
        });
    }
    /**
     * 重定向
     */
    relaunch(params) {
        this.jump({
            type: 'relaunch',
            config: params,
        });
    }
    /**
     * 切换tabbar
     * @param params
     */
    switchTab(params) {
        this.jump({
            type: 'switchTab',
            config: params,
        });
    }
    /**
     * 跳转页面
     */
    jump(params) {
        const { type, config: { url, query }, } = params;
        // url校验
        if (!url) {
            throw new Error('jump方法参数校验失败：缺少url');
        }
        if (!url.startsWith('/')) {
            throw new Error('jump方法参数校验失败：url必须以“/”开头');
        }
        let suffix = '';
        if (query && Object.keys(query).length > 0) {
            suffix = wtils.transParams(JSON.stringify(query));
        }
        const finalUrl = `${url}${suffix}`;
        switch (type) {
            case 'redirectTo':
                Taro.redirectTo({
                    url: finalUrl,
                });
                break;
            case 'relaunch':
                Taro.reLaunch({
                    url: finalUrl,
                });
                break;
            case 'switchTab':
                Taro.switchTab({
                    url: finalUrl,
                });
            default:
                Taro.navigateTo({
                    url: finalUrl,
                });
                break;
        }
    }
    /**
     * 获取当前路由
     */
    getCurrentRoute() {
        const currentPages = getCurrentPages();
        console.log('当前页面', currentPages);
        return currentPages.length
            ? currentPages[currentPages.length - 1].route
            : '';
    }
    /**
     * 返回首页
     */
    backToHome() {
        // @ts-ignore
        const { tabBar } = __wxConfig;
        if (tabBar.list && tabBar.list.length) {
            this.switchTab({
                url: `/${tabBar.list[0].pagePath.split('.')[0]}`,
            });
        }
    }
}
export default new Route();
//# sourceMappingURL=router.js.map