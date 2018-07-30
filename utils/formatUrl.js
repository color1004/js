var qurey = Object.entries({a:1,b:2}).map( ([key, val]) => encodeURIComponent(key)+'='+encodeURIComponent(val)).join('&');

// "a=1&b=2"
