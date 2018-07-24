/**
 * 0 false ''   undefined null   在if语句中做判断，都会执行false分支
 *
 * 0 false '' 一类  ==  相等
 * 是有意义的值  只是被---作为了---"空值"或"假值"
 * 能调用 toString() constructor
 *
 * undefined null 是一类
 * 不能调用 toString() constructor
 * 区别 和数字运算时，10 + null结果为：10；10 + undefined结果为：NaN
 * 声明未赋值（没有给对象定义的属性 或 定义赋值为undefined的对象属性 与此相同特性） 和 未声明 在typeof 一样 但是在调用的时候 第二张情况未声明会报错
 */
 
var a = '',
    b = 0,
    c = false,
    d,
    f = null,
    g = undefined,
    
    h = {},
    j = [];
     
console.log(a==b, a==c, b==c); // true true true
console.log(d==f, f==g); // true true

console.log(a==d); // false

console.log(f + 10); // 10 null+10
console.log(d + 10); // NaN undefined+10
console.log(e + 10); // ReferenceError: e is not defined  未声明与未赋值的区别

console.log(a>=b, a<=c, b>=c); // true true true
console.log(a>=f, b<=f); // true true  null在计算的时候会转换为 0
console.log(0>=undefined, null<=undefined, null<=undefined); // false false false  undefined不能计算

console.log(0=={}, 0==[], 0<=[]); // false true true  [] 与 {} 不同

console.log(c.toString()); // 'false'
console.log(b.toString()); // '0'

console.log(f.toString()); // TypeError: Cannot read property 'toString' of null
console.log(f.toString()); // TypeError: Cannot read property 'toString' of undefined


