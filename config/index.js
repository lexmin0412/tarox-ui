const path = require("path");

const config = {
  projectName: "tarox-ui",
  date: "2020-3-10",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  defineConstants: {},
  // 解析alias路径
  alias: {
    "~/": path.resolve(__dirname, "..", "src/"),
    "~/assets": path.resolve(__dirname, "..", "src/assets"),
    "~/components": path.resolve(__dirname, "..", "src/components"),
    "~/config": path.resolve(__dirname, "..", "src/config"),
    "~/constants": path.resolve(__dirname, "..", "src/constants"),
    "~/enums": path.resolve(__dirname, "..", "src/enums"),
    "~/interceptors": path.resolve(__dirname, "..", "src/interceptors"),
    "~/interfaces": path.resolve(__dirname, "..", "src/interfaces"),
    "~/models": path.resolve(__dirname, "..", "src/models"),
    "~/pages": path.resolve(__dirname, "..", "src/pages"),
    "~/services": path.resolve(__dirname, "..", "src/services"),
    "~/store": path.resolve(__dirname, "..", "src/store"),
    "~/styles": path.resolve(__dirname, "..", "src/styles"),
    "~/utils": path.resolve(__dirname, "..", "src/utils"),
  },
  uglify: {
    enable: true,
    config: {
      nameCache: null, // or specify a name cache object
      toplevel: false,
      ie8: false,
      warnings: false,
    },
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: ["@tarojs/plugin-sass", "@tarojs/plugin-uglify"],
  babel: {
    sourceMap: true,
    presets: [
      [
        "env",
        {
          modules: false,
        },
      ],
    ],
    plugins: [
      "transform-decorators-legacy",
      "transform-class-properties",
      "transform-object-rest-spread",
      [
        "transform-runtime",
        {
          // async/await支持 替代taro1.0的tarojs/await
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: "babel-runtime",
        },
      ],
    ],
  },
  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: ["last 3 versions", "Android >= 4.1", "ios >= 8"],
        },
      },
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 10240, // 本地图片转base64上限（单位byte）
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/tarox-ui",
    staticDirectory: "static",
    router: {
      mode: "browser", // 或者是 'hash'
      basename: "/tarox-ui",
    },
    // js文件名添加hash
    output: {
      filename: "js/[name].[hash:8].js",
      chunkFilename: "js/[name].[chunkhash:8].js",
    },
    // css文件名添加hash
    miniCssExtractPluginOption: {
      filename: "css/[name].[hash:8].css",
      chunkFilename: "css/[id].[chunkhash:8].css",
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: ["last 3 versions", "Android >= 4.1", "ios >= 8"],
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
};

module.exports = function (merge) {
  let exportConfig = {};
  if (process.env.NODE_ENV === "pro") {
    exportConfig = merge({}, config, require("./pro"));
  } else if (process.env.NODE_ENV === "sit") {
    exportConfig = merge({}, config, require("./sit"));
  } else if (process.env.NODE_ENV === "uat") {
    exportConfig = merge({}, config, require("./uat"));
  } else {
    exportConfig = merge({}, config, require("./dev"));
  }
  return exportConfig;
};
