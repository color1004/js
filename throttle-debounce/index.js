/* 节流和去抖  throttle  debounce
debounce：把触发非常频繁的事件（比如按键）合并成一次执行。 去抖 间隔小于delay时不执行
throttle：保证每 X 毫秒恒定的执行次数，比如每200ms检查下滚动位置，并触发 CSS 动画。
requestAnimationFrame：可替代 throttle ，函数需要重新计算和渲染屏幕上的元素时，想保证动画或变化的平滑性，可以用它。（IE9 不支持）
*/

// debounce
var debounce = function(fn, delay){
 	var timer = null;
  console.log('throttle'); // 只执行一次
 	return function(){
 		var context = this, args = arguments; // arguments在监听函数时为 e
    // console.log('throttle--RETURN'); //实际执行次数
 		clearTimeout(timer);
 		timer = setTimeout(function(){
      // console.log('throttle--setTimeout'); // 节流后执行的次数
 			fn.apply(context, args);
 		}, delay);
 	};
};
// 使用
window.onresize = debounce(myFunc, 200);
function myFunc (e) {
  console.log('resize', e);
}
//throttle
var throttle = function(fn, delay) {
  var startTime;
  return function() {
    var endTime = +new Date();
    var context = this;
    var args = arguments;
    if(!startTime || endTime-startTime>=delay) {
      fn.call(context, args);
      startTime = endTime;
    }
  }
}

var throttle1 = function(fn, delay) { // 这种方案使得最后一次小于delay的结果得以执行
  var startTime;
  var timer = null;
  return function() {
    var endTime = +new Date();
    var context = this;
    var args = arguments;
    if(startTime && endTime-startTime<delay) {
      startTime = endTime;
      clearTimeout(timer);
      timer = setTimeout(function () {
        startTime = endTime; // delay之后才设置 
        fn.apply(context, args);
      }, delay);
    } else {
      fn.call(context, args);
      startTime = endTime;
    }
  }
}
var scrollBox = $('.scroll-box');
//调用throttle函数，传入相应的方法和规定的时间;
var thro = throttle(throFun,300);
//触发事件;
scrollBox.on('scroll' , thro)
function throFun(){
  console.log('success');
}


// 第二种 debounce 不是通过闭包，而是通过给function添加一个属性
function debounce(method, context) {
     clearTimeout(method.tId);
  	 var args = Array.prototype.slice.call(arguments,2); // 无法判断有没有context
     console.log('调用', context, args);
     method.tId = setTimeout(function(){ // 把定时器ID存为函数的一个属性
         method.apply(context, args);
     }, 100);
}
window.onresize = function(e){ // 参数e需要在这里
    debounce(myFunc, this, e);
}



// js高级程序设计
var throttle={
  timeoutId:null,
  performProcessing:function(){
 
  },
  process:function(){
    clearTimeout(this.timeoutId);
    var that =this;
    this.timeoutId=setTimeout(function(){
      that.performProcessing();
    },100)
  }
}
throttle.process(); // process时发生的次数，performProcessing是真正执行的次数
