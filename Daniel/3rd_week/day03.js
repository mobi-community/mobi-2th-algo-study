/*
    문제 2. 영어가 싫어요
*/
function solution(numbers) {
  let answer = 0;

  const strNumArr = [
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

  const answerArr = strNumArr.map((el, idx) => {
    if (numbers.includes(el)) {
      return {
        index: numbers.indexOf(el),
        num: idx,
      };
    }
  });

  const sortedArr = answerArr
    .filter((item) => item !== undefined)
    .sort((a, b) => a.index - b.index);

  const numArray = sortedArr.map((item) => item.num);

  return parseInt(numArray.join(""));
}
