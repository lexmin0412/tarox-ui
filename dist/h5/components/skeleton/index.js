import Nerv from "nervjs";
import { View } from '@tarojs/components';
import Taro from "@tarojs/taro-h5";
import classnames from 'classnames';
import './index.scss';
const DEFAULT_ROW_WIDTH = '100%';
export default class Skeleton extends Taro.Component {
  render() {
    const props = this.props;

    if (!props.loading) {
      return <View>{props.children}</View>;
    }
    const getRowWidth = index => {
      if (props.rowProps) {
        if (Array.isArray(props.rowProps)) {
          return props.rowProps[index].width;
        }
        return props.rowProps.width;
      }
      if (props.rowWidth === DEFAULT_ROW_WIDTH) {
        return DEFAULT_ROW_WIDTH;
      }
      if (Array.isArray(props.rowWidth)) {
        return props.rowWidth[index];
      }
      return props.rowWidth;
    };
    const getRowHeight = index => {
      if (props.rowProps) {
        if (Array.isArray(props.rowProps)) {
          return props.rowProps[index].height;
        }
        return props.rowProps.height;
      }
      if (Array.isArray(props.rowHeight)) {
        return props.rowHeight[index];
      }
      return props.rowHeight;
    };
    const addUnit = value => {
      return typeof value === 'number' ? Taro.pxTransform(value) : value;
    };
    const renderAvatar = () => {
      if (props.avatar) {
        const avatarClass = classnames('skeleton-avatar', {
          'skeleton-avatar-round': props.avatarShape === 'round'
        });
        return <View className={avatarClass} style={` width: ${addUnit(props.avatarSize)};
        height: ${addUnit(props.avatarSize)} `} />;
      }
      return null;
    };
    const renderTitle = () => {
      if (props.title) {
        return <View className="skeleton-title" style={`width: ${addUnit(props.titleWidth)};`}></View>;
      }
      return null;
    };
    const renderAction = () => {
      if (props.action) {
        return <View className="skeleton-action" />;
      }
      return null;
    };
    const renderRows = () => {
      if (props.row) {
        const rowArray = Array.apply(null, Array(props.row)).map((item, index) => index);
        const Rows = rowArray.map((item, index) => {
          return <View key={item} className="skeleton-row" style={`width: ${addUnit(getRowWidth(index))};height: ${addUnit(getRowHeight(index))}`} />;
        });
        return <View className="skeleton-rows">{Rows}</View>;
      }
      return null;
    };
    const rootClass = classnames(['skeleton', {
      'skeleton-animate-blink': props.animate && props.animateName === 'blink',
      'skeleton-animate-elastic': props.animate && props.animateName === 'elastic'
    }]);
    return <View className={rootClass}>
      {renderAvatar()}
      <View className="skeleton-content">
        {renderTitle()}
        {renderRows()}
      </View>
      {renderAction()}
    </View>;
  }

}
Skeleton.defaultProps = {
  avatarSize: 90,
  row: 0,
  loading: true,
  animate: true,
  rowWidth: '100%',
  rowHeight: 24,
  titleWidth: '40%',
  avatarShape: 'round',
  animateName: 'blink'
};