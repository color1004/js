function getCookie(name) {
	var cookie = document.cookie;
	var reg = new Reg(`(^| )${name}=([^;])*(;|$)`);
	var val = cookie.match(reg) ? cookie.match(reg)[2] : '';
	return unescape(val);
}

function setCookie(name, value, hour, path) {
	var expires = "; max-age=" + (hour ? new Date().getTime() * hour*60*60*1000 : "Session"); // expires
	var path = "; path=" + (path || '/');
	document.cookie = name + "=" + escape(value) + expires + path;
}
