/* 

    암호 해독

    문자열 cipher와 정수 code
    암호화된 문자열 cipher
    cipher에서 code의 배수 번째 글자만 진짜 암호

*/

function solution(cipher, code) {
  let _cipher = [...cipher];
  return _cipher.filter((_, i) => (i + 1) % code === 0).join("");
}

/* 
    ex.

    cipher : "dfjardstddetckdaccccdegk"		
    code : 4
    result : "attack"

    👉 dfja rdst ddet ckda cccc degk 

    cipher를 code의 길이만큼 자른 뒤 맨 끝의 index를 pick해서 합치면 숨은 코드 색출 가능
*/
