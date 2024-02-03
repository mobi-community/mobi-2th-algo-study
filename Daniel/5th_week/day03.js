/*
    문제 3. 수박수박수박수박수박수?
*/
function solution(n) {
  let answer = "";
  let num = 0;

  while (num < n) {
    if (num % 2 === 0) {
      answer += "수";
    } else {
      answer += "박";
    }
    num++;
  }

  return answer;
}
