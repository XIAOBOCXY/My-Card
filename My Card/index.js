const modeOptions = {
    light: {
      '--background-image':'linear-gradient(160deg, #DBCCB1 20%,#94AA67 80%)',
        '--background-color': '#fff',
        '--box-shadow': '0 5px 10px  rgba(23, 4, 4, 0.154)',
        '--imgback-color': '#fff',
        '--imgbox-text-color': '#3399ff',
        '--imgbox-x-color': '#854bd7',
        '--id-color':'black',
        '--num-background-color': 'rgb(217, 214, 214)',
        '--num-text-color': '#0A0A0A',
        '--num-color': ' #3399ff',
        '--follow-background-color': '#3399ff',
        '--follow-text-color': '#fff',
        '--more-background-color': 'rgb(201, 199, 199)',
        '--more-text-color': '#fff',
        '--information-background-color': 'rgba(217, 214, 214, 0.5)',
        '--h3-color': 'rgb(102, 105, 111)',
        '--text-color': 'black',
        '--button-color': '#fff',
    },
    dark: {
      '--background-image':'linear-gradient(160deg, #C99E8C 20%,#465E65 80%)',
        '--background-color': '#070D2D',
        '--box-shadow': '0 5px 10px  rgba(209, 192, 192, 0.37)',
        '--imgback-color': '#161E29',
        '--imgbox-text-color': '#3AC9FA',
        '--imgbox-x-color': '#cc99ff',
        '--id-color':'#F7F7F7',
        '--num-background-color': '#161E29',
        '--num-text-color': '#FFE2C7',
        '--num-color': '#F7F7F7',
        '--follow-background-color': '#DC8E47',
        '--follow-text-color': '#F7F7F7',
        '--more-background-color': '#546EE5 ',
        '--more-text-color': '#F7F7F7',
        '--information-background-color': 'rgba(106, 192, 255, 0.5)',
        '--h3-color': '#F7F7F7',
        '--text-color': '#FFE2C7',
        '--button-color': '#070D2D',
    },
    read: {
      '--background-image':'linear-gradient(160deg, #C8C7C5 20%,#98A594 80%)',
        '--background-color': '#415062',
        '--box-shadow': '0 5px 10px  rgba(23, 4, 4, 0.154)',
        '--imgback-color': '#655B50',
        '--imgbox-text-color': '#fff6e6',
        '--imgbox-x-color': '#F0FFF0',
        '--id-color':'#fff6e6',
        '--num-background-color': 'rgb(217, 214, 214)',
        '--num-text-color': '#0A0A0A',
        '--num-color': ' #000003',
        '--follow-background-color': '#FAF9DE',
        '--follow-text-color': '#000003',
        '--more-background-color': '#BEBEBE',
        '--more-text-color': '#FFF',
        '--information-background-color': 'rgba(217, 214, 214, 0.5)',
        '--h3-color': '#fff6e6',
        '--text-color': '#EEE5DE',
        '--button-color': '#415062',
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
/*more按钮跳转*/
function jumpmore(){
    window.location.href="https://juejin.cn/user/400676851550654";
}

