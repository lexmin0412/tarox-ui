var qr = require( 'qr-image' );
const args = process.argv
console.log( 'args', args )
const qrcodeType = args[ 2 ]
const compName = args[ 3 ]

let previewUrl = ''
const h5Base = 'https://lexmin0412.github.io/tarox-ui-h5-sample/#'
let imgName = ''

/**
 * 验证二维码类型
 */
const validateQrCodeType = ( type ) => {
  if ( ![ 'h5', 'mp' ].includes( type ) ) {
    console.log( `参数 [type]-预览二维码类型 不合法，请检查～
    格式：npm run img --type [type] --name [name],
    示例：npm run img --type h5 --name button
    type参数可选值如下：
    h5 - 网页
    mp - 微信小程序
    ` )
    process.exit()
  }
}
/**
 * 拼接二维码链接和图片名称
 */
const validateCompName = ( compName ) => {
  if ( !compName ) {
    console.error( `缺少参数[name]-组件名称，请检查～
  格式：npm run img --type [type] --name [name],
  示例：npm run img --type h5 --name button
  ` )
    process.exit()
  }
  if ( qrcodeType === 'h5' ) {
    previewUrl = `${h5Base}/pages/${compName}/index`
  }
  if ( qrcodeType === 'mp' ) {
    console.log( '暂不支持生成小程序码，请前往微信公众平台操作' )
    process.exit()
  }
  imgName = `qrcode_demo_h5_${compName}`
}

validateQrCodeType( qrcodeType )
validateCompName( compName )

var qr_svg = qr.image( previewUrl, {
  type: 'png'
} );
qr_svg.pipe( require( 'fs' ).createWriteStream( `_media/${imgName}.png` ) );