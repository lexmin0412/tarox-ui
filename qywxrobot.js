console.log('process.args', process.argv)

const qywxHookKey = process.argv[2].slice(4)
console.log('key', qywxHookKey)

//引入需要的模块
// node-schedule 为定时任务模块
// request 为请求第三方接口模块
const schedule = require( "node-schedule" );
const request = require( 'request' );

//resData对象各属性请参考官方文档
// https://work.weixin.qq.com/help?doc_id=13376
var resData = {
  "msgtype": "text",
  "text": {
    "content": `taro-xui构建成功
查看地址：https://github.com/lexmin0412/taro-xui/actions/
            `,
    "mentioned_mobile_list": [ "@all" ]
  }
};

function requestfun() {
  // url 为企业机器人的webhook
  request( {
    url: `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${qywxHookKey}`,
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify( resData )
  }, function ( error, response, body ) {
    if ( error ) {
      console.log('提示失败', error)
    } else {
      console.log( '提示成功！');
    }
  } );
}

requestfun()

// const scheduleCronstyle = () => {
//     //每分钟的第30秒定时执行一次:
//     schedule.scheduleJob('0 15 18 * * 1-5', () => {
//         requestfun();
//         // console.log('scheduleCronstyle:' + new Date());
//     });
// }

// scheduleCronstyle();
// console.log('Start successfully');