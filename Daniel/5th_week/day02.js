/*
    문제 2. 완주하지 못한 선수

*/

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }

  return participant[participant.length - 1];
}
