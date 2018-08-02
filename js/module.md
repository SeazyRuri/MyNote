# Javascript模块化

Javascript模块化规范有三种：**CommonJS**,**AMD**,**CMD**,**ES6(ES2015)**。

## CommonJS

Node.JS所用的模块化规范就是CommonJS。**同步**

~~~ javascript
const Math = require("math");
Math.add(2,3);
~~~

有两种模块定义模式：

第一种模块定义如下：

~~~ javascript
/*a.js*/
var m = /*Your module Object or Function*/
module.exports = m;
~~~

模块导入如下:

~~~ javascript
/*b.js*/
var m = require("/path/to/a.js");
// use m;
~~~

第二种模块定义如下：

~~~ javascript
/*a.js*/
exports.funA = function(){
    //define funA
}
exports.configA = function(){
    //define configA
}
~~~

模块导入如下:

~~~ javascript
/*b.js*/
var m = require("/path/to/a.js");
m.funcA();
const config = m.configA;
~~~

### node.js 查询模块顺序（第一次加载）

* 载入**内置**模块（A Core Module）
* 载入**文件**模块（A File Module）
* 载入**文件目录**模块（A Folder Module）
* 载入**node_modules**里的模块
* 自动缓存已载入模块

## AMD

AMD = **Asynchronous Modules Definition**,以**异步方式**加载模块。

AMD推崇**依赖前置**，在定义模块的时候就要声明其依赖的模块。

**Require.js**就是实现了AMD规范的

~~~ javascript
require(["math"],function(Math){
    Math.add(2,3);
})
~~~



## CMD

**Sea.js**用的就是CMD规范

CMD推崇**就近依赖**，只有在用到某个模块的时候再去require。