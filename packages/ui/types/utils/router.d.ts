/**
 * 路由配置对象
 */
interface IRoute {
    /**
     * 页面路径
     */
    url: string;
    /**
     * query参数
     */
    query?: {
        [key: string]: any;
    };
}
declare class Route {
    /**
     * 返回上一页面
     */
    navigateBack(): void;
    /**
     * 页面push
     */
    navigateTo(params: IRoute): void;
    /**
     * 重定向
     */
    redirectTo(params: IRoute): void;
    /**
     * 重定向
     */
    relaunch(params: IRoute): void;
    /**
     * 切换tabbar
     * @param params
     */
    switchTab(params: IRoute): void;
    /**
     * 跳转页面
     */
    jump(params: {
        type: 'navigateTo' | 'redirectTo' | 'relaunch' | 'switchTab';
        config: IRoute;
    }): void;
    /**
     * 获取当前路由
     */
    getCurrentRoute(): string;
    /**
     * 返回首页
     */
    backToHome(): void;
}
declare const _default: Route;
export default _default;
