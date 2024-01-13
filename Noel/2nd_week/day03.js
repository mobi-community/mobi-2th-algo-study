// PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다.
// 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다.
//  spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(spell, dic) {
  var answer = 2;
  for (let i = 0; i < dic.length; i++) {
    let count = 0;
    for (let j = 0; j < spell.length; j++) {
      if (dic[i].includes(spell[j])) {
        count += 1;
      }
      if (count === spell.length) {
        answer = 1;
      }
    }
  }
  return answer;
}

// spell 안에 있는 모든 알파벳이 dic 안에있는 단어 중 하나에 만족해야 하므로 dic 안의 요소 중 하나는 spell의 모든 알파벳을 포함해야한다
// 즉슨 dic 의 길이만큼 순회하며 dic요소 중 spell의 모든 요소를 갖고 있는 것이 있으면 1을 반환하면 된다.
// spell의 길이만큼 반복문을 돌리고 각각 dic의 요소에 포함하는지 확인한 다음 spell의 길이만큼 포함할 경우(해당 dic 요소가 spell의 모든 요소를 포함할 경우)
// answer 1을 반환
