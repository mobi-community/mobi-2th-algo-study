/*
    문제 2. 저주의 숫자 3
*/

function solution(num) {
  let answer = 0;

  for (let i = 1; i <= num; i++) {
    answer += 1;

    while (parseInt(answer) % 3 === 0 || String(answer).includes("3")) {
      answer += 1;
    }
  }

  return answer;
}
