const ci = require('miniprogram-ci')
const pkgInfo = require('../../package.json')

;(async () => {
  try {
    const project = new ci.Project({
      appid: 'wxfc18f27dc0b3851a',
      type: 'miniProgram',
      projectPath: 'dist',
      privateKeyPath: 'tasks/mp-ci/private.key',
      ignores: ['node_modules/**/*'],
    })
    const previewResult = await ci.preview({
      project,
      desc: 'Taro X UI 组件库示例 - 预览', // 此备注将显示在“小程序助手”开发版列表中
      setting: {
        es6: true,
      },
      qrcodeFormat: 'image',
      qrcodeOutputDest: 'tasks/qrcode/preview.jpg',
      onProgressUpdate: console.log,
    })
    console.log('预览结果', previewResult)
  } catch (error) {
    console.log('预览失败', error)
		process.exit()
  }
})()
