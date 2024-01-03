/* 
문제

커피 심부름, 아메리카노는 ice,hot 둘 다 4500 && 라떼는 ice,hot 둘 다 5000
아무거나는 아메리카노로 간주

*/

// 제출한 solution 함수
const solution = (order) =>
  order.reduce(
    (price, order) => price + (order.includes("cafelatte") ? 5000 : 4500),
    0
  );

// array.prototype.incudes 를 사용하려고 했으나 계속 통과를 못해서 그냥 array.prototype.reduce 사용
// mdn : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// 처음에 제출하려고 했던 함수
// 제출하고나서 보니 똑같은 풀이 제출했던데 왜 나만 통과 안 시켜주지..? 왜....? 난 뭐가 달라서..?
function whyNot(order) {
  let totalPrice = 0;

  for (let i = 0; i < order.length; i++) {
    if (order[i].includes("cafelatte")) {
      totalPrice = totalPrice + 5000;
    } else {
      totalPrice = totalPrice + 4500;
    }
  }

  return totalPrice;
}

// 번외 : 이름 바꾸면 됨, 굳이 작명하지 말자....
function solution(order) {
  let result = 0;

  for (let i = 0; i < order.length; i++) {
    if (order[i].includes("cafelatte")) {
      result = result + 5000;
    } else {
      result = result + 4500;
    }
  }

  return result;
}
