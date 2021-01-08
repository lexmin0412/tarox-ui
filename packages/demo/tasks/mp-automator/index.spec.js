const automator = require( 'miniprogram-automator' )
describe( 'index', () => {
  let miniProgram
  let page

  beforeAll( async () => {
    miniProgram = await automator.launch( {
      projectPath: 'dist'
    } )
    page = await miniProgram.reLaunch( '/pages/home/index' )
    await page.waitFor( 500 )
  }, 30000 )

  // 测试首页最外层元素下的第一个标签是 view
  it( 'desc', async () => {
    const desc = await page.$( '.padding-sm' )
    expect( desc.tagName ).toBe( 'view' )
    // expect( await desc.text() ).toContain( '以下将展示小程序官方组件能力' )
  } )

  // 测试首页列表第一个组件名称为 按钮
  it('list', async () => {
    const lists = await page.$$('.list-item')
    expect(lists.length).toBe(3)
    const list = await lists[0].$('.list-item-name')
    expect(await list.text()).toBe('按钮')
  })

  it('list action', async () => {
    const listHead = await page.$('.list-item')
    await listHead.tap()
    await page.waitFor(500)
    expect((await miniProgram.currentPage()).path).toBe('pages/button/index')
    await page.waitFor(500)
  })

  afterAll( async () => {
    console.log('测试用例执行完毕，即将关闭开发者工具')
    await miniProgram.close()
  })
} )