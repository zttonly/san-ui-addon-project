
# {{ name }}

> 这是一个 San ui 的addoon插件项目

## Build Setup

``` bash
# install dependencies
npm install
# or
yarn


# serve with hot reload at localhost:9003
npm start
# or
yarn start

# build for production with minification
npm run build
# or
yarn build
```
更多命令查看`package.json`的`scripts`字段。


### vw & rem 切图
原理详见：https://aotu.io/notes/2017/04/28/2017-4-28-CSS-viewport-units/index.html

项目实现通过 postcss+pr2rem 插件，默认使用的是宽度为`1242px`的设计稿为基准（在`postcss.config.js`中修改，统一使用html font-size=`5vw`）。

css 书写不再使用`bsass`的`rem(*)`的方式，而是使用`pr`：

```css
// input
// pr 是真实设计稿测量出来的宽度
h2 {
    margin: 1242pr 1242pr 40px 50px;
    font-size: 32px;
}

// output
h2 {
    margin: 20rem 20rem 40px 50px;
    font-size: 32px;
}
```
## 目录说明
```

├── src
│   ├── components     # 组件定义
│   │   ├── mydemo.js
│   │   └── mydemo.less
│   ├── locales.json   # 语言扩展
│   └── index.js       # 注册
├── node_modules
├── ui.js              # san ui addon的说明
├── dist
├── README.md
├── package.json
├── pages.template.ejs
├── postcss.config.js
└── san.config.js
```

### dotFile 配置

* eslintrc：eslint
* browserlistrc：browserlist配置
* babelrc：babel 配置
* editorconfig：不需要修改，设置了 tab 4个空格等，常见规范类的配置
* npmrc：不需要修改，注册@baidu registry
* prettierrc：根据需要修改，格式化插件
* gitignore：git 忽略
* fecsrc：fecs 格式化配置
