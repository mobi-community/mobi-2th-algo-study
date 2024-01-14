function solution(spell, dic) {
    spell = spell.sort().join("")
    return dic.map(word => word.split("").sort().join("")).find(word => word===spell) ? 1 : 2
} 



/*
return 값: 1(spell O), 2(spell X) -
spell에 담긴 알파벳을 한 번씩만 모두 사용한 단어 존재
spell의 원소 모두사용해 만들 수 있는 단어 dic에 두 개이상 존재X
중복된 요소 없고 같은지 확인위해 정렬 -> sort
*/
