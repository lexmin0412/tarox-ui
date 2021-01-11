export default {
  pages: [
    "pages/home/index",
    "pages/button/index",
    "pages/modal/index",
    "pages/image/index",
    "pages/checkbox/index",
    "pages/about/index",
  ],
  tabBar: {
    color: '#808086',
    selectedColor: '#ff0036',
    backgroundColor: '#ffffff',
    custom: false,
    list: [
      {
        pagePath: 'pages/home/index',
        text: '组件',
        iconPath: './assets/icon_tabbar_home.png',
        selectedIconPath: './assets/icon_tabbar_home_selected.png'
      },
      {
        pagePath: 'pages/about/index',
        text: '关于',
        iconPath: './assets/icon_tabbar_about.png',
        selectedIconPath: './assets/icon_tabbar_about_selected.png'
      },
    ]
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#FF0036",
    navigationStyle: "default",
    navigationBarTitleText: "Taro X UI",
    navigationBarTextStyle: "white"
  }
};
