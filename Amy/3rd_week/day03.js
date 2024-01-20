/* 
    영어가 싫어요

    영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
    문자열 numbers가 매개변수로 주어질 때, 
    numbers를 정수로 바꿔 return 하도록 solution 함수를 완성

    * numbers는 소문자로만 구성되어 있습니다.
    * numbers는 "zero", "one", "two", "three", "four", 
      "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합
    * "zero"는 numbers의 맨 앞 X
*/

function solution(numbers) {
  // 대체할 문자열 배열
  let numberString = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  // 전달받은 numbers를 위 배열을 기준으로 정수로 바꾸기
  // numbers 순회하며 numberString 적용 👉 foreach 👉 forEach(callbackFn, thisArg)
  // 대체 👉 replaceAll 👉 replaceAll(pattern, replacement)

  // pattern = numberString, replacement = string's index
  numberString.forEach((string, index) => {
    numbers = numbers.replaceAll(string, index);
  });

  // Number()를 안 해주면 통과가 안 됨
  return Number(numbers);
}

// 다른 사람의 풀이 1
function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    (v) => {
      return obj[v];
    }
  );

  return Number(num);
}
