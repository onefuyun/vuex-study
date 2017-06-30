### sass的添加

 >npm install --save-dev 安装的东西会直接显示在packag.json配置文件中

 >使用sass：npm install node-sass --save-dev

 >npm install --save-dev sass-loader style-loader css-loader

 > 在build中的webpack.base.conf.js中会有配置生成的代码

 > 在组件中的style标签上加上lang="scss"就可以使用sass了，rel="stylesheet/scss" 这句代码不加也可以，目前没发现什么问题

###  我遇到的坑
 
### 1.我把路由配置全删了，自己有配置了一遍，页面加载的时候，首页加载不出来
>首页的路径是'/' 其他页面的路径在路由中配置的时候要加'/' 这个/不能忘，否则加载不出来
>历史遗留问题啦

#1px的问题   带小数的像素在不同的浏览器下效果不一样
#淘宝的弹性布局lib-flexible不兼容响应式布局，1px的线条用伪元素和transform可以解决ios的问题

# vuex-study

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
