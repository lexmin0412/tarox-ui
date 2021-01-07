import Taro from '@tarojs/taro'

/**
 * 查看文档 复制链接到本地
 */
export const handleViewDocs = (docType: 'all' | 'button') => {
  const link = {
    'all': '/',
    'button': '/button'
  }
  Taro.setClipboardData({
    data: `https://taro-xui.vercel.app/#${link[docType]}`,
    success: res => {
      Taro.showToast({
        title: '链接复制成功，请到浏览器中打开链接查看',
        icon: 'none'
      })
    }
  })
}