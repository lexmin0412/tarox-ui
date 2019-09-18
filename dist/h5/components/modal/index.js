import Nerv from "nervjs";
import './index.scss';
import { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
/**
 * price display组件
 */
class Modal extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: true
    };
  }
  closeShipTypeDifferModal() {
    this.setState({
      visible: false
    });
  }
  render() {
    return this.state.visible && <View className="ship-type-modal">
        <View className="ship-type-differ-modal-inner">
          <View className="text">
            多个商品存在物流配送差异，无法下单，建议对商品逐个购买。
                    </View>
          <View className="button" onClick={this.closeShipTypeDifferModal.bind(this)}>
            知道了
                    </View>
        </View>
      </View>;
  }
}
export default Modal;