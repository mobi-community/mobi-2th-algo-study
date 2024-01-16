/* 
    서울에서 김서방 찾기

    seoul -> string 배열
    Kim의 위치 = x
    return = "김서방은 x에 있다"

    kim은 오직 한 번만 seoul에 나타남
*/

function solution(seoul) {
  // seoul 배열을 순회해 x를 찾기
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`;
  }
}

// 다른 사람 풀이

function solution(seoul) {
  return "김서방은 " + seoul.indexOf("Kim") + "에 있다";
}

// string.indexOf(searchvalue[, position])

// indexOf 함수는, 문자열(string)에서 특정 문자열(searchvalue)을 찾고,
// 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴한다.
