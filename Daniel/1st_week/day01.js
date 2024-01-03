/*
    문제 1. 프로그래머스 커피 심부름
*/

function solution(order = []) {
  let answer = 0;

  order.map((coffee) => {
    if (coffee.includes("cafelatte")) {
      answer += 5000;
    } else {
      answer += 4500;
    }
  });

  return answer;
}
