/* 
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

*/

// 바로 생각난 거 (반복 ?  for문 go...)
function solution(n) {
  let answer = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) answer += "수";
    else answer += "박";
  }
  return answer;
}

// 일단 통과되고 좀 더 생각한 거 (다른 반복... repeat? googling go...)
function solution(n) {
  // "수박" 반복을 짝수 번 반복하고, 홀수인 경우에는 마지막에 "수"를 추가
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
}
