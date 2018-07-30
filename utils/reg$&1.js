/*
$& 使用g时  每一次匹配到的串
$` 当前匹配的子串左边的内容
$' 当前匹配的子串右边的内容
$1 $2 括号中匹配到的字串
*/

var str3 = '12345678'
var reg3=/\d{1,3}(?=(\d{3})+$)/g;
console.log(str3.match(reg3)); // ['12','345']

/*
(?=(\d{3})+$)   且 匹配后面跟着(\d{3})+$) 且 不记住该串的 字符串
g 继续循环匹配
*/

function styleHyphenFormat1(propertyName) {
  function upperToHyphenLower(match, p1, p2, offset, string) {  // 即 $& $1 $2 匹配到的子字符串在原字符串中的偏移量 被匹配的原字符串
  console.log(match, p1, p2, offset, string); // rTo r To  5 'borderTopLeft'  pLe p Le 8 'borderTopLeft'
    return p1+ '-' + p2.toLowerCase();
  }
  return propertyName.replace(/([a-z])([A-Z][a-z])/g, upperToHyphenLower);
}
styleHyphenFormat1('borderTopLeft') // 'border-top-left'

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match) {  // 即 $& $1 $2 被匹配的原字符串
  console.log(match);
    return '-' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
styleHyphenFormat('borderTopLeft') // 'boder-top-left'
