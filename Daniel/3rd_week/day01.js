/*
    문제 1. 서울에서 김서방 찾기
*/

function solution(seoul = []) {
  let answer = "";

  seoul.map((el, idx) => {
    if (el === "Kim") {
      answer = idx;
    }
  });

  return `김서방은 ${answer}에 있다`;
}
