function Event() {
    this.entObj = {};
    this.oneObj = {};
}
Event.prototype.on = function (type, fn) {
    if(!this.entObj[type]) {
        this.entObj[type] = [];
    }
    this.entObj[type].push(fn);
}
Event.prototype.once = function (type, fn) {
    if(!this.oneObj[type]) {
        this.oneObj[type] = [];
    }
    this.oneObj[type].push(fn);
}
Event.prototype.off = function (type, fn) {
    if(this.entObj[type]) {
        if(!fn) {
            this.entObj[type] = []
        } else {
            var index = this.entObj[type].indexOf(fn);
            if(index != -1) {
                this.entObj[type].splice(index);
            }
        }
    }
    if(this.oneObj[type]) {
        if(!fn) {
            this.entObj[type] = []
        } else {
            var index = this.oneObj[type].indexOf(fn);
            if(index != -1) {
                this.oneObj[type].splice(index);
            }
        }
    }
}
Event.prototype.trigger = function (type) {
    var args = Array.prototype.slice.call(arguments, 1);
    if(this.entObj[type]) {
        for(let i=0; i<this.entObj[type].length; i++) {
            this.entObj[type][i].apply(null, args);
        }
    }
    if(this.oneObj[type]) {
        for(let i=0; i<this.oneObj[type].length; i++) {
            this.oneObj[type][i].apply(null, args);
        }
        this.oneObj[type] = [];
    }
}

var env = new Event();
var func1 = (ll,ss) => {console.log(ll,ss)};
env.on('kk', func1); //  func1直接写在on里面是五福off移除的
env.trigger('kk', 'pp',99);
env.trigger('kk', 'ee');
env.off('kk',func1);
env.trigger('kk', 'oo');
env.once('hh', (ll) => {console.log(ll+1)});
env.trigger('hh', 'qq');
env.trigger('hh', 'rr');
