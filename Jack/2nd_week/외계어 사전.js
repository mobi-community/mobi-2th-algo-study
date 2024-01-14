// function solution(spell, dic) {
//     var answer = 0;
//     return answer;
// }

// 알파벳이 담긴 배열 spell, 외계어 사전 dic

// spell과 dic의 원소는 알파벳 소문자로만 이루어져있습니다.
// 2 ≤ spell의 크기 ≤ 10
// spell의 원소의 길이는 1입니다.
// 1 ≤ dic의 크기 ≤ 10
// 1 ≤ dic의 원소의 길이 ≤ 10
// spell의 원소를 모두 사용해 단어를 만들어야 합니다.
// spell의 원소를 모두 사용해 만들 수 있는 단어는 dic에 두 개 이상 존재하지 않습니다.
// dic과 spell 모두 중복된 원소를 갖지 않습니다.

const solution = (spell, dic) => {
    const language = [];
    
    dic.forEach(word => {
        // spell의 각 문자가 word에 정확히 한 번씩만 나타나는지 확인
        let isMatch = spell.every(char => word.includes(char) && word.split(char).length - 1 === 1);
        
        // 모든 문자가 한 번씩만 나타나고, word의 길이가 spell의 길이와 같은 경우 language에 추가
        if (isMatch && spell.length === word.length) {
            language.push(word);
        }
    });

    // 올바른 단어가 정확히 하나 있는 경우 1을, 그렇지 않은 경우 2를 반환
    return language.length === 1 ? 1 : 2;
};
