import React from "react";
import { View } from "@tarojs/components";
import { XButton } from "taro-x-ui";

const Button: React.FC = () => {
  return (
    <View className="padding-sm">
      <View className="padding flex flex-wrap justify-between align-center bg-white">
        <XButton color="red">默认</XButton>
      </View>
    </View>
  );
};

export default Button;
