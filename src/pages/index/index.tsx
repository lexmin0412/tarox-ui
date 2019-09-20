import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

import Timer from '../../components/timer/timer'
import WImage from './../../components/wImage/index'
import Skeleton from './../../components/skeleton/index'
import Price from './../../components/price/index';
import NoData from './../../components/noData/index'
import Modal from './../../components/modal/index'
import BlockTitle from './../../components/blockTitle/index'
import Curtain from './../../components/curtain/curtain'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  state = {
    startTime: new Date().getTime(),
    endTime: new Date().getTime() + 20000
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  tickHandler (time) {
    console.log(time)
  }

  timeupHandler () {
    console.log('timeup')
  }

  render () {
    const { startTime, endTime } = this.state

    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Timer startTime={startTime} endTime={endTime} onTick={this.tickHandler} onTimeup={this.timeupHandler} />
        <WImage src={'https://ceshiapi.58wld.com/images/login/sdf.png'}
          type='store'
          key='storeIcon'
        />
        <Skeleton title avatar animateName='elastic'></Skeleton>
        <Price size="normal" price="21.09" color='#45aafa'></Price>
        <NoData />
        <Modal />
        <BlockTitle title='这是块标题' />
        <Curtain visible={true} >
          <View className="curtain-content">
            这是内容
          </View>
        </Curtain>
      </View>
    )
  }
}

