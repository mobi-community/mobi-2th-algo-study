// 제출한 solution 함수
const solution = (order) =>
  order.reduce(
    (price, order) => price + (order.includes("cafelatte") ? 5000 : 4500),
    0
  );

// array.prototype.incudes 를 사용하려고 했으나 계속 통과를 못해서 그냥 array.prototype.reduce 사용
// mdn : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// 처음에 제출하려고 했던 함수

function whyNot(order) {
  let totalPrice = 0;

  for (let i = 0; i < order.length; i++) {
    if (order[i].includes("cafelatte")) totalPrice = +5000;
    else totalPrice = +4500;
  }

  return totalPrice;
}
