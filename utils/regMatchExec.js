// exect match 在有g时区别
// exec仍然是  一次匹配一个结果，重复执行 往后匹配  每次匹配都返回子匹配项等信息
// match 一次返回所有匹配结果 因此就 没有了子匹配项的信息
var str = 'version2.1 version2.0';
var reg = /(\w+)(\d)\.(\d)/;
var reg1 = /(\w+)(\d)\.(\d)/g;

console.log(str.match(reg)); 
console.log(reg.exec(str));
// 结果一样 
[ 'version2.1',
  'version',
  '2',
  '1',
  index: 0,
  input: 'version2.1 version2.0',
  groups: undefined ]

console.log(str.match(reg1));  // [ 'version2.1', 'version2.0' ] 不返回子匹配项
console.log(reg1.exec(str));
// 仍返回子匹配项 index等  再次运行会从匹配结束出继续匹配
[ 'version2.1',
  'version',
  '2',
  '1',
  index: 0,
  input: 'version2.1 version2.0',
  groups: undefined ]
console.log(reg1.exec(str));
// [ 'version2.0',
  'version',
  '2',
  '0',
  index: 11,
  input: 'version2.1 version2.0',
  groups: undefined ]
