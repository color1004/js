function myBind(context) {
    var self = this;
    var args1 = Array.prototype.slice.call(arguments, 1);
    var fn = function() {
        var args2 = Array.prototype.slice.call(arguments);
        var contex = this instanceof fn ? this : context; // 构造函数的this不是传入的context而是返回的新创建的对象
        return self.apply(context, args1.concat(args2));
    }
    return fn;
}
this.a= 1;
var obj = {a:3};
function te(b,c) {
    console.log(this.a+b+c);
}
Function.prototype.myBind = myBind;
te.bind(obj, 3)(4)
te.myBind(obj, 3)(4)
te(1,2)


// call apply 通过 eval执行 基于作为对象的方法执行
var myCall = function (context) {
    var context = context || window;
    var args = [];
    for(var i=1; i<arguments.length; i++) {
        args.push('arguments['+i+']');
    }
    context.fn=this;
    // var res = context.fn();
    var res = eval('context.fn('+args+')'); // args为 ["arguments[1]", "arguments[2]", "arguments[3]"]
    delete context.fn;
    return res;
}

var myApply = function (context, arr) {
    var context = context || window;
    var result;
    context.fn=this;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }
    delete context.fn;
    return result;
}
function test(a) {
    this.a = a;
}
new test(1);
function myNew() {
    var obj = {};
    console.log(arguments);
    func = [].shift.call(arguments) // [].splice.call(arguments, 0, 1)
    console.log(arguments);
    obj.__proto__ = test.prototype;
    var ret = func.apply(obj, arguments);
    return typeof ret == 'object' ? ret : obj;
}
myNew(test, 2);
