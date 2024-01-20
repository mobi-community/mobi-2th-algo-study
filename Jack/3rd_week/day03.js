// function solution(numbers) {
//     var answer = 0;
//     return answer;
// }

// const solution = (numbers) => {
//     // 대체할 문자열 배열로 넣기
//     let answer = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//      //for로 넣어서 numbers의 숫자의 길이로 자를려고했지만 실패
//     for(i = 0, i<numbers.lenght,i++){
//         numbers = numbers.split(answer[i]).join(i);
//     }
//     return Number(numbers)
// }

function solution(numbers) {
    // 대체할 문자열 배열로 넣기
  const answer = ["zero", "one", "two", "three", "four", "five",
                 'six', "seven", "eight", "nine"]
    //forEach를 사용하면 통과할 수 있다
  answer.forEach((nums, index) => {
// 똑같이 split을 통해 number를 자르고, 자른 곳을 join해서 index를 넣는것을 생각했다.
    numbers = numbers.split(nums).join(index)}) 
  // 숫자로 반환하기 위해서 Number() 사용
  return Number(numbers)
}