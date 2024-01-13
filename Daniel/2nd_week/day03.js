/*
    문제 3. 외계어 사전

    테스트 3,6 실패
*/
function solution(spell = [], dic = []) {
  let result = 0;

  for (let i = 0; i < dic.length; i++) {
    if (result === spell.length) {
      return 1;
    }
    result = 0;

    for (let j = 0; j < spell.length; j++) {
      if (dic[i].includes(spell[j])) {
        result += 1;
      }
    }
  }

  return 2;
}
