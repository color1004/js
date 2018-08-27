function ajax(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(t);
    },t*1000)
  })
}
async function test() {
  try {
    console.log(new Date())
    const a1 = await ajax(1);
    console.log(a1, new Date()) // 串行
    const a2 = await ajax(2);
    console.log(a2, new Date())
    const a3 = await ajax(3);
    console.log(a3, new Date())
  } catch (error) {
    console.log(err);
  }
}
test();

async function test1() {
  try {
    console.log(new Date())
    const a1 = ajax(1);
    const a2 = ajax(2);
    const a3 = ajax(3);
    // 并行
    Promise.all([a1,a2,a3]).then((values) => {  // 返回的是一个数组
      console.log(values,new Date())
    })
  } catch (error) {
    console.log(err);
  }
}
test1();
