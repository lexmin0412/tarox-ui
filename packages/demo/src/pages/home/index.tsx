import React from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const Index: React.FC = () => {
  const componentsList = [
    {
      name: "按钮",
      path: "/pages/button/index"
    },
  ];

  return (
    <View className="padding-sm">

      {componentsList.map((comp) => (
        <View
          className="list-item bg-white"
          key={comp.name}
          onClick={() => Taro.navigateTo({ url: comp.path })}
        >
          <View className="list-item-name">
            <Text className="icon-prefix-circle"></Text>
            {comp.name}
          </View>
          <View className="icon-next">
            {'>'}
          </View>
        </View>
      ))}
    </View>
  );
};

export default Index;
