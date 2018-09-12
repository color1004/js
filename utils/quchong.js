var str = 'aabfggbbbss';
str.replace(/([a-z])(\1)+/g, '$1');

var str = '  aab s ';
str.replace(/^\w+|\w+$/g, '');
