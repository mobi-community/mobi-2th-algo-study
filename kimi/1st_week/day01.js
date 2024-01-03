/*
누적합계 구하기
가격 accPrice

단서
1. cafelatte라는 단어가 있으면 5000원 아니면 4500원
2. 누적: reduce()


메뉴만 적은 사람들: 차가운 메뉴

아메리카노 : 4500
아무거나 = 차가운 아메리카노

카페라떼 : 5000 // 예외
*/

function solution(order) {
    let answer = 0;
    for (let i = 0; i < order.length; i++) {
        if (order[i].includes('cafelatte')) {
            answer = answer + 5000
        } else {
            answer = answer + 4500
        }
    }
    return answer;
}
