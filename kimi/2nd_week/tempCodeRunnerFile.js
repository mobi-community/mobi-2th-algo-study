function solution(spell, dic) {
    let answer = 0;
    spell = spell.sort().join("");
    let dicFind = dic.forEach(el => el.spilt("").sort().join(""))
    console.log(dicFind)
    if (dicFind == spell) {
        return answer = 1;
    } else {
        return answer = 2;
    }
    
} 