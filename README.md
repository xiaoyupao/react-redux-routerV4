### 一个简单的 异步redux 项目

### 项目基于的脚手架
* create-react-app

### 项目技术栈
* react + react-redux + redux-thunk + react-router V4

### 安装的npm包 
* yarn add antd
* npm install babel-plugin-import --save-dev
* npm install query-string --save-dev 
* npm install --save react-router-redux@next  // router4.0 需要 react-router-redux 5.x

### 运行项目
* 在项目目录下
* npm i 或 yarn
* npm run start

### 资料
* react-router-redux  store 的定义可以参考下面的网址
> https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux
* query-string  // router 4.0升级没有query了，用该模块把search转成query
> https://www.cnblogs.com/legu/p/7071405.html
* router 4.0的坑，push后，url变了但没有触发action router/LOCATION_CHANGE, 本demo手动更新的
> https://segmentfault.com/a/1190000010544823
