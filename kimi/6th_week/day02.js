function solution(str_list) {
    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i] === 'l') {
            return str_list.slice(0, i);
        } else if (str_list[i] === 'r') {
            return str_list.slice(i + 1);
        }
    }
    return []; // "l" 또는 "r"을 찾지 못한 경우 빈 배열 반환
}

/*
 str_list= ["u", "d", "l", "r"]
 l => 문자열 기준 왼쪽 문자열 순서대로 리스트
 r => 문자열 기준 오른쪽 문자열 순서대로 리스트
 l,r X => []
 
 r이 포함안되어야함.. +1 해보자
*/
