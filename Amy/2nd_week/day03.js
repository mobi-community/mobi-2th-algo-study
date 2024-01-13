/* 

    외계어 사전

    spell에 있는 단어들의 조합으로 이뤄진 단어 사전 dic
    spell과 dic의 원소는 알파벳 소문자로만 이루어져있음


    ex. 

    spell : ["p", "o", "s"] 👉 dic : ["sod", "eocd", "qixm", "adio", "soo"] 👉 result 2
    spell : ["z", "d", "x"] 👉 dic : ["def", "dww", "dzx", "loveaw"] 👉 result 1

*/

function solution(spell, dic) {
  let answer = 0;

  // 통과가 안 돼서 spell도 알파벳 순으로 정렬함 (유니코드 값 순서대로 정렬)
  spell = spell.sort().join("");

  // dic의 단어들을 쪼개서 알파벳 순으로 정렬
  const sortedDic = dic.map((word) => word.split("").sort().join(""));

  // 정렬된 단어에서 spell과 dic에 같은 알파벳이 있는지 확인, 결과에 따라 1이나 2 보여주기
  answer = sortedDic.find((dic) => dic === spell) !== undefined ? 1 : 2;

  return answer;
}

function solution(spell, dic) {
  spell = spell.sort().join("");
  // 한 줄로 연결해서 바로 제출해버릴 수 있음 👀

  return dic
    .map((word) => word.split("").sort().join(""))
    .find((dic) => dic === spell) !== undefined
    ? 1
    : 2;
}

// 잘 줄인 줄 알고 뿌듯했는데 아예 한 줄 코드가 존재했다...!

function solution(p, d) {
  return d.some((s) => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}
function solution(spell, dic) {
  return dic.filter((v) => spell.every((c) => v.includes(c))).length ? 1 : 2;
}

// 처음에 for 문 생각도 했었는데..

function solution(spell, dic) {
  var answer = 0;

  for (let i = 0; i < dic.length; i++) {
    if (isAlienLanguage(spell, dic[i])) return 1;
  }
  return 2;
}

function isAlienLanguage(spell, dic) {
  let word = dic.split("").sort((a, b) => b - a);
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i + 1]) {
      word = word.splice(i + 1, 1);
      i = 0;
    }

    for (let j = 0; j < spell.length; j++) {
      if (word[i] == spell[j]) {
        count++;
      }
    }
  }

  if (count == spell.length) {
    return true;
  }
  return false;
}
