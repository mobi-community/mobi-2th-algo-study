/* lv0. 저주의 숫자 3 */

function solution(n) {
  let answer = 0;

  for (let i = 0; i < n; i++) {
    // 2 이상부터는 + 1해서 돌려보내기
    answer += 1;

    // n이 3의 배수이거나 '3'이 들어가는 경우 한 번 더
    // 1을 더해도 3의 배수이거나 '3'을 포함할 수 있으므로 결과가 false가 될 때까지 반복하도록 while 사용
    while (answer % 3 === 0 || answer.toString().split("").includes("3")) {
      answer += 1;
    }
  }

  return answer;
}

/* 
    다른 사람들 풀이를 보니...

    toString().split("") 부분을 (''+num) 으로 처리할 수도 있음
    while 대신 if 문에 continue를 써줄 수 있음

*/

// 다른 사람 풀이 :
function solution(n) {
  // 3의 배수만 모아놓은 배열의 값들이 더 이상 3의 배수가 아니거나 3을 포함하지 않을 때까지 + 1 반복
  return [...Array(n * 3)]
    .map((_, i) => i + 1)
    .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}
