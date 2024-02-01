/* 
마라톤에 참여한 선수들의 이름이 담긴 배열 participant
완주한 선수들의 이름이 담긴 배열 completion

완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

*/

function solution(participant, completion) {
    // 1. 참가자와 완주자를 정렬
    participant.sort();
    completion.sort();
    
    // 2. 완주하지 못한 선수 찾기
    for (let i = 0; i < completion.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
    
    // 3. 마지막 참가자가 완주하지 못한 경우 처리 (배열의 길이가 다르므로 맨 마지막 이름을 뱉기)
    return participant[participant.length - 1];
}


// 다른 사람 풀이
// 완주자 배열을 {이름:완주자배열에 등장하는 횟수}로 맵핑하고, 
//그 맵에 참가자 이름 하나씩 넣어서 찾아볼때마다 횟수 떨어뜨려서 횟수 0나오는 놈 찾아뱉는 함수같네요

var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))
var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))

/* 

참가자 배열(participant)과 완주자 배열(completion)을 인자로 받아서 누락된 참가자를 찾아내는 함수

1. participant.find 👉 배열 participant에서 참가자를 찾음

2. name => !completion[name]-- 👉 람다 함수
현재 참가자가 완주자 배열(completion)에 존재하지 않으면 참가자 이름을 반환

3. completion.map(name => completion[name] = (completion[name] | 0) + 1) 👉 람다 함수
완주자 배열을 순회하면서 각 이름에 대해 해당 이름이 나온 횟수를 저장
| 0 => 비트 OR 연산자를 사용하여 숫자로 형변환을 시도

코드의 의도가 명확하지 않다는 문제 존재
!completion[name]--에서 후위 감소 연산자(--)를 사용하면 값이 반환되기 전에 먼저 감소가 이루어져서 원하는 동작이 이루어지지 않을 수 있음.
completion.map에서 completion[name]이라는 표현이 어색 
name이름의 완주자의 횟수를 저장하려는 의도로 보이지만 일반적인 경우가 아님

아래는 위 문제를 해결한 코드 : 
*/

function solution(participant, completion) {
    const participantMap = {};

    // 참가자 배열을 순회하며 이름과 횟수를 매핑
    participant.forEach(name => {
        participantMap[name] = (participantMap[name] || 0) + 1;
    });

    // 완주자 배열을 순회하며 참가자 맵에서 횟수를 감소
    completion.forEach(name => {
        participantMap[name]--;
    });

    // 남아있는 참가자 맵에서 횟수가 0보다 큰 경우를 찾아 반환
    const missingParticipant = Object.keys(participantMap).find(name => participantMap[name] > 0);

    return missingParticipant;
}