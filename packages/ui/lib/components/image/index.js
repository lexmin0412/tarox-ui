import Taro from '@tarojs/taro';
import React, { useState, } from 'react';
import { Image } from '@tarojs/components';
import classnames from 'classnames';
export const XImage = ({ src, errImg, className, mode = 'aspectFit', previewUrls, onClick }) => {
    const prefixCls = 'x-image';
    const componentClassNames = classnames(className, prefixCls);
    const [imgUrl, setImgUrl] = useState(src);
    const handleError = (event) => {
        console.log('handleError', event);
        setImgUrl(errImg || 'https://img20.360buyimg.com/ling/jfs/t1/20876/36/12835/3043/5c9c2929Ed18cfb11/15b1c03ec830ab8e.png');
    };
    // 剩余属性
    const restProps = {
        mode
    };
    /**
     * 点击事件
     */
    const handleClick = (event) => {
        if (previewUrls) {
            Taro.previewImage({
                current: previewUrls[0],
                urls: previewUrls
            });
        }
        else {
            void 0;
        }
        onClick && onClick(event);
    };
    return (React.createElement(Image, Object.assign({ src: imgUrl, onError: handleError }, restProps, { onClick: handleClick, className: componentClassNames })));
};
//# sourceMappingURL=index.js.map