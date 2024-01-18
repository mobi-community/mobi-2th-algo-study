/*
    문제 2. 암호 해독
*/

function solution(cipher, code) {
  let answer = "";
  let codeNum = 0;

  while (codeNum + code <= cipher.length) {
    codeNum += code;

    answer += cipher[codeNum - 1];
  }

  return answer;
}
