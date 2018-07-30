const format = (num) => {
    const reg=/\d{1,3}(?=(\d{3})+$)/g;
    return (num + '').replace(reg, '$&,');
}

console.log(format(12345678));

//Number.toLocalString()
console.log(12345678.toLocalString('en_US', { style:'decimal|percent|currency', currency: 'USD|EUR|CNY' }))
                                                //  数字 货币(两个小数点) 百分数             美元 欧元 人民币
