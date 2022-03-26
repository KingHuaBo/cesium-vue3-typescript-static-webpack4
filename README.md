# cesium-vue3-typescript-static-webpack4

# 简介
本项目是vue3的vue-cli构建的框架，使用的typescript开发，构建了一个加载cesium地球的一个简单实例，采用在public/index.html页面通过标签方式引入Cesium和它的样式。这种方式是比较方便做离线开发Cesium应用。
# 避坑指南
1. 需要配置webpack的alias（别名）

    配置文件位置是vue.config.js
    ```
    alias: {
        "cesium": path.resolve(__dirname, "public/Cesium/Cesium.js")// 告诉webpack 在哪里去解析cesium,需要安装path包，本项目已经安装
      }
    ``` 
2. vue-cli和webpack版本问题：
    
    本项目采用vue-cli 4.5.17构建项目，内置webpack 4.46.0版本，如果采用vue-cli 5.0.3，内置webpack 5.70.0的版本，配置更复杂，详细请跳转到[cesium-vue3-typescript-static-webpack5](https://github.com/KingHuaBo/cesium-vue3-typescript-static-webpack5)在html中引用cesium后，在App.vue中用如下代码导入Cesium。
    ```
    import * as Cesium from "cesium";
    ```
   


## 环境介绍
1. node版本 v14.18.1
2. npm版本 6.14.15
3. vue-cli 4.5.17
4. webpack 4.46.0
5. vue 3.2.13
6. cesium 1.91.0
7. 开发工具 vscode

## 还原安装依赖包
```
npm install
```

### 启动项目
```
npm run serve
```

### 发布打包项目
```
npm run build
```

### 能力有限，如有帮助，欢迎赏Issues or Star
