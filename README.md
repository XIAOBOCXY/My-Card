# My-Card
A work I participated in the youth camp

当青训营遇上码上掘金

## 一、选择的主题

**我的名片**

名片是向人介绍自我的重要工具，作为一名程序员用代码做自我介绍是一件非常酷炫的事情。请大家围绕“我的名片”这个主题进行代码创作。

## 二、设计思路

**鼠标未hover的情况下**  
显示的是头像，card大小为头像大小

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4af1201695f4685b81605bc680fe4cd~tplv-k3u1fbpfcp-watermark.image?)  
**当鼠标hover后**  
card向右向下拓展  
头像位于左上角  
右侧显示姓名、个人数据和按钮  
下方显示个人信息，依次为简介、地址、邮箱  
底部的三个按钮用于切换主题色  

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/515e74d7dc9b4a8aa519298cec1b7448~tplv-k3u1fbpfcp-watermark.image?)

**当鼠标hover在头像时**  
头像会进行3d翻转  

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/766d4e7c6d1d41639fd102d0c2b2237d~tplv-k3u1fbpfcp-watermark.image?)

**点击底部按钮切换主题色时**  
从左到右依次为日间模式（默认）、夜间模式、阅读模式  
日间模式：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1e0042ade15a40c3809a7fb60e8e5cea~tplv-k3u1fbpfcp-watermark.image?)
夜间模式：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96a3eee937584241993478ea4e7261ea~tplv-k3u1fbpfcp-watermark.image?)
阅读模式：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fb67250494b450cbc5cd822e5c06d87~tplv-k3u1fbpfcp-watermark.image?)

## 三、实现方法
### card的展开
1.`.card`的`width`和`height`设置为`200px`,  
2.`.card:hover` 的`width`和`height`分别设置为`520px`和`340px`  
3.在`.card`中添加`transition:0.5s ease-in-out;`动画效果  
4.`.card`设置`overflow: hidden;`将超出的部分设置为不可见

### 头像翻转
1.在`.card`中添加`perspective: 1000px;`指定了观察者与 `z=0` 平面的距离,使具有三维位置变换的元素产生透视效果  
2.正面和背面都设置为`absolute`，脱离文档流`position: absolute; `   
3.隐藏背面`backface-visibility: hidden;`  
4.添加动画效果`transition:  0.5s ease-in-out; `  
5.设置正背面的角度  
```css
.imgbox{
  transform:  rotateY(0deg);
}
.imgboxblack{
  transform:  rotateY(-180deg);
}
```
6.设置旋转角度  
```css
.lefttop:hover .imgbox{
  transform:  rotateY(180deg);
}
.lefttop:hover .imgboxblack{
  transform: rotateY(0deg);
}
```

### 主题切换
**html部分**设置class为theme,给每个button添加属性mode
```html
<div class="theme">
    <button mode="light">☀️</button>
    <button mode="dark">🌙</button>
    <button mode="read">📖</button>
  </div>
```
**css部分**将每个需要切换的属性值改为如下  
用var()函数可以代替元素中任何属性中的值的任何部分
```css
background-image: var(--background-image);
```
**js部分**配置样式和函数实现
```js
const modeOptions = {
            light: {
              '--background-image':'linear-gradient(160deg, #DBCCB1 20%,#94AA67 80%)',
            },
            dark: {
              '--background-image':'linear-gradient(160deg, #C99E8C 20%,#465E65 80%)',
            },
            read: {
              '--background-image':'linear-gradient(160deg, #C8C7C5 20%,#98A594 80%)',
            }
        }
        
// 主题设置
function setMode(mode) {
  const rootElement = document.querySelector(':root');/*:root是一个伪类，表示文档根元素，用var()函数可以代替元素中任何属性中的值的任何部分*/
  const options = modeOptions[mode];/*light、night、read三种options之一*/
  /*遍历当前mode中的变量*/ 
  for (const k in options) {
    rootElement.style.setProperty(k, options[k]);/*改变属性值*/
  }
}
// 初始设置为light
setMode("light");
/*点击按钮事件 */
document.querySelector(".theme").addEventListener("click", (e) => {
  setMode(e.target.getAttribute("mode"));
})   
```
## 最终代码
[jcode](https://code.juejin.cn/pen/7195234082513485883)



