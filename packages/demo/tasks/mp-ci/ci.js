const ci = require('miniprogram-ci')
const pkgInfo = require('./../../package.json')

;(async () => {
  try {
    const project = new ci.Project({
      appid: 'wxfc18f27dc0b3851a',
      type: 'miniProgram',
      projectPath: 'dist',
      privateKeyPath: 'tasks/mp-ci/private.key',
      ignores: ['node_modules/**/*'],
    })
    const uploadResult = await ci.upload({
      project,
      version: pkgInfo.version,
      desc: 'Taro X UI 组件库示例',
      setting: {
        es6: true,
      },
      onProgressUpdate: console.log,
    })
    console.log('上传代码成功', uploadResult)
  } catch (error) {
    console.log('上传代码失败', error)
		process.exit()
  }
})()
