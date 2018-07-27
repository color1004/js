//对象转化URL
const toUrlParam = (obj) => {
    var url = "";
    Object.keys(obj).forEach(key => {
        url += encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]) + "&";
    });
    if (url && url.length > 0) {
        url = url.substring(0, url.length - 1);
    }
    return url;
}

let count = 0;

const noop = () => {};

const jsonp = (url, options, callback) => {

    if(!options.timeout) options.timeout = 10000;  // now only timout

    const jsonpCallbackName = encodeURIComponent('jp' + (count++));

    url += url.indexOf('?') ? `&callback=${jsonpCallbackName}` : `?callback=${jsonpCallbackName}`;

    if(timeout)
    const timer = setTimeout(() => {
        console.log('jsonp--timeout--->');
        callback && callback(new Error('Timeout'));
    }, options.timeout);

    const cleanFn = () => {
        script.parentNode.removeChild(script);
        window[jsonpCallbackName] = noop;
        if (timer) clearTimeout(timer);
    };

    window[jsonpCallbackName] = (data) => {
        cleanFn();
        console.log('jsonp--getData--->', data);
        callback && callback(null, data);
    }

    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    const parent = document.body;
    parent.insertBefore(script, parent.firstChild);

    /* // script 下载完成自执行 某些情况下。。。。需要通过加载完成后才能执行
    // jsonp这个 不在这里面 写 window[jsonpCallbackName]  方法  为什么不是加载完成后才能执行？？
    if(script.readyState) { // ie监听事件
        script.onreadystatechange = () => {
            console.log('---readystate获取到数据----', script.readyState);
            if(script.readyState=='loaded' || script.readyState=='complete') {
                console.log('---readystate获取到数据----');
                script.onreadystatechange = null; // 当其中一种状态出现时，删除 readystatechange 事件句柄（保证事件不会被处理两次）
                // callback && callback();
            }
        }
    }
    else { script.onload = () => {
        console.log('---onLoad获取到数据----');
        // callback && callback()
    } } */
    
    script.onerror = () => {
        window[jsonpCallbackName] = (data) => {
            cleanFn();
            console.log('jsonp--error--->');
            callback && callback(new Error('oppps!!'));
        }
    };
}

const request = (url, oprions, fn) => {
    return new Promise((resolve, reject) => {
        jsonp(url, {
            timeout: 10,
        }, (err, res) => {
            console.log('request---->', res);
            if(err) {
                console.log('catch error---->', err);
                reject(err);
            } else {
                resolve(res);
            }
        });
    })
}

export default {
    request
}
