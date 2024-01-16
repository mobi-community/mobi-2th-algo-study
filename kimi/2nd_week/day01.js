function solution(chicken) {
    let service = 0;
    while (chicken > 9) {
        service += Math.floor(chicken / 10);
        chicken = Math.floor(chicken / 10) + (chicken % 10);
    }
    return service;
}

/*
return: 최대 서비스 받을 수 있는 치킨의 수
쿠폰 10장당 한마리 서비스
정수 = Math.floor
*/
// 2풀이
function solution(chicken) {
    return parseInt((chicken - 1) / 9);
}

// 3풀이
function solution(chicken) {
    return ~~(chicken * 0.111111);
}

/*
~~ 연산자는 비트 연산자인 논리 NOT 연산자를 두 번 사용하여 소수점 아래의 값이 버려지고 정수 부분만 남게 됩니다
이 코드는 chicken 값을 9로 나눈 후 소수점 아래 값을 버리고, 정수 부분인 최대 서비스 치킨의 개수를 반환하는 것입니다.
 */
