// peanut & kimi 와 노래 듣다가 급하게 푸시....ㅎ
function solution(num) {
  let count = 0;

  while (num !== 1) {
    if (count === 500) {
      return -1;
    }

    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }

    count++;
  }

  return count;
}

// 깔끔한 코드

2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(collatz(6));
