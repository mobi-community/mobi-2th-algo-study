/* 
문자열 배열 strArr가 주어집니다. 
배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거하고 
남은 문자열을 순서를 유지하여 배열로 return 하는 solution 함수를 완성해 주세요.

*/

// replaceAll로 풀고 싶었는데 1/2만 패스해서 아래 filter로 일단 풀고 제출
function solution(strArr) {
  return strArr.map((str) => str.replaceAll("ad", ""));
}

function solution(strArr) {
  return strArr.filter((el) => !el.includes("ad"));
}
