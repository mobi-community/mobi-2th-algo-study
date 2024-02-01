function solution(participant, completion) {
    let fail = '';
    
    let player = new Map();
    
    for (let p of participant) {
        // 해당 참가자 있는가?
        player.set(p, player.get(p) + 1 || 1);
    }
    // Map(3) { 'mislav' => 2, 'stanko' => 1, 'ana' => 1 }

    for (let c of completion) {
        // eden, kiki
        if(player.get(c) === 1) {
            player.delete(c);
        } else {
            player.set(c, player.get(c) -1);
        }
    }
    
   for (let [key, value] of player) {
        fail = key;
    }
    return fail
}

/*
return: 완주하지 못한 선수의 이름 (participant-completion = 1)
participant: 참여자 명단
completion: 완주자 명단

key: 참가자 이름, value: 그 이름의 참가자 인원수
value가 1인 key가 반드시 남게된다

set key value
get value

new Map()
키-값 쌍을 저장, 
Map 객체는 객체와는 다르게 키나 값에 어떠한 자료형도 사용순서가 보장
요소들이 삽입된 순서대로 반복
*/