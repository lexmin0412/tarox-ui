
import './index.scss';
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

/**
 * 组件需要的Props定义
 * @param noDataIcon 缺省图片
 * @param noDataText 缺省文字
 */
interface IProps {
	/**
	 * noDataIcon 缺省图片
	 */
  noDataIcon?: any;
	/**
	 * noDataIcon 缺省文字
	 */
  noDataText?: string;
}

/**
 * price display组件
 */
class Modal extends Component<IProps, {}> {

  state = {
    visible: true
  }

  closeShipTypeDifferModal() {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      this.state.visible &&
      <View className="ship-type-modal">
        <View className="ship-type-differ-modal-inner">
          <View className="text">
            多个商品存在物流配送差异，无法下单，建议对商品逐个购买。
                    </View>
          <View className="button"
            onClick={this.closeShipTypeDifferModal.bind(this)}
          >
            知道了
                    </View>
        </View>
      </View>
    )
  }
}

export default Modal
