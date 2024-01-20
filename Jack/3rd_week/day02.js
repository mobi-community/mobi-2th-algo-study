// function solution(cipher, code) {
//     var answer = '';
//     return answer;
// }

const solution = (cipher, code) => {
  let answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
      //결국 못풀어서 이부분을 참고해서 적긴햇는데 왜 통과가 됐는지 이해가 잘 안됨
    answer += cipher[i];
  }
  return answer;
}