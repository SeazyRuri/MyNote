- [了解网站性能优化](#网站性能优化)
  - [重绘(repaint)和回流(reflow)](#重绘(repaint)和回流(reflow))
- [函数声明提升](#函数声明提升)
- [可继承样式](#可继承样式)
- [标准W3C标准盒子和IE盒子](#标准W3C标准盒子和IE盒子)
  - [box-sizing 属性](#box-sizing 属性)
- [Egg.js](#Egg.js)
- [箭头函数](#箭头函数)
- [事件](#事件)
- [原型继承链](#原型继承链)

# 原型继承链

摘抄于：https://github.com/KieSun/Blog/issues/2

- Object 是所有对象的爸爸，所有的对象都可以通过`__proto__`来找到它
- Function 是所有函数的爸爸，所有的函数都可以通过`__proto__`来找到它
- Function.prototype和Object.prototype是特殊的对象，由浏览器引擎来创建
- 除了以上两个特殊对象，其他对象都是通过构造器 `new` 出来的
- 所有函数都有prototype对象，除了Function.prototype.bind()方法创建的函数
- 所有对象都有`__proto__`属性，用于指向创建它的函数的原型，`__proto__` 将对象和原型连接起来组成了原型链

# 事件

事件是指在编程时，系统内发生了某些动作或者事情，系统通过事件来通知你是否做出回应。

## 注册事件的方式

- 通过Javascript对象的方式注册，比如说`btn.onclick=function(){}`;
- 通过html标签方式注册，`<button onclick='clickBtn()'>点击触发事件</button>`;
- 通过``addEventListener()``和`removeEventListener()`来注册和移除事件
- IE9之前可以用``attachEvent()``和`detachEvent()`来注册和移除事件

``addEventListener()``和``attachEvent()``的区别：

- `attachEvent()`不支持事件捕获，`addEventListener()`支持
- `attachEvent()`绑定事件需要在事件名上加`'on'`，比如说`btn.attachEvent("onclick",function(){})`；而`addEventListener()`直接使用事件名来注册事件
- `addEventListener()`使用相同的参数对事件进行多次注册，只会触发一次结果；而`attachEvent()`允许使用相同的参数对事件进行多次注册

## 事件触发的流程

事件触发的流程分三个阶段：

- 事件捕获阶段，事件从`document`开始向触发事件的元素传播，遇到注册的捕获事件会触发监听器。
- 传播到触发事件的元素触发注册的事件
- 事件冒泡阶段，事件从触发事件的元素向`document`传播，遇到注册的冒泡事件会触发监听器

## 事件代理（事件委托）

事件代理是指利用事件冒泡，通过在父元素上注册事件来处理子元素上的触发事件。

```javascript
/**代码出处：https://yuchengkai.cn/docs/zh/frontend/browser.html#%E4%BA%8B%E4%BB%B6%E8%A7%A6%E5%8F%91%E4%B8%89%E9%98%B6%E6%AE%B5 **/
<ul id="ul">
	<li>1</li>
    <li>2</li>
	<li>3</li>
	<li>4</li>
	<li>5</li>
</ul>
<script>
	let ul = document.querySelector('##ul')
	ul.addEventListener('click', (event) => {
		console.log(event.target);
	})
</script>
```

在上面的例子中，点击`li`节点会触发`ul`上的事件。

优点：

- 减少内存
- 无需给动态生成的节点注册事件

缺点：

- 对于没有冒泡的事件无法使用：`focus`和`blur`,
- 若子节点也包含元素，事件发生的元素需要判断是否属于子节点的

根据以上的优缺点的比较，事件委托的合适的范围应该是：

- 事件类型最好是`click`，`mousedown`，`mouseup`，`keydown`，`keyup`，`keypress`。`mouseover`和`mouseout`不适合使用事件委托，需要计算位置。
- 父元素下有许多子元素、子元素需要注册相同的事件
- 父元素的子元素会动态地增加或减少、子元素需要注册相同的事件

# 箭头函数

- 函数内的this是指向函数定义时的对象，不是调用时的对象。
- 函数内不能使用arguments来获取参数列表，可以通过rest来获取参数
- 不可以当作构造函数，不能使用new
- 不能使用yield

# Egg.js

## 与Express.js的不同之处

### 使用之前的感受

只看文档下来，与Express不同的最大感受

- 优雅，通过配置加载插件。
- 可以完全使用`async/await`处理回调，使得代码更易观看；虽然Epress.js本身也可以用`async/await`处理回调，减少回调带来的麻烦，但是架构本身的原因，无法根本上完全使用`async/await`。
- 基于koa，在中间件处理上与express有所不同。
- 默认的session是加密之后存在用户的cookie上的，而express对应的插件express-session默认是将session储存在服务器内存当中，将对应的sid存在cookie中。
- 开发方便，会对代码变更，自动重启应用
- 本身框架支持单元测试。
- 大量使用es6的类。



# 标准W3C标准盒子和IE盒子

标准W3C标准盒子：真正盒子的宽度为：**margin-left+border-left+padding-left+width+padding-right+border-right+margin-right**;

IE盒子的真正宽度为：**margin-left+width+margin-right**;

所以说，标准W3C标准盒子的**width**表示**盒子中内容的宽度**。

而IE盒子的**width=border-left+padding-left+盒子内容的宽度+padding-right+border-right；**实质上盒子的内容的宽度受**width、border和padding**的影响；

可以使用`<!DOCTYPE html>`来告诉所有的浏览器采用标准W3C标准盒子模型。

## box-sizing 属性

用于改变元素的CSS盒子模型。

### 值

`content-box`:默认值，标准盒子模型；

`border-box`:IE盒子模型；

`inherit,initial,unset`

# 可继承样式



除了一下的是可继承的样式，其余都是不可继承的。（可继承应该是指自动继承）

- 所有元素都可以继承的样式：``visibility``和``cursor``；
- 内联元素可以继承的样式：``letter-spacing``,``word-spacing``,``white-space``,``line-height``,``color``,``font``,``font-size``,``font-style``,``font-variant``,``font-weight``,``font-family``,``text-decoration``,``text-transform``,``direction``；
- 块元素可以继承的样式:``text-indent``和``text-align``；
- 列表元素可以继承的样式：``list-style``,``list-style-type``,``list-style-position``,`list-style-image`；
- 表格元素可以继承的样式：``border-collapse``。

# 函数声明提升

函数的定义有两种形式：函数声明和函数表达式，两者都会进行提升，但是两者提升是有区别的：函数声明的提示就是**函数提升**，而函数表达式的提升是属于**变量提升**。函数提升会在变量提升之前，而且函数提升有可能会被变量提升所覆盖；

函数声明方式：

```javascript
function funcname(args){
    // funcname
}
```

函数表达式方式：

```javascript
var funcname = function(args){
    //funcname
}
/**相当于**/
var funcname ;
/**code**/
funcname = function(args){
    //funcname
}
//此时的func只是函数标识符，只能在函数内使用；
var funcname1 = function func(args){
    //funcname1
}
/**相当于**/
var funcname1 ;
/**code**/
funcname1 = function func(args){
    //funcname1
}
```

## 函数声明会被覆盖的情况

```javascript
/****情况1****/
function func(){
    console.log("function func");
}
var func=0;
func();//Uncaught TypeError: func is not a function
```

以上这种情况，代码等同是

```javascript
function func(){
    console.log("function func");
}
var func;
func = 0;
func();//Uncaught TypeError: func is not a function
```

```javascript
/****情况2****/
func();//function func
var func;
function func(){
    console.log("function func");
}
func();//function func
console.log(func);//[Function: func]
```

```javascript
/****情况3****/
func();//function func
var func = 0;
function func(){
    console.log("function func");
}
console.log(func);//0
```



# 网站性能优化



## 重绘(repaint)和回流(reflow)

**重绘**：当节点只需要改变外观而***不改变布局***的，比如修改节点的``background-color`` 属性。

**回流**：当节点的属性改变会***影响页面的布局***的，比如``display：none``。

回流的时候，浏览器会将渲染树受到影响的节点失效，重新修改渲染树上的相关节点，再让浏览器重新绘制这些节点。而重绘的时候，浏览器只需重新绘制所修改的节点到屏幕中。所以**回流必定发生重绘，重绘未必会回流**。

减少重绘和回流：

- 如果需要动态改变多个样式，则应使用``elem.style.cssText``，注意不要覆盖原来的内联style；
- 如果需要频繁操作，则应将涉及到的节点缓存起来，进行离线处理，处理完之后在更新页面：
  - 使用```document`.create`document`Fragment()``生成一个`document`Fragment节点，用于做离线处理的容器。当需要向节点添加大量子节点时使用，将只引起一次回流和一次重绘。
  - 使用``display:none``将节点脱离文档，修改完节点后，再让节点显示出来；当节点需要改变大量属性时适合使用，将只引起两次回流和两次重绘；
  - 使用``cloneNode``和``replaceNode``，需要谨慎使用，cloneNode会使得动态绑定的事件丢失。
- 如果需要频繁操作，也可以将节点的属性值缓存起来，处理完，再向节点统一修改属性值。
- 减少使用动画流或者减少动画的速度。
- 可以的话：
  - 使用``translate：transform``代替``top``属性；
  - 使用``visibility``代替``display:none``来使节点消失；
  - 不要使用``table``；
  - 将频繁的动画变成一个``图层``